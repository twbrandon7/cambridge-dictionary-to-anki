export interface Example {
    englishExample: string;
    zhTwExample: string;
}

export interface Examplable {
    getExamples(): Example[];
}
