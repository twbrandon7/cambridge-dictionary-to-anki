import BaseBlock from "./base-block";
import { filterBoldTextFromElement } from "./parser-util";

export default class Example {
    constructor(protected readonly element: HTMLElement, protected readonly parent: BaseBlock) {}

    public getEnglishExample() {
        const englishExample = filterBoldTextFromElement(this.element.querySelector('.eg') as HTMLElement);
        return englishExample.trim();
    }

    public getExampleTranslation() {
        const exampleTranslation = this.element.querySelector('.trans')?.textContent ?? '';
        return exampleTranslation.trim();
    }

    public toJson() {
        return {
            englishExample: this.getEnglishExample(),
            translation: this.getExampleTranslation(),
        };
    }

    public getParent() {
        return this.parent;
    }
}
