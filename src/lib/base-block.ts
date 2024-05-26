import DsenseBlock from "./dsense-block";
import Example from "./example";
import { Definable } from "./interface/definable";
import { Examplable } from "./interface/examplable";
import { filterBoldTextFromElement } from "./parser-util";

export default abstract class BaseBlock implements Definable, Examplable {
    constructor (protected readonly element: HTMLElement, protected readonly parent: DsenseBlock) {}
    
    public getEnglishDefinition(): string | null {
        return this.element.querySelector('.def')?.textContent ?? null;
    }

    public getZhTwDefinition(): string | null {
        return this.element.querySelector('.def-body.ddef_b')?.querySelector(':scope > .trans')?.textContent ?? null;
    }

    public getExamples(): Example[] {
        const exampleBlocks = this.element.querySelectorAll('.def-body .examp.dexamp');
        return Array.from(exampleBlocks).map((element: Element) => {
            return new Example(element as HTMLElement, this);
        });
    }

    public getParent(): DsenseBlock {
        return this.parent;
    }
}
