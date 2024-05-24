import { CefrLevel } from './cefr-level';

interface Example {
    englishExample: string;
    zhTwExample: string;
}


interface DefinitionBlock {
    word: string;
    partOfSpeech: string;
    synonym: string;
    cefrLevel?: CefrLevel;
    /**
     * @see https://dictionary.cambridge.org/help/codes.html
     */
    label: string;
    englishDefinition: string;
    zhTwDefinition: string;
    examples: Example[];
}
