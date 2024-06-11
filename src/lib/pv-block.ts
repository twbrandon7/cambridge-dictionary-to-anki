import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";

export default class PvBlock extends EntryBody {
    public getWord(): string | null {
        return this.element.querySelector('.di-title > .headword')?.textContent ?? null;
    }

    public getPartOfSpeech(): string | null {
        const ancInfo = this.element.querySelector('.pos-header > .anc-info-head')?.textContent ?? null;
        const pos = this.element.querySelector('.pos-header > .pos')?.textContent ?? null;
        if (ancInfo === null && pos === null) {
            return null;
        }
        return (ancInfo ?? '') + (pos ?? '');
    }

    public getCode(): string | null {
        return null;
    }

    public getDsenseBlocks(): DsenseBlock[] {
        const dsenseBlocks = this.element.querySelector('.pv-body')?.querySelectorAll(':scope > .dsense') ?? [];
        return Array.from(dsenseBlocks)?.map((element: Element) => new DsenseBlock(element as HTMLElement, this));
    }
}
