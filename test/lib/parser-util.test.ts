import { expect, test } from 'vitest';
import { createMockElement } from '../test-utils';
import { filterBoldTextFromElement } from '@/lib/parser-util';

test('test bold in links', () => {
    const element = createMockElement(`<span class="eg deg">"Would you get <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/involved" title="involved" rel="">involved</a> in a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/fight" title="fight" rel="">fight</a>?" "It would <span class="b db"><a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/depend" title="depend" rel="">depend</a> on the</span> situation."</span>`);
    const expected = `"Would you get involved in a fight?" "It would <b>depend on the</b> situation."`;
    const result = filterBoldTextFromElement(element);
    expect(result).toBe(expected);
});

test('test bold without links', () => {
    const element = createMockElement(`<span class="eg deg">Her <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/news" title="news" rel="">news</a> put me <span class="b db">in</span> a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/difficult" title="difficult" rel="">difficult</a> situation.</span>`);
    const expected = `Her news put me <b>in</b> a difficult situation.`;
    const result = filterBoldTextFromElement(element);
    expect(result).toBe(expected);
});

test('test no bold', () => {
    const element = createMockElement(`<span class="eg deg">the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/economic" title="economic" rel="">economic</a>/<a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/political" title="political" rel="">political</a> situation</span>`);
    const expected = `the economic/political situation`;
    const result = filterBoldTextFromElement(element);
    expect(result).toBe(expected);
});
