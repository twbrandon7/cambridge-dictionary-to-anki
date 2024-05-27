export class Token {
  protected selected: boolean = false;

  constructor(
    protected readonly htmlStart: string | undefined,
    protected readonly htmlEnd: string | undefined,
    protected readonly word: string | undefined,
    protected readonly notWord: string | undefined,
  ) {}

  public isWord(): boolean {
      return this.word !== undefined && this.notWord === undefined;
  }

  public isHtmlTag(): boolean {
      return this.htmlStart !== undefined || this.htmlEnd !== undefined;
  }

  public isSelected(): boolean {
      return this.selected;
  }

  public toggleSelect(): void {
      this.selected = !this.selected;
  }

  public getValue(): string {
      return this.htmlStart ?? this.htmlEnd ?? this.word ?? this.notWord ?? '';
  }
}

export default class Tokenizer {
  static tokenize(text: string): Token[] {
    const regex = /(?<html_start><\w+>)|(?<html_end><\/\w+>)|(?<word>\w+)|(?<not_word>[^\w])/gm;
    const tokens = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      const groups = match.groups;
      if (groups === undefined) {
        continue;
      }
      const token = new Token(groups.html_start, groups.html_end, groups.word, groups.not_word);
      tokens.push(token);
    }
    return tokens;
  }
}
