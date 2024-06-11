import { expect, test } from 'vitest';
import { createMockElement } from '../test-utils';
import IdiomBlock from '@/lib/idiom-block';

const element = createMockElement(`<div class="idiom-block"><div class="di-title"><h2 class="headword tw-bw dhw dpos-h_hw dhw-m"><b>at the drop of a hat</b></h2></div> <span class="di-info"><span class="pos dpos" title="">idiom</span> </span><span class="idiom-body didiom-body">

                        <div class="pr dsense dsense-noh"><div class="cid" id="caldcnt-1-1"></div> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00009768_35">
                        <div class="dwl hax">
                            
         
        <a amp-access="loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00009768_35', wotd: 'at the drop of a hat' } }), sidebarWordList.open">
            <span class="tb fs10 hvm">Add to word list</span>
            <i class="i i-list-ul" aria-hidden="true"></i>
        </a>
        <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:amp-access.login-sign-in" amp-access-hide="">
            <span class="tb fs10 hvm">Add to word list</span>
            <i class="i i-list-ul" aria-hidden="true"></i>
        </a>
        </div>
                <div class="ddef_h"><span class="def-info ddef-info">  </span><div class="def ddef_d db">If you do something at the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/drop" title="drop" rel="">drop</a> of a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/hat" title="hat" rel="">hat</a>, you do it <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/immediately" title="immediately" rel="">immediately</a> without <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/stop" title="stopping" rel="">stopping</a> to <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/think" title="think" rel="">think</a> about it.</div> </div><div class="def-body ddef_b">  
                                 
        <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">不加思索地，毫不猶豫地</span>
            <div class="examp dexamp"> <span class="eg deg">People will <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/file" title="file" rel="">file</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/lawsuit" title="lawsuits" rel="">lawsuits</a> at the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/drop" title="drop" rel="">drop</a> of a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/hat" title="hat" rel="">hat</a> these <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/day" title="days" rel="">days</a>.</span>  
                                 
        <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">現在人們動不動就打官司。</span>
            </div> </div></div>                                 
         </div>           
                                                    <script type="text/javascript">
    if(typeof iaw !== 'undefined') {
        iaw.que.push(function() {
            iaw.setExtraAdSlots(["ad_ringlinkslot"]);
            iaw.addPageCriteria("cdo_elvl", "A1");
            iaw.addPageCriteria("cdo_abt", "1");
        });
    }
</script>
<div id="ad_ringlinkslot" data-google-query-id="CM_30dbM04YDFWpDwgUdbTUBTg" style="display: none;">
    <script type="text/javascript">
        if(typeof iaw !== 'undefined') {
            iaw.cmd.push(function () { iaw.display("ad_ringlinkslot"); });
        }
    </script>
<div id="google_ads_iframe_/2863368/ringlinkslot_0__container__" style="border: 0pt none; width: 300px; height: 0px;"></div></div>
                   </div></span></div>`);

test('test getting word', () => {
    const idiomBlock = new IdiomBlock(element);
    expect(idiomBlock.getWord()).toBe('at the drop of a hat');
});

test('test getting part of speech', () => {
    const idiomBlock = new IdiomBlock(element);
    expect(idiomBlock.getPartOfSpeech()).toBe('idiom');
});

test('test getting code', () => {
    const idiomBlock = new IdiomBlock(element);
    expect(idiomBlock.getCode()).toBe(null);
});

test('test getting dsense blocks', () => {
    const idiomBlock = new IdiomBlock(element);
    expect(idiomBlock.getDsenseBlocks().length).toBe(1);
});
