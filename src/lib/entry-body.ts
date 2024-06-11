import DsenseBlock from "./dsense-block";

export default abstract class EntryBody {
    constructor(protected readonly element: HTMLElement) {

    }

    public abstract getWord(): string | null;

    public abstract getPartOfSpeech(): string | null;

    public abstract getCode(): string | null;

    public abstract getDsenseBlocks(): DsenseBlock[];
}
