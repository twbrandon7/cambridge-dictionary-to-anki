import {test, expect} from 'vitest';
import Tokenizer from '@/lib/tokenizer';

test('test tokenizer with punctuation', () => {
    const input = "This, is! an*example sentence. with punctuation.";
    const expected = ["This", ", ", "is", "! ", "an", "*", "example", " ", "sentence", ". ", "with", " ", "punctuation", "."];
    const result = Tokenizer.tokenize(input);
    expect(result).toEqual(expected);
});

test('test tokenizer with no punctuation', () => {
    const input = "This is an example sentence with no punctuation.";
    const expected = ["This", " ", "is", " ", "an", " ", "example", " ", "sentence", " ", "with", " ", "no", " ", "punctuation", "."];
    const result = Tokenizer.tokenize(input);
    expect(result).toEqual(expected);
});

test('test tokenizer with sentence in the dictionary', () => {
    const input = "What time do you start/finish work?";
    const expected = ["What", " ", "time", " ",  "do", " ", "you", " ", "start", "/", "finish", " ", "work", "?"];
    const result = Tokenizer.tokenize(input);
    expect(result).toEqual(expected);
});
