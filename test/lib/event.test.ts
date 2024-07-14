import { expect, test, vi } from "vitest";
import EventBus, { EventType, OpenAnkiCardModalEvent } from "@/lib/events/event";
import Example from "@/lib/example";

test('test subscribe and publish', () => {
    const eventBus = EventBus.getInstance();
    const listener = vi.fn();
    eventBus.subscribe(EventType.OPEN_ANKI_CARD_MODAL, listener);
    const example = {} as Example;
    eventBus.publish(new OpenAnkiCardModalEvent(example));
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(new OpenAnkiCardModalEvent(example));
});
