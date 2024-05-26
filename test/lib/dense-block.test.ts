import { expect, test } from 'vitest';
import DsenseBlock from '@/lib/dsense-block';
import { createMockElement } from '../test-utils';
import EntryBody from '@/lib/entry-body';

const elementDefBlock = createMockElement(`<div class="pr dsense "><div class="cid" id="caldcnt-1-1"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
(<span>ACTIVITY</span>)
</span></h3> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_01">
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
</div> </div></div>                                 
<div class="def-block ddef_block " data-wl-senseid="ID_00036481_02">
            <div class="dwl hax">
                

<a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_02', wotd: 'work' } }), sidebarWordList.open">
<i class="i i-plus" aria-hidden="true"></i>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
<a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
<i class="i i-plus" aria-hidden="true"></i>
<i class="i i-list-ul" aria-hidden="true"></i>
</a>
</div>
    <div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref A2">A2</span> <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">U</span> ]</a></span></span> <div class="def ddef_d db">the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/material" title="material" rel="">material</a> used by someone at work, or what they <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/produce" title="produce" rel="">produce</a></div> </div><div class="def-body ddef_b">  
                     
<span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">工作材料;工作成果</span>
<div class="examp dexamp"> <span class="eg deg">I'll have to take this work <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/home" title="home" rel="">home</a> with me and <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finish" title="finish" rel="">finish</a> it there.</span>  
                     
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">我只好把這項工作帶回家完成。</span>
</div><div class="examp dexamp"> <span class="eg deg">All the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/furniture" title="furniture" rel="">furniture</a> is the work of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/resident" title="residents" rel="">residents</a> here.</span>  
                     
<span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">所有傢俱都是這裡居民的勞動成果。</span>
</div> </div></div>     
                <div class="daccord"><amp-accordion class="i-amphtml-element i-amphtml-layout-container i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">
                <section expanded="">
            <header class="ca_h daccord_h i-amphtml-accordion-header" id="22_AMP_header_0" role="button" aria-controls="22_AMP_content_0" aria-expanded="true" tabindex="0">
                    <i class="i i-plus ca_hi" aria-hidden="true"></i>
                    <span class="showmore">更多範例</span><span class="showless">减少例句</span></header><div class="i-amphtml-accordion-content" id="22_AMP_content_0" aria-labelledby="22_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">In <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/common" title="common" rel="">common</a> with many <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/mother" title="mothers" rel="">mothers</a>, she <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/feel" title="feels" rel="">feels</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/torn" title="torn" rel="">torn</a> between her <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/family" title="family" rel="">family</a> and her work.</li><li class="eg dexamp hax">You need to have <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/agile" title="agile" rel="">agile</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finger" title="fingers" rel="">fingers</a> to do this <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/kind" title="kind" rel="">kind</a> of work.</li><li class="eg dexamp hax">We had a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/disagreement" title="disagreement" rel="">disagreement</a> over the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/fee" title="fee" rel="">fee</a> for the work.</li><li class="eg dexamp hax">We've <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finished" title="finished" rel="">finished</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/decorate" title="decorating" rel="">decorating</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/upstairs" title="upstairs" rel="">upstairs</a> but the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/downstairs" title="downstairs" rel="">downstairs</a> still <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/need" title="needs" rel="">needs</a> some work.</li><li class="eg dexamp hax">They <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/pay" title="pay" rel="">pay</a> me next to nothing but I really <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/enjoy" title="enjoy" rel="">enjoy</a> the work.</li></ul></div>
                </section>
        </amp-accordion></div></div>           
                            <script type="text/javascript">
if(typeof iaw !== 'undefined') {
iaw.que.push(function() {
iaw.setExtraAdSlots(["ad_ringlinkslot"]);
iaw.addPageCriteria("cdo_elvl", "A1");
iaw.addPageCriteria("cdo_abt", "1");
});
}
</script>
<div id="ad_ringlinkslot" data-google-query-id="" style="display: none;">
<script type="text/javascript">iaw.cmd.push(function () { iaw.display("ad_ringlinkslot"); });</script>
<div id="google_ads_iframe_/2863368/ringlinkslot_0__container__" style="border: 0pt none; width: 300px; height: 0px;"></div></div>
       </div>`);

test('test get guide word from dsense block containing only definition blocks', () => {
    const denseBlock = new DsenseBlock(elementDefBlock, {} as EntryBody);
    expect(denseBlock.getGuideWord()).toBe('ACTIVITY');
});

test('test get definition blocks from dsense block containing only definition blocks', () => {
    const denseBlock = new DsenseBlock(elementDefBlock, {} as EntryBody);
    const definitionBlocks = denseBlock.getDefinitionBlocks();
    expect(definitionBlocks.length).toBe(2);
    expect(definitionBlocks[0].getEnglishDefinition()).toBe('an activity, such as a job, that a person uses physical or mental effort to do, usually for money');
    expect(definitionBlocks[1].getEnglishDefinition()).toBe('the material used by someone at work, or what they produce');
});

test('test get phrase blocks from dsense block containing only definition blocks', () => {
    const denseBlock = new DsenseBlock(elementDefBlock, {} as EntryBody);
    const phraseBlocks = denseBlock.getPhraseBlocks();
    expect(phraseBlocks.length).toBe(0);
});

const elementPhraseBlock = createMockElement(`<div class="pr dsense "><div class="cid" id="caldcnt-1-5"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
(<span>EVERYTHING</span>)
</span></h3> <div class="sense-body dsense_b"><div class="pr phrase-block dphrase-block "><div class="cid" id="caldcnt-1-5-1"></div><div class="phrase-head dphrase_h"><i class="i i-caret-right dtrans fs18 lpb-4" aria-hidden="true">&nbsp;</i><span class="phrase-title dphrase-title"><b>the works</b></span> <span class="phrase-info dphrase-info"><span class="lab dlab"><span class="usage dusage lpl-10">informal</span></span></span></div><div class="phrase-body dphrase_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_05">
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
</div></div></div>           
   </div>`);

test('test get guide word from dsense block containing only phrase blocks', () => {
    const denseBlock = new DsenseBlock(elementPhraseBlock, {} as EntryBody);
    expect(denseBlock.getGuideWord()).toBe('EVERYTHING');
});

test('test get definition blocks from dsense block containing only phrase blocks', () => {
    const denseBlock = new DsenseBlock(elementPhraseBlock, {} as EntryBody);
    const definitionBlocks = denseBlock.getDefinitionBlocks();
    expect(definitionBlocks.length).toBe(0);
});

test('test get phrase blocks from dsense block containing only phrase blocks', () => {
    const denseBlock = new DsenseBlock(elementPhraseBlock, {} as EntryBody);
    const phraseBlocks = denseBlock.getPhraseBlocks();
    expect(phraseBlocks.length).toBe(1);
    expect(phraseBlocks[0].getEnglishDefinition()).toBe('everything that you might want or expect to find in a particular situation');
});

test('test getting parent', () => {
    const entryBody = {} as EntryBody;
    const denseBlock = new DsenseBlock(createMockElement(''), entryBody);
    expect(denseBlock.getParent()).toBe(entryBody);
});
