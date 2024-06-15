import Example from "./example";
import { AuthToken } from "./jwt-token";

export enum EventType {
    OPEN_ANKI_CARD_MODAL = 'OPEN_ANKI_CARD_MODAL',
    OPEN_CONFIG_MODAL = 'OPEN_CONFIG_MODAL',
    OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_CANCELLED = 'LOGIN_CANCELLED',
};

export interface Event {
    eventType: EventType;
}

export class OpenAnkiCardModalEvent implements Event {
    eventType: EventType = EventType.OPEN_ANKI_CARD_MODAL;
    constructor(public readonly example: Example) {}
}

export class OpenConfigModalEvent implements Event {
    eventType: EventType = EventType.OPEN_CONFIG_MODAL;
}

export class OpenLoginModalEvent implements Event {
    eventType: EventType = EventType.OPEN_LOGIN_MODAL;
}

export class LoginFailedEvent implements Event {
    eventType: EventType = EventType.LOGIN_FAILED;
    constructor(public readonly message: string) {}
}

export class LoginSuccessEvent implements Event {
    eventType: EventType = EventType.LOGIN_SUCCESS;
    constructor(public readonly token: AuthToken) {}
}

export class LoginCancelledEvent implements Event {
    eventType: EventType = EventType.LOGIN_CANCELLED;
    constructor(public readonly message: string) {}
}

export type EventListener = (event: Event) => void;

export default class EventBus {
    private static instance: EventBus;
    private events: Map<EventType, EventListener[]>;

    private constructor() {
        this.events = new Map();
    }

    static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }

    subscribe(eventType: EventType, callback: EventListener): void {
        if (!this.events.has(eventType)) {
            this.events.set(eventType, []);
        }
        this.events.get(eventType)?.push(callback);
    }

    publish(event: Event): void {
        const eventType = event.eventType;
        if (!this.events.has(eventType)) {
            return;
        }
        this.events.get(eventType)?.forEach((callback) => callback(event));
    }

    unsubscribe(eventType: EventType, callback: EventListener): void {
        if (!this.events.has(eventType)) {
            return;
        }
        const listeners = this.events.get(eventType);
        const index = listeners?.indexOf(callback);
        if (index !== undefined && index !== -1) {
            listeners?.splice(index, 1);
        }
    }
}
