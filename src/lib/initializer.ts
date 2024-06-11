import DsenseBlock from "./dsense-block";
import EntryBody from "./entry-body";
import Example from "./example";
import IdiomBlock from "./idiom-block";
import PosBlock from "./pos-block";
import PvBlock from "./pv-block";

export default class Initializer {
    constructor(protected readonly element: HTMLElement) {}

    protected getDsenseBlocksFromEntryBodies(): DsenseBlock[] {
        const entryBodyElements = this.element.querySelectorAll('.entry-body__el');
        const entryBodies = Array.from(entryBodyElements).map((element: Element) => {
            const pvBlocks = Array.from(element.querySelectorAll('.pv-block')).map((pvBlock: Element) => new PvBlock(pvBlock as HTMLElement));
            if (pvBlocks.length > 0) {
                return pvBlocks;
            }
            return [new PosBlock(element as HTMLElement)];
        }).flat();
        return entryBodies.map((entryBody: EntryBody) => entryBody.getDsenseBlocks()).flat();
    }

    protected getDsenseBlocksFromIdiomBlocks(): DsenseBlock[] {
        const idiomBlockElements = this.element.querySelectorAll('.idiom-block');
        const idiomBlocks = Array.from(idiomBlockElements).map((element: Element) => new IdiomBlock(element as HTMLElement));
        return idiomBlocks.map((idiomBlock: EntryBody) => idiomBlock.getDsenseBlocks()).flat();
    }

    public getExamples(): Example[] {
        const dsenseBlocks = [
            ...this.getDsenseBlocksFromEntryBodies(),
            ...this.getDsenseBlocksFromIdiomBlocks(),
        ];
        const baseBlocks = dsenseBlocks.map((dsenseBlock: DsenseBlock) => [
            ...dsenseBlock.getDefinitionBlocks(),
            ...dsenseBlock.getPhraseBlocks(),
        ]).flat();
        return baseBlocks.map((baseBlock) => baseBlock.getExamples()).flat();
    }
}
