import BaseBlock from "./base-block";
import { filterBoldTextFromElement } from "./parser-util";
import img from '@/assets/anki_104026.svg';

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

    public injectAnkiButton() {
        const ankiButton = document.createElement('button');
        ankiButton.type = 'button';
        ankiButton.classList.add('anki-button');

        const image = document.createElement('img');
        image.src = img;
        ankiButton.appendChild(image);
        
        this.element.appendChild(ankiButton);
        this.element.classList.add('with-anki-button');
    }
}
