import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";

export default class PosBlock extends EntryBody {
    public getWord(): string | null {
        return this.element.querySelector('.headword .hw')?.textContent ?? null;
    }

    public getPartOfSpeech(): string | null {
        return this.element.querySelector('.posgram .pos')?.textContent ?? null;
    }

    public getCode(): string | null {
        return this.element.querySelector('.gram.dgram')?.textContent ?? null;
    }

    public getDsenseBlocks(): DsenseBlock[] {
        const dsenseBlocks = this.element.querySelector('.pos-body')?.querySelectorAll(':scope > .dsense') ?? [];
        return Array.from(dsenseBlocks)?.map((element: Element) => new DsenseBlock(element as HTMLElement, this));
    }
};
