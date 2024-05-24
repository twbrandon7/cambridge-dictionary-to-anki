import { CefrLevel } from "./cefr-level";
import { Definable } from "./interface/definable";
import { Example, Examplable } from "./interface/examplable";
import { filterBoldTextFromElement } from "./parser-util";

export default class DefinitionBlock implements Examplable, Definable {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    public getLevel(): CefrLevel | null {
        const levelStr = this.element.querySelector('.epp-xref')?.textContent;
        if (!levelStr) {
            return null;
        }
        return levelStr as CefrLevel;
    }

    /**
     * @see https://dictionary.cambridge.org/zht/help/codes.html
     */
    public getCode(): string | null {
        return this.element.querySelector('.gram.dgram')?.textContent ?? null;
    }

    public getEnglishDefinition(): string | null {
        return this.element.querySelector('.def')?.textContent ?? null;
    }

    public getZhTwDefinition(): string | null {
        return this.element.querySelector('.def-body .trans')?.textContent ?? null;
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
