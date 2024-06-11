import { expect, test } from 'vitest';
import PvBlock from '@/lib/pv-block';
import { createMockElement } from '../test-utils';

const element = createMockElement(`<div class="pv-block"><div class="di-title"><h2 class="headword tw-bw dhw dpos-h_hw dhw-m"><b>leave <span class="obj dobj">someone/something</span> out</b></h2></div> <span class="di-info"><div class="pos-header dpos-h"><span class="anc-info-head danc-info-head"><span class="pos dpos" title="Verb with an adverb or preposition, with meaning different from meaning of its parts.">phrasal verb</span> with <span class="hw dhw">leave</span> </span><span class="pos dpos" title="A word that describes an action, condition or experience.">verb</span> <div></div><span class="uk dpron-i "><span class="region dreg">uk</span><span class="daud">                    
    <audio class="hdn" preload="none" id="audio1" controlslist="nodownload">
        <div class="hdib" fallback="">
            <p>Your browser doesn't support HTML5 audio</p>
        </div>
        <source type="audio/mpeg" src="/media/english-chinese-traditional/uk_pron/u/ukl/uklea/uklearn013.mp3">
        <source type="audio/ogg" src="/media/english-chinese-traditional/uk_pron_ogg/u/ukl/uklea/uklearn013.ogg">
    </audio>
    <div title="Listen to the British English pronunciation" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio1.load(); audio1.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">liːv</span>/</span></span> <span class="us dpron-i "><span class="region dreg">us</span><span class="daud">                    
    <audio class="hdn" preload="none" id="audio2" controlslist="nodownload">
        <div class="hdib" fallback="">
            <p>Your browser doesn't support HTML5 audio</p>
        </div>
        <source type="audio/mpeg" src="/media/english-chinese-traditional/us_pron/l/lea/leave/leave.mp3">
        <source type="audio/ogg" src="/media/english-chinese-traditional/us_pron_ogg/l/lea/leave/leave.ogg">
    </audio>
    <div title="Listen to the American English pronunciation" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio2.load(); audio2.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">liːv</span>/</span></span><div class="lmt--5"></div> <span class="irreg-infls dinfls "><span class="inf-group dinfg "><b class="inf dinf">left</b></span> | <span class="inf-group dinfg "><b class="inf dinf">left</b></span></span></div></span><span class="pv-body dpv-body">

                        <div class="pr dsense dsense-noh"><div class="cid" id="caldcnt-1-1"></div> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00018373_33">
                        <div class="dwl hax">
                            
         
        <a amp-access="loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00018373_33', wotd: 'leave someone/something out' } }), sidebarWordList.open">
            <span class="tb fs10 hvm">Add to word list</span>
            <i class="i i-list-ul" aria-hidden="true"></i>
        </a>
        <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:amp-access.login-sign-in" amp-access-hide="">
            <span class="tb fs10 hvm">Add to word list</span>
            <i class="i i-list-ul" aria-hidden="true"></i>
        </a>
        </div>
                <div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref B2">B2</span> </span><div class="def ddef_d db">to not <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/include" title="include" rel="">include</a> someone or something</div> </div><div class="def-body ddef_b">  
                                 
        <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant"><a class="Ref" href="/dictionary/chinese-traditional-english/%E9%99%A4%E5%8E%BB"><span class="dtrans">除去</span></a>；<a class="Ref" href="/dictionary/chinese-traditional-english/%E6%92%87%E9%96%8B"><span class="dtrans">撇開</span></a>；<a class="Ref" href="/dictionary/chinese-traditional-english/%E5%BF%BD%E7%95%A5"><span class="dtrans">忽略</span></a></span>
            <div class="examp dexamp"> <span class="eg deg">You can <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/leave" title="leave" rel="">leave</a> the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/butter" title="butter" rel="">butter</a> out of this <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/recipe" title="recipe" rel="">recipe</a> if you're on a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/low-fat" title="low-fat" rel="">low-fat</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/diet" title="diet" rel="">diet</a>.</span>  
                                 
        <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">如果你正在節食可以把奶油從食譜中去掉。</span>
            </div><div class="examp dexamp"> <span class="eg deg">I've made a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/list" title="list" rel="">list</a> of <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/name" title="names" rel="">names</a> - I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/hope" title="hope" rel="">hope</a> I haven't <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> anyone out.</span>  
                                 
        <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">我列了一個名單——希望沒有漏掉甚麽人。</span>
            </div><div class="examp dexamp"> <span class="eg deg">None of the other <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/children" title="children" rel="">children</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/play" title="play" rel="">play</a> with her, and I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/think" title="think" rel="">think</a> she <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/feel" title="feels" rel="">feels</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> out <span class="gloss dgloss">(= <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/feel" title="feels" rel="">feels</a> that no one <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/want" title="wants" rel="">wants</a> to be her <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/friend" title="friend" rel="">friend</a>)</span>.</span>  
                                 
        <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">別的孩子沒有一個和她玩，我覺得她很孤單。</span>
            </div> </div></div>                                 
                            <div class="daccord"><amp-accordion class="i-amphtml-element i-amphtml-layout-container i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">
                            <section expanded="">
                        <header class="ca_h daccord_h i-amphtml-accordion-header" id="75_AMP_header_0" role="button" aria-controls="75_AMP_content_0" aria-expanded="true" tabindex="0">
                                <i class="i i-plus ca_hi" aria-hidden="true"></i>
                                <span class="showmore">More examples</span><span class="showless">Fewer examples</span></header><div class="i-amphtml-accordion-content" id="75_AMP_content_0" aria-labelledby="75_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/read" title="read" rel="">read</a> the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/book" title="book" rel="">book</a> to my <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/children" title="children" rel="">children</a>, but I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> out the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/rude" title="rude" rel="">rude</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/bit" title="bits" rel="">bits</a>.</li><li class="eg dexamp hax">The <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/report" title="report" rel="">report</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> out all <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/reference" title="reference" rel="">reference</a> to the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/argument" title="argument" rel="">argument</a>.</li><li class="eg dexamp hax">We must set the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/price" title="price" rel="">price</a> so that <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/poor" title="poorer" rel="">poorer</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/family" title="families" rel="">families</a> are not <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> out.</li><li class="eg dexamp hax">She always gets <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/left" title="left" rel="">left</a> out when the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/sports" title="sports" rel="">sports</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/team" title="teams" rel="">teams</a> are <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/chosen" title="chosen" rel="">chosen</a>.</li><li class="eg dexamp hax">I made the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/sauce" title="sauce" rel="">sauce</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/leave" title="leaving" rel="">leaving</a> out the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/brandy" title="brandy" rel="">brandy</a>.</li></ul></div>
                            </section>
                    </amp-accordion></div></div>           
                                        <script type="text/javascript">
    if(typeof iaw !== 'undefined') {
        iaw.que.push(function() {
            iaw.setExtraAdSlots(["ad_ringlinkslot"]);
            iaw.addPageCriteria("cdo_elvl", "B2");
            iaw.addPageCriteria("cdo_abt", "1");
        });
    }
</script>
<div id="ad_ringlinkslot" data-google-query-id="CMH1hvPG04YDFS5LwgUdHTEFPA" style="display: none;">
    <script type="text/javascript">
        if(typeof iaw !== 'undefined') {
            iaw.cmd.push(function () { iaw.display("ad_ringlinkslot"); });
        }
    </script>
<div id="google_ads_iframe_/2863368/ringlinkslot_0__container__" style="border: 0pt none; width: 300px; height: 0px;"></div></div>
                   </div></span></div>`);

test('test getting word', () => {
    const parser = new PvBlock(element);
    expect(parser.getWord()).toBe("leave someone/something out");
});

test('test getting part of speech', () => {
    const parser = new PvBlock(element);
    expect(parser.getPartOfSpeech()).toBe("phrasal verb with leave verb");
});

test('test getting code', () => {
    const parser = new PvBlock(element);
    expect(parser.getCode()).toBeNull();
});

test('test getting dsense blocks', () => {
    const parser = new PvBlock(element);
    expect(parser.getDsenseBlocks().length).toBe(1);
});
