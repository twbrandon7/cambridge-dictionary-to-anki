import DefinitionBlock from "./definition-block";
import EntryBody from "./entry-body";
import PhraseBlock from "./phrase-block";

export default class DsenseBlock {
    constructor(protected readonly element: HTMLElement, protected readonly parent: EntryBody) {}

    public getGuideWord(): string | null {
        return this.element.querySelector('.dsense_h .guideword')?.textContent?.replaceAll(/[\(\n\)]/g, '')?.trim() ?? null;
    }

    public getDefinitionBlocks(): DefinitionBlock[] {
        const definitionBlocks = this.element.querySelector('.sense-body.dsense_b')?.querySelectorAll(':scope > .def-block') ?? [];
        return Array.from(definitionBlocks).map((definitionBlock: Element) => new DefinitionBlock(definitionBlock as HTMLElement, this));
    }

    public getPhraseBlocks(): PhraseBlock[] {
        const definitionBlocks = this.element.querySelector('.sense-body.dsense_b')?.querySelectorAll(':scope > .phrase-block') ?? [];
        return Array.from(definitionBlocks).map((definitionBlock: Element) => new PhraseBlock(definitionBlock as HTMLElement, this));
    }

    public getParent(): EntryBody {
        return this.parent;
    }
}
