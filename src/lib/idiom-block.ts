import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";

export default class IdiomBlock extends EntryBody {
    public getWord(): string | null {
        return this.element.querySelector('.di-title > .headword')?.textContent ?? null;
    }

    public getPartOfSpeech(): string | null {
        return this.element.querySelector('.di-info > .pos')?.textContent ?? null;
    }

    public getCode(): string | null {
        return null;
    }

    public getDsenseBlocks(): DsenseBlock[] {
        const dsenseBlocks = this.element.querySelector('.idiom-body')?.querySelectorAll(':scope > .dsense') ?? [];
        return Array.from(dsenseBlocks)?.map((element: Element) => new DsenseBlock(element as HTMLElement, this));
    }
}
