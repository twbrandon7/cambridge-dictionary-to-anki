import { createMockElement } from "../test-utils";
import { expect, test } from "vitest";
import Example from "@/lib/example";
import BaseBlock from "@/lib/base-block";

const element = createMockElement(`<div class="examp dexamp"> <span class="eg deg">I've got so much work to <span class="b db">do</span>.</span>  
                                 
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">我有一大堆工作要做。</span></div>`);

test('test getting English example', () => {
    const parent = {} as BaseBlock;
    const example = new Example(element, parent);
    expect(example.getEnglishExample()).toBe("I've got so much work to <b>do</b>.");
});

test('test getting translation', () => {
    const parent = {} as BaseBlock;
    const example = new Example(element, parent);
    expect(example.getExampleTranslation()).toBe("我有一大堆工作要做。");
});

test('test getting parent', () => {
    const parent = {} as BaseBlock;
    const example = new Example(element, parent);
    expect(example.getParent()).toBe(parent);
});

test('test toJson', () => {
    const parent = {} as BaseBlock;
    const example = new Example(element, parent);
    expect(example.toJson()).toEqual({
        englishExample: "I've got so much work to <b>do</b>.",
        translation: "我有一大堆工作要做。",
    });
});