import Example from "./example";

export enum EventType {
    OPEN_ANKI_CARD_MODAL = 'OPEN_ANKI_CARD_MODAL',
    OPEN_CONFIG_MODAL = 'OPEN_CONFIG_MODAL',
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
}
