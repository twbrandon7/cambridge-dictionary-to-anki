import BaseBlock from "../base-block";

export class Example {
    constructor(public readonly englishExample: string, public readonly zhTwExample: string, public readonly parent: BaseBlock) {}
}

export interface Examplable {
    getExamples(): Example[];
}
