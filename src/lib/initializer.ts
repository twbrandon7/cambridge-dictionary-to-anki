import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";
import Example from "./example";
import PosBlock from "./pos-block";
import PvBlock from "./pv-block";

export default class Initializer {
    constructor(protected readonly element: HTMLElement) {}

    protected getEntryBodies(): EntryBody[] {
        const entryBodies = this.element.querySelectorAll('.entry-body__el');
        return Array.from(entryBodies).map((element: Element) => {
            const pvBlocks = Array.from(element.querySelectorAll('.pv-block')).map((pvBlock: Element) => new PvBlock(pvBlock as HTMLElement));
            if (pvBlocks.length > 0) {
                return pvBlocks;
            }
            return [new PosBlock(element as HTMLElement)];
        }).flat();
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
