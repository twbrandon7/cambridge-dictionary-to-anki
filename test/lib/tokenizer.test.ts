import {test, expect} from 'vitest';
import Tokenizer from '@/lib/tokenizer';

test('test tokenizer with punctuation', () => {
    const input = "This, is! an*example sentence. with punctuation.";
    const expected = ["This", ",", " ", "is", "!", " ", "an", "*", "example", " ", "sentence", ".", " ", "with", " ", "punctuation", "."];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test tokenizer with no punctuation', () => {
    const input = "This is an example sentence with no punctuation.";
    const expected = ["This", " ", "is", " ", "an", " ", "example", " ", "sentence", " ", "with", " ", "no", " ", "punctuation", "."];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test tokenizer with sentence in the dictionary', () => {
    const input = "What time do you start/finish work?";
    const expected = ["What", " ", "time", " ",  "do", " ", "you", " ", "start", "/", "finish", " ", "work", "?"];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test not ending by punctuation', () => {
    const input = "the economic/political situation";
    const expected = ["the", " ", "economic", "/", "political", " ", "situation"];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test empty string', () => {
    const input = "";
    const expected: string[] = [];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test tokenizer with html tags', () => {
    const input = "She works <b>in</b> construction/in <b>the</b> construction <b>industry</b>.";
    const expected = ["She", " ", "works", " ", "<b>", "in", "</b>", " ", "construction", "/", "in", " ", "<b>", "the", "</b>", " ", "construction", " ", "<b>", "industry", "</b>", "."];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test tokenizer end with html tag', () => {
    const input = "She works <b>in</b> construction/in <b>the</b> construction <b>industry</b>";
    const expected = ["She", " ", "works", " ", "<b>", "in", "</b>", " ", "construction", "/", "in", " ", "<b>", "the", "</b>", " ", "construction", " ", "<b>", "industry", "</b>"];
    const result = Tokenizer.tokenize(input).map(token => token.getValue());
    expect(result).toEqual(expected);
});

test('test tokenizer toggle', () => {
    const input = "She works in construction.";
    const result = Tokenizer.tokenize(input);
    const firstToken = result[0];
    expect(firstToken.isSelected()).toBe(false);
    firstToken.toggleSelect();
    expect(firstToken.isSelected()).toBe(true);
});

test('test token isWord', () => {
    const input = "First <b>Fourth</b>.";
    const tokens = Tokenizer.tokenize(input);
    expect(tokens[0].isWord()).toBe(true);
    expect(tokens[1].isWord()).toBe(false);
    expect(tokens[2].isWord()).toBe(false);
    expect(tokens[3].isWord()).toBe(true);
    expect(tokens[4].isWord()).toBe(false);
    expect(tokens[5].isWord()).toBe(false);
});

test('test token isHtml', () => {
    const input = "First <b>Fourth</b>.";
    const tokens = Tokenizer.tokenize(input);
    expect(tokens[0].isHtmlTag()).toBe(false);
    expect(tokens[1].isHtmlTag()).toBe(false);
    expect(tokens[2].isHtmlTag()).toBe(true);
    expect(tokens[3].isHtmlTag()).toBe(false);
    expect(tokens[4].isHtmlTag()).toBe(true);
    expect(tokens[5].isHtmlTag()).toBe(false);
});
