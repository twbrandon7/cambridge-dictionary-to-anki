import DefinitionBlock from "./definition-block";
import PhraseBlock from "./phrase-block";

export default class DsenseBlock {
    constructor(protected readonly element: HTMLElement) {}

    public getGuideWord(): string | null {
        return this.element.querySelector('.dsense_h .guideword')?.textContent?.replaceAll(/[\(\n\)]/g, '') ?? null;
    }

    public getDefinitionBlocks(): DefinitionBlock[] {
        const definitionBlocks = this.element.querySelector('.sense-body.dsense_b')?.querySelectorAll(':scope > .def-block') ?? [];
        return Array.from(definitionBlocks).map((definitionBlock: Element) => new DefinitionBlock(definitionBlock as HTMLElement));
    }

    public getPhraseBlocks(): PhraseBlock[] {
        const definitionBlocks = this.element.querySelector('.sense-body.dsense_b')?.querySelectorAll(':scope > .phrase-block') ?? [];
        return Array.from(definitionBlocks).map((definitionBlock: Element) => new DefinitionBlock(definitionBlock as HTMLElement));
    }
}
