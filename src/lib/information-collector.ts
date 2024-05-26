import { CefrLevel } from "./cefr-level";
import DefinitionBlock from "./definition-block";
import Example from "./example";

export interface CardInformation {
    word: string;
    partOfSpeech: string;
    guideWord: string;
    englishDefinition: string;
    definitionTranslation: string;
    cefrLevel: CefrLevel | null;
    code: string | null;
    englishExample: string;
    exampleTranslation: string;
}

export default class InformationCollector {
    constructor(protected readonly example: Example) { }

    public getCardInformation(): CardInformation {
        return {
            word: this.example.getParent().getParent().getParent().getWord() ?? '',
            partOfSpeech: this.example.getParent().getParent().getParent().getPartOfSpeech() ?? '',
            guideWord: this.example.getParent().getParent().getGuideWord() ?? '',
            englishDefinition: this.example.getParent().getEnglishDefinition() ?? '',
            definitionTranslation: this.example.getParent().getZhTwDefinition() ?? '',
            cefrLevel: this.example.getParent() instanceof DefinitionBlock ? (this.example.getParent() as DefinitionBlock).getLevel() : null,
            code: this.example.getParent() instanceof DefinitionBlock ? (this.example.getParent() as DefinitionBlock).getCode() : null,
            englishExample: this.example.getEnglishExample(),
            exampleTranslation: this.example.getExampleTranslation(),
        };
    }
}