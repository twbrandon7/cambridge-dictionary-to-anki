import BaseBlock from "../base-block";

export interface Example {
    englishExample: string;
    zhTwExample: string;
    parent: BaseBlock;
}

export interface Examplable {
    getExamples(): Example[];
}
