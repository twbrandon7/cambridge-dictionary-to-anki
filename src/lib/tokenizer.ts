export default class Tokenizer {
  static tokenize(text: string): string[] {
    const regex = /(\w+)([^\w]+)?/gm;
    const tokens = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      tokens.push(match[1]);
      if (match[2]) {
        tokens.push(match[2]);
      }
    }
    return tokens;
  }
}
