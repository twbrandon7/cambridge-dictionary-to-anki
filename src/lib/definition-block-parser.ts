import { CefrLevel } from "./cefr-level";

export interface Example {
    englishExample: string;
    zhTwExample: string;
}

export default class DefinitionBlockParser {
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
            const englishExample = DefinitionBlockParser.filterBoldTextFromElement(exampleBlock.querySelector('.eg') as HTMLElement);
            const zhTwExample = exampleBlock.querySelector('.trans')?.textContent ?? '';
            examples.push({ englishExample, zhTwExample });
        });
        return examples;
    }

    private static filterBoldTextFromElement(element: HTMLElement): string {
        let result = "";
        element.childNodes.forEach((child: ChildNode) => {
            // if current has class `b`, then wrap it with <b> tag
            if (child instanceof HTMLElement && child.classList.contains('b')) {
                result += `<b>${child.textContent}</b>`;
            } else {
                result += child.textContent;
            }
        });
        return result;
    }
}