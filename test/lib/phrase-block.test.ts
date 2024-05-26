import { expect, test } from 'vitest';
import PhraseBlock from '@/lib/phrase-block';
import { createMockElement } from '../test-utils';
import DsenseBlock from '@/lib/dsense-block';
import Example from '@/lib/example';

const element = createMockElement(`<div class="pr phrase-block dphrase-block "><div class="cid" id="caldcnt-1-5-1"></div><div class="phrase-head dphrase_h"><i class="i i-caret-right dtrans fs18 lpb-4" aria-hidden="true">&nbsp;</i><span class="phrase-title dphrase-title"><b>the works</b></span> <span class="phrase-info dphrase-info"><span class="lab dlab"><span class="usage dusage lpl-10">informal</span></span></span></div><div class="phrase-body dphrase_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_05">
<div class="dwl hax">
    

<a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_05', wotd: 'work' } }), sidebarWordList.open">
<i class="i i-plus" aria-hidden="true"></i>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
<a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
<i class="i i-plus" aria-hidden="true"></i>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
</div>
<div class="ddef_h"><span class="def-info ddef-info">  </span><div class="def ddef_d db">everything that you might <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/want" title="want" rel="">want</a> or <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/expect" title="expect" rel="">expect</a> to <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/find" title="find" rel="">find</a> in a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/particular" title="particular" rel="">particular</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/situation" title="situation" rel="">situation</a></div> </div><div class="def-body ddef_b">  
         
<span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant"><a class="Ref" href="/zht/%E8%A9%9E%E5%85%B8/%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94-%E8%8B%B1%E8%AA%9E/%E5%85%A8%E5%A5%97"><span class="dtrans">全套物品</span></a></span>
<div class="examp dexamp"> <span class="eg deg">The <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/bridegroom" title="bridegroom" rel="">bridegroom</a> was <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/wearing" title="wearing" rel="">wearing</a> a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/morning" title="morning" rel="">morning</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/suit" title="suit" rel="">suit</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/glove" title="gloves" rel="">gloves</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/top" title="top" rel="">top</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/hat" title="hat" rel="">hat</a> - the works.</span>  
         
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">新郎穿著晨禮服，戴著手套和高頂禮帽——全套的行頭。</span>
</div><div class="examp dexamp"><span class="lab dlab">mainly <span class="region dregion">US</span></span> <span class="eg deg">And can I have two <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/large" title="large" rel="">large</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/pizza" title="pizzas" rel="">pizzas</a> <span class="b db">with</span> the works <span class="gloss dgloss">(= with all <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/available" title="available" rel="">available</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/type" title="types" rel="">types</a> of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/food" title="food" rel="">food</a> on <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/top" title="top" rel="">top</a>)</span>.</span>  
         
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">給我來兩份全套的批薩餅吧。</span>
</div> </div></div>     
</div></div>`);

test('test getting English definition', () => {
    const parser = new PhraseBlock(element, {} as DsenseBlock);
    expect(parser.getEnglishDefinition()).toBe("everything that you might want or expect to find in a particular situation");
});

test('test getting empty English definition', () => {
    const elementWithoutDef = element.cloneNode(true) as HTMLElement;
    elementWithoutDef.querySelector('.def')?.remove();
    const parser = new PhraseBlock(elementWithoutDef, {} as DsenseBlock);
    expect(parser.getEnglishDefinition()).toBeNull();
});

test('test getting zh-TW definition', () => {
    const parser = new PhraseBlock(element, {} as DsenseBlock);
    expect(parser.getZhTwDefinition()).toBe("全套物品");
});

test('test getting empty zh-TW definition', () => {
    const elementWithoutDef = element.cloneNode(true) as HTMLElement;
    elementWithoutDef.querySelector('.def-body .trans')?.remove();
    const parser = new PhraseBlock(elementWithoutDef, {} as DsenseBlock);
    expect(parser.getZhTwDefinition()).toBeNull();
});

test('test get examples', () => {
    const parser = new PhraseBlock(element, {} as DsenseBlock);
    const examples = parser.getExamples().map((example: Example) => example.toJson());
    expect(examples).toEqual([
        {
            englishExample: "The bridegroom was wearing a morning suit, gloves, top hat - the works.",
            translation: "新郎穿著晨禮服，戴著手套和高頂禮帽——全套的行頭。",
        },
        {
            englishExample: "And can I have two large pizzas <b>with</b> the works (= with all available types of food on top).",
            translation: "給我來兩份全套的批薩餅吧。",
        }
    ]);
});

test('test get empty examples', () => {
    const elementWithoutExamples = element.cloneNode(true) as HTMLElement;
    elementWithoutExamples.querySelectorAll('.examp').forEach((example) => example.remove());
    const parser = new PhraseBlock(elementWithoutExamples, {} as DsenseBlock);
    expect(parser.getExamples()).toEqual([]);
});

test('test get parent', () => {
    const parent = {} as DsenseBlock;
    const parser = new PhraseBlock(element, parent);
    expect(parser.getParent()).toBe(parent);
});
