enum CefrLevel {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2",
}


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
