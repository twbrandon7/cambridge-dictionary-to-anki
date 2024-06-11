import BaseBlock from "./base-block";

export default class PhraseBlock extends BaseBlock {
    public getPhraseTitle(): string | null {
        return this.element.querySelector('.phrase-title')?.textContent ?? '';
    }

    public getPhraseInfo(): string | null {
        return this.element.querySelector('.phrase-info')?.textContent ?? '';
    }
}
