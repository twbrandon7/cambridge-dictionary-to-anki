import { expect, test } from 'vitest';
import { CefrLevel } from '@/lib/cefr-level';
import DefinitionBlockParser from '@/lib/definition-block-parser';


function createMockElement(html: string): HTMLElement {
    const div = document.createElement('div');
    div.innerHTML = html;
    const child = div.firstElementChild;
    return child as HTMLElement;
}

const element = createMockElement(`<div class="def-block ddef_block " data-wl-senseid="ID_00036481_01">
    <div class="dwl hax">
        

<a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_01', wotd: 'work' } }), sidebarWordList.open">
<span class="tb fs10 hvm">Add to word list</span>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
<a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
<span class="tb fs10 hvm">Add to word list</span>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
</div>
<div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref A1">A1</span> <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">U</span> ]</a></span></span> <div class="def ddef_d db">an <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/activity" title="activity" rel="">activity</a>, such as a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/job" title="job" rel="">job</a>, that a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/person" title="person" rel="">person</a> uses <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/physical" title="physical" rel="">physical</a> or <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/mental" title="mental" rel="">mental</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/effort" title="effort" rel="">effort</a> to do, usually for <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/money" title="money" rel="">money</a></div> </div><div class="def-body ddef_b">  
             
<span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">工作;勞動</span>
<div class="examp dexamp"> <span class="eg deg">I've got so much work to <span class="b db">do</span>.</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">我有一大堆工作要做。</span>
</div><div class="examp dexamp"> <span class="eg deg">Carrying <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/heavy" title="heavy" rel="">heavy</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/load" title="loads" rel="">loads</a> around all <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/day" title="day" rel="">day</a> is <span class="b db">hard</span> work.</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">整天來回運送重物是件苦事。</span>
</div><div class="examp dexamp"> <span class="eg deg">What <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/time" title="time" rel="">time</a> do you <span class="b db"><a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/start" title="start" rel="">start</a>/<a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finish" title="finish" rel="">finish</a></span> work?</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">你甚麼時間開始／完成工作?</span>
</div><div class="examp dexamp"> <span class="eg deg">Aileen <span class="b db">does</span> most of the work around the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/house" title="house" rel="">house</a>.</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">愛琳做大部分的家務。</span>
</div><div class="examp dexamp"> <span class="eg deg">What <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/sort" title="sort" rel="">sort</a> of work are you <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/experienced" title="experienced" rel="">experienced</a> in?</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">你對哪一種工作有經驗？</span>
</div><div class="examp dexamp"> <span class="eg deg">She <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/tend" title="tends" rel="">tends</a> to <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/wear" title="wear" rel="">wear</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/quite" title="quite" rel="">quite</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/dressy" title="dressy" rel="">dressy</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/clothes" title="clothes" rel="">clothes</a> for work.</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">她總是穿得漂漂亮亮的去上班。</span>
</div><div class="examp dexamp"> <span class="eg deg">Roger's work <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/involve" title="involves" rel="">involves</a> a lot of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/travelling" title="travelling" rel="">travelling</a>.</span>  
             
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">羅傑的工作需要經常出差。</span>
</div> </div></div>`);

test('test getting CEFR level', () => {
    const parser = new DefinitionBlockParser(element);
    expect(parser.getLevel()).toBe(CefrLevel.A1);
});

test('test getting code', () => {
    const parser = new DefinitionBlockParser(element);
    expect(parser.getCode()).toBe('[ U ]');
});

test('test getting English definition', () => {
    const parser = new DefinitionBlockParser(element);
    expect(parser.getEnglishDefinition()).toBe("an activity, such as a job, that a person uses physical or mental effort to do, usually for money");
});

test('test getting zh-TW definition', () => {
    const parser = new DefinitionBlockParser(element);
    expect(parser.getZhTwDefinition()).toBe("工作;勞動");
});


test('test get examples', () => {
    const parser = new DefinitionBlockParser(element);
    expect(parser.getExamples().sort()).toEqual([
        {
            englishExample: "I've got so much work to <b>do</b>.",
            zhTwExample: "我有一大堆工作要做。"
        },
        {
            englishExample: "Carrying heavy loads around all day is <b>hard</b> work.",
            zhTwExample: "整天來回運送重物是件苦事。"
        },
        {
            englishExample: "What time do you <b>start/finish</b> work?",
            zhTwExample: "你甚麼時間開始／完成工作?"
        },
        {
            englishExample: "Aileen <b>does</b> most of the work around the house.",
            zhTwExample: "愛琳做大部分的家務。"
        },
        {
            englishExample: "What sort of work are you experienced in?",
            zhTwExample: "你對哪一種工作有經驗？"
        },
        {
            englishExample: "She tends to wear quite dressy clothes for work.",
            zhTwExample: "她總是穿得漂漂亮亮的去上班。"
        },
        {
            englishExample: "Roger's work involves a lot of travelling.",
            zhTwExample: "羅傑的工作需要經常出差。"
        }
    ].sort())
});
