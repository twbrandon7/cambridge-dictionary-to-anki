import { CefrLevel } from "./cefr-level";
import BaseBlock from "./base-block";

export default class DefinitionBlock extends BaseBlock {
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
}
