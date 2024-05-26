import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";
import Example from "./example";

export default class Initializer {
    constructor(protected readonly element: HTMLElement) {}

    protected getEntryBodies(): EntryBody[] {
        const entryBodies = this.element.querySelectorAll('.entry-body__el');
        return Array.from(entryBodies).map((element: Element) => new EntryBody(element as HTMLElement));
    }

    public getExamples(): Example[] {
        const entryBodies = this.getEntryBodies();
        const dsenseBlocks = entryBodies.map((entryBody: EntryBody) => entryBody.getDsenseBlocks()).flat();
        const baseBlocks = dsenseBlocks.map((dsenseBlock: DsenseBlock) => [
            ...dsenseBlock.getDefinitionBlocks(),
            ...dsenseBlock.getPhraseBlocks(),
        ]).flat();
        return baseBlocks.map((baseBlock) => baseBlock.getExamples()).flat();
    }
}
