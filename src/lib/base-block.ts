import { Definable } from "./interface/definable";
import { Example, Examplable } from "./interface/examplable";
import { filterBoldTextFromElement } from "./parser-util";

export default abstract class BaseBlock implements Definable, Examplable {
    constructor (protected readonly element: HTMLElement) {}
    
    public getEnglishDefinition(): string | null {
        return this.element.querySelector('.def')?.textContent ?? null;
    }

    public getZhTwDefinition(): string | null {
        return this.element.querySelector('.def-body.ddef_b')?.querySelector(':scope > .trans')?.textContent ?? null;
    }

    public getExamples(): Example[] {
        const exampleBlocks = this.element.querySelectorAll('.def-body .examp.dexamp');
        const examples: Example[] = [];
        exampleBlocks.forEach((exampleBlock) => {
            const englishExample = filterBoldTextFromElement(exampleBlock.querySelector('.eg') as HTMLElement);
            const zhTwExample = exampleBlock.querySelector('.trans')?.textContent ?? '';
            examples.push({ englishExample, zhTwExample });
        });
        return examples;
    }
}
