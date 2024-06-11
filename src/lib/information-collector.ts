import { CefrLevel } from "./cefr-level";
import DefinitionBlock from "./definition-block";
import Example from "./example";
import PhraseBlock from "./phrase-block";

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
        let code = this.example.getParent() instanceof DefinitionBlock ? (this.example.getParent() as DefinitionBlock).getCode() : null;
        if (code === null) {
            code = this.example.getParent().getParent().getParent().getCode();
        }
        let word = this.example.getParent().getParent().getParent().getWord() ?? '';
        let partOfSpeech = this.example.getParent().getParent().getParent().getPartOfSpeech() ?? '';
        if (this.example.getParent() instanceof PhraseBlock) {
            word = (this.example.getParent() as PhraseBlock).getPhraseTitle() ?? '';
            partOfSpeech = 'phrase';
            code = (this.example.getParent() as PhraseBlock).getPhraseInfo() ?? '';
        }
        return {
            word: word,
            partOfSpeech: partOfSpeech,
            guideWord: this.example.getParent().getParent().getGuideWord() ?? '',
            englishDefinition: this.example.getParent().getEnglishDefinition() ?? '',
            definitionTranslation: this.example.getParent().getZhTwDefinition() ?? '',
            cefrLevel: this.example.getParent() instanceof DefinitionBlock ? (this.example.getParent() as DefinitionBlock).getLevel() : null,
            code: code,
            englishExample: this.example.getEnglishExample(),
            exampleTranslation: this.example.getExampleTranslation(),
        };
    }
}