import { expect, test } from 'vitest';
import EntryBody from '@/lib/entry-body';
import { createMockElement } from '../test-utils';

const element = createMockElement(`<div class="pr entry-body__el"><div class="cid" id="caldcnt-1"></div><div class="pos-header dpos-h"><div class="di-title"><span class="headword hdb tw-bw dhw dpos-h_hw "><span class="hw dhw">work</span></span></div><div class="posgram dpos-g hdib lmr-5"><span class="pos dpos" title="A word that refers to a person, place, idea, event or thing.">noun</span></div> <div></div><span class="uk dpron-i "><span class="region dreg">uk</span><span class="daud">                    
<audio class="hdn" preload="none" id="audio1" controlslist="nodownload">
    <div class="hdib" fallback="">
        <p>Your browser doesn't support HTML5 audio</p>
    </div>
    <source type="audio/mpeg" src="/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/uk_pron/u/ukw/ukwor/ukwordp005.mp3">
    <source type="audio/ogg" src="/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/uk_pron_ogg/u/ukw/ukwor/ukwordp005.ogg">
</audio>
<div title="聽英式英語發音" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio1.load(); audio1.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">wɜːk</span>/</span></span> <span class="us dpron-i "><span class="region dreg">us</span><span class="daud">                    
<audio class="hdn" preload="none" id="audio2" controlslist="nodownload">
    <div class="hdib" fallback="">
        <p>Your browser doesn't support HTML5 audio</p>
    </div>
    <source type="audio/mpeg" src="/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/us_pron/w/wor/work_/work.mp3">
    <source type="audio/ogg" src="/zht/media/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/us_pron_ogg/w/wor/work_/work.ogg">
</audio>
<div title="聽美式英語發音" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio2.load(); audio2.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">wɝːk</span>/</span></span></div><div class="pos-body">

                            <div class="pr dsense "><div class="cid" id="caldcnt-1-1"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
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
                    <header class="ca_h daccord_h i-amphtml-accordion-header" id="76_AMP_header_0" role="button" aria-controls="76_AMP_content_0" aria-expanded="true" tabindex="0">
                            <i class="i i-plus ca_hi" aria-hidden="true"></i>
                            <span class="showmore">更多範例</span><span class="showless">减少例句</span></header><div class="i-amphtml-accordion-content" id="76_AMP_content_0" aria-labelledby="76_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">In <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/common" title="common" rel="">common</a> with many <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/mother" title="mothers" rel="">mothers</a>, she <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/feel" title="feels" rel="">feels</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/torn" title="torn" rel="">torn</a> between her <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/family" title="family" rel="">family</a> and her work.</li><li class="eg dexamp hax">You need to have <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/agile" title="agile" rel="">agile</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finger" title="fingers" rel="">fingers</a> to do this <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/kind" title="kind" rel="">kind</a> of work.</li><li class="eg dexamp hax">We had a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/disagreement" title="disagreement" rel="">disagreement</a> over the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/fee" title="fee" rel="">fee</a> for the work.</li><li class="eg dexamp hax">We've <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/finished" title="finished" rel="">finished</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/decorate" title="decorating" rel="">decorating</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/upstairs" title="upstairs" rel="">upstairs</a> but the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/downstairs" title="downstairs" rel="">downstairs</a> still <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/need" title="needs" rel="">needs</a> some work.</li><li class="eg dexamp hax">They <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/pay" title="pay" rel="">pay</a> me next to nothing but I really <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/enjoy" title="enjoy" rel="">enjoy</a> the work.</li></ul></div>
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
               </div>

                    <div class="pr dsense "><div class="cid" id="caldcnt-1-2"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>PLACE</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_03">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_03', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref A1">A1</span> <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">U</span> ]</a></span></span> <div class="def ddef_d db">a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/place" title="place" rel="">place</a> where a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/person" title="person" rel="">person</a> goes <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/specially" title="specially" rel="">specially</a> to do <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/their" title="their" rel="">their</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/job" title="job" rel="">job</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">工作場所，工作地點</span>
        <div class="examp dexamp"> <span class="eg deg">Do you have <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/far" title="far" rel="">far</a> to <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/travel" title="travel" rel="">travel</a> <span class="b db">to</span> work each <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/day" title="day" rel="">day</a>?</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">你每天上班路遠不遠？</span>
        </div><div class="examp dexamp"> <span class="eg deg">Thousands of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/people" title="people" rel="">people</a> are <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/seriously" title="seriously" rel="">seriously</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/injured" title="injured" rel="">injured</a> <span class="b db">at</span> work every <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/year" title="year" rel="">year</a>.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">每年都有數以千計的人在工作中受重傷。</span>
        </div><div class="examp dexamp"> <span class="eg deg">When does she <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/leave" title="leave" rel="">leave</a> <span class="b db">for</span> work?</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">她甚麼時候出門去上班？</span>
        </div> </div></div>     
                        <div class="daccord"><amp-accordion class="i-amphtml-element i-amphtml-layout-container i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">
                        <section>
                    <header class="ca_h daccord_h i-amphtml-accordion-header" id="67_AMP_header_0" role="button" aria-controls="67_AMP_content_0" aria-expanded="false" tabindex="0">
                            <i class="i i-plus ca_hi" aria-hidden="true"></i>
                            <span class="showmore">更多範例</span><span class="showless">减少例句</span></header><div class="i-amphtml-accordion-content" id="67_AMP_content_0" aria-labelledby="67_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">It's at least an hour's <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/commute" title="commute" rel="">commute</a> to work.</li><li class="eg dexamp hax">I like the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/convenience" title="convenience" rel="">convenience</a> of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/living" title="living" rel="">living</a> so near work.</li><li class="eg dexamp hax">She had a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/crash" title="crash" rel="">crash</a> on the way to work.</li><li class="eg dexamp hax">I've been getting a lot of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/aggravation" title="aggravation" rel="">aggravation</a> at work <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/recently" title="recently" rel="">recently</a>.</li><li class="eg dexamp hax">We back up <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/our" title="our" rel="">our</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/computer" title="computer" rel="">computer</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/file" title="files" rel="">files</a> at work on a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/daily" title="daily" rel="">daily</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/basis" title="basis" rel="">basis</a>.</li></ul></div>
                        </section>
                </amp-accordion></div></div>           
           </div>

                            <div class="pr dsense "><div class="cid" id="caldcnt-1-3"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>CREATION</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_04">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_04', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref B2">B2</span> <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">C</span> ]</a></span></span> <div class="def ddef_d db">something <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/create" title="created" rel="">created</a> as a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/result" title="result" rel="">result</a> of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/effort" title="effort" rel="">effort</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/especially" title="especially" rel="">especially</a> a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/painting" title="painting" rel="">painting</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/book" title="book" rel="">book</a>, or <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/piece" title="piece" rel="">piece</a> of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/music" title="music" rel="">music</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">（尤指繪畫、書籍或音樂）作品，著作</span>
        <div class="examp dexamp"> <span class="eg deg">The <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/museum" title="museum" rel="">museum</a> has many works <span class="b db">by</span> Picasso as well as other <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/modern" title="modern" rel="">modern</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/painter" title="painters" rel="">painters</a>.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">這家博物館有很多畢加索的作品，也有不少其他現代畫家的作品。</span>
        </div><div class="examp dexamp"> <span class="eg deg">the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/poetic" title="poetic" rel="">poetic</a> works of Tagore</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">泰戈爾的詩作</span>
        </div> </div></div>     
                        <div class="daccord"><amp-accordion class="i-amphtml-element i-amphtml-layout-container i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">
                        <section>
                    <header class="ca_h daccord_h i-amphtml-accordion-header" id="95_AMP_header_0" role="button" aria-controls="95_AMP_content_0" aria-expanded="false" tabindex="0">
                            <i class="i i-plus ca_hi" aria-hidden="true"></i>
                            <span class="showmore">更多範例</span><span class="showless">减少例句</span></header><div class="i-amphtml-accordion-content" id="95_AMP_content_0" aria-labelledby="95_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">This <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/novel" title="novel" rel="">novel</a> is his <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/best" title="best" rel="">best</a> work to <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/date" title="date" rel="">date</a>.</li><li class="eg dexamp hax">The <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/mature" title="mature" rel="">mature</a> works of Haydn, Mozart, Beethoven and Schubert <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/belong" title="belong" rel="">belong</a> to the Classical <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/period" title="period" rel="">period</a>.</li><li class="eg dexamp hax">The museum's <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/collection" title="collection" rel="">collection</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/include" title="includes" rel="">includes</a> works of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/art" title="art" rel="">art</a> from all around the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/world" title="world" rel="">world</a>.</li><li class="eg dexamp hax">The <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/exhibition" title="exhibition" rel="">exhibition</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/juxtapose" title="juxtaposes" rel="">juxtaposes</a> Picasso's early <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/drawing" title="drawings" rel="">drawings</a> with some of his <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/later" title="later" rel="">later</a> works.</li><li class="eg dexamp hax">In a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/coda" title="coda" rel="">coda</a> to the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/main" title="main" rel="">main</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/exhibition" title="exhibition" rel="">exhibition</a> are <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/various" title="various" rel="">various</a> works which were <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/once" title="once" rel="">once</a> attributed to Rembrandt.</li></ul></div>
                        </section>
                </amp-accordion></div></div>           
                                                                  <div id="ad_contentslot_1" class="am-default_moreslots contentslot up-show" data-google-query-id="CPDzzKj1qIYDFePGFgUdVnsDuQ" style="">
        
    <div id="google_ads_iframe_/23202586/cdo_mpuslot1_0__container__" style="border: 0pt none; display: block; width: max-content !important; height: 250px; position: relative; z-index: 0; margin: 0px auto;"><iframe frameborder="0" src="https://0fa1771bffb51cf4fb28f152336eea88.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?upapi=true" id="google_ads_iframe_/23202586/cdo_mpuslot1_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="attribution-reporting" aria-label="Advertisement" tabindex="0" data-google-container-id="5" style="border: 0px; vertical-align: bottom; width: 300px !important;" data-load-complete="true"></iframe><div class="upo-label" style="text-align: left; padding: 0px; margin: 0px; position: absolute; top: 0px; left: 0px; z-index: 9000; transition: opacity 1s ease-out 0s; opacity: 1; cursor: pointer; transform: none;"><span style="display:block;background:rgba(255, 255, 255, 0.7);height:fit-content;width:fit-content;top:0;left:0;color:#444;font-size:10px;font-weight:bold;font-family:sans-serif;line-height:normal;text-decoration:none;margin:0px;padding:6px;border-radius:0 0 5px 0;">AD</span></div></div></div>
                                       </div>

            <div class="pr dsense "><div class="cid" id="caldcnt-1-4"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>SURGERY</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_50">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_50', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">U</span> ]</a></span> <span class="lab dlab"><span class="usage dusage lpl-10">informal</span></span></span> <div class="def ddef_d db"><span class="nondv-xref dnondv-xref"><a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/surgery" title="surgery" rel="">surgery</a></span> <span class="gloss dgloss">(= a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/medical" title="medical" rel="">medical</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/operation" title="operation" rel="">operation</a>)</span> that is done to <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/improve" title="improve" rel="">improve</a> someone's <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/appearance" title="appearance" rel="">appearance</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant"><a class="Ref" href="/zht/%E8%A9%9E%E5%85%B8/%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94-%E8%8B%B1%E8%AA%9E/%E5%A4%96%E7%A7%91%E6%89%8B%E8%A1%93"><span class="dtrans">整容外科手術</span></a></span>
        <div class="examp dexamp"> <span class="eg deg">She <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/deny" title="denies" rel="">denies</a> having had any <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/cosmetic" title="cosmetic" rel="">cosmetic</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/surgery" title="surgery" rel="">surgery</a>, but I <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/think" title="think" rel="">think</a> she's <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/definitely" title="definitely" rel="">definitely</a> had some work done.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">她否認做過任何整容手術，但我認為她肯定做過一點。</span>
        </div> </div></div>     
     </div>           
           </div>

                    <div class="pr dsense "><div class="cid" id="caldcnt-1-5"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
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
           </div>

                    <div class="pr dsense "><div class="cid" id="caldcnt-1-6"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>FACTORY</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="pr phrase-block dphrase-block "><div class="cid" id="caldcnt-1-6-1"></div><div class="phrase-head dphrase_h"><i class="i i-caret-right dtrans fs18 lpb-4" aria-hidden="true">&nbsp;</i><span class="phrase-title dphrase-title"><b>works</b></span> <span class="phrase-info dphrase-info"><span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">C</span> ]</a></span> <span class="irreg-infls dinfls "><span class="inf-group dinfg "><span class="lab dlab">plural</span> <b class="inf dinf">works</b></span></span></span></div><div class="phrase-body dphrase_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_06">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_06', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  </span><div class="def ddef_d db">an <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/industrial" title="industrial" rel="">industrial</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/building" title="building" rel="">building</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/especially" title="especially" rel="">especially</a> one where a lot of <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/people" title="people" rel="">people</a> are <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/employ" title="employed" rel="">employed</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">（尤指工人眾多的）<a class="Ref" href="/zht/%E8%A9%9E%E5%85%B8/%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94-%E8%8B%B1%E8%AA%9E/%E5%B7%A5%E5%BB%A0"><span class="dtrans">工廠</span></a></span>
        <div class="examp dexamp"> <span class="eg deg">a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/steel" title="steel" rel="">steel</a>/<a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/iron" title="iron" rel="">iron</a> works</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">鋼／鐵廠</span>
        </div> </div></div>     
     </div></div></div>           
                                                                  <div id="ad_contentslot_2" class="am-default_moreslots contentslot up-show" style="display: block !important;" data-google-query-id="CPHzzKj1qIYDFePGFgUdVnsDuQ">
        
    <div id="google_ads_iframe_/23202586/cdo_mpuslot2_0__container__" style="border: 0pt none; display: block; width: max-content !important; height: 250px; position: relative; z-index: 0; margin: 0px auto;"><iframe frameborder="0" src="https://0fa1771bffb51cf4fb28f152336eea88.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?upapi=true" id="google_ads_iframe_/23202586/cdo_mpuslot2_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="attribution-reporting" aria-label="Advertisement" tabindex="0" data-google-container-id="6" style="border: 0px; vertical-align: bottom; width: 300px !important;" data-load-complete="true"></iframe><div class="upo-label" style="text-align: left; padding: 0px; margin: 0px; position: absolute; top: 0px; left: 0px; z-index: 9000; transition: opacity 1s ease-out 0s; opacity: 1; cursor: pointer; transform: none;"><span style="display:block;background:rgba(255, 255, 255, 0.7);height:fit-content;width:fit-content;top:0;left:0;color:#444;font-size:10px;font-weight:bold;font-family:sans-serif;line-height:normal;text-decoration:none;margin:0px;padding:6px;border-radius:0 0 5px 0;">AD</span></div></div></div>
                                       </div>

                    <div class="pr dsense "><div class="cid" id="caldcnt-1-7"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>MACHINE</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="pr phrase-block dphrase-block "><div class="cid" id="caldcnt-1-7-1"></div><div class="phrase-head dphrase_h"><i class="i i-caret-right dtrans fs18 lpb-4" aria-hidden="true">&nbsp;</i><span class="phrase-title dphrase-title"><b>works</b></span> <span class="phrase-info dphrase-info"><span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">plural</span> ]</a></span></span></div><div class="phrase-body dphrase_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_07">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_07', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  </span><div class="def ddef_d db">the <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/part" title="parts" rel="">parts</a> of a <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/machine" title="machine" rel="">machine</a>, <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/especially" title="especially" rel="">especially</a> those that <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/move" title="move" rel="">move</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">（機器的）<a class="Ref" href="/zht/%E8%A9%9E%E5%85%B8/%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94-%E8%8B%B1%E8%AA%9E/%E9%83%A8%E4%BB%B6"><span class="dtrans">活動部件</span></a></span>
        <div class="examp dexamp"> <span class="eg deg">If you take the back off this <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/clock" title="clock" rel="">clock</a>, you can <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/see" title="see" rel="">see</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/its" title="its" rel="">its</a>/the works.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">如果你把鐘的後蓋打開，就會看到那些活動部件。</span>
        </div> </div></div>     
     </div></div></div>           
     </div>

                    <div class="pr dsense "><div class="cid" id="caldcnt-1-8"></div> <h3 class="dsense_h"><span class="hw dsense_hw">work</span> <span class="pos dsense_pos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="guideword dsense_gw" title="Guide word: helps you find the right meaning when a word has more than one meaning">
        (<span>PHYSICS</span>)
  </span></h3> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00036481_08">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" amp-access-hide="" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00036481_08', wotd: 'work' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="將該釋義加入詞彙表中" on="tap:amp-access.login-sign-in">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  <span class="gram dgram"><a href="/zht/help/codes.html">[ <span class="gc dgc">U</span> ]</a></span>
        <span class="ddivide ">&nbsp;</span>         <span class="domain ddomain">physics</span>
        <span class="ddivide ">&nbsp;</span>         <span class="lab dlab"><span class="usage dusage lpl-10">specialized</span></span></span> <div class="def ddef_d db"><a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/force" title="force" rel="">force</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/multiply" title="multiplied" rel="">multiplied</a> by <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/distance" title="distance" rel="">distance</a> <a class="query" href="https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/moved" title="moved" rel="">moved</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">（物體的）<a class="Ref" href="/zht/%E8%A9%9E%E5%85%B8/%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94-%E8%8B%B1%E8%AA%9E/%E5%8A%9F"><span class="dtrans">功</span></a></span>
         </div></div>     
     </div>           
     </div><div class="xref grammar hax dxref-w lmt-25 lmb-25"><h3 class="bb fs16 lp-10 lmb-0"><strong class="xref-title dxref-t">文法</strong></h3><div class="hax lp-10 lb lb-cm lbt0">

            <div class="item lbb lb-cm lpb-10" data-position="1"><a href="/zht/%E8%AA%9E%E6%B3%95/%E8%8B%B1%E5%BC%8F%E8%AA%9E%E6%B3%95/uffcfaf76bd71c570.-2fa1d670.1444ea5abeb.-25dc" title="關於Work (noun)的文法"><div class="x-h dx-h"><span class="obj dobj">Work</span> (noun)</div><span class="x-pos dx-pos">Work is an uncountable noun when it means something we do that takes an effort, often as part of a job or for study:</span> …
            </a></div>

            <div class="item lbb lb-cm lpt-10 lpb-10" data-position="2"><a href="/zht/%E8%AA%9E%E6%B3%95/%E8%8B%B1%E5%BC%8F%E8%AA%9E%E6%B3%95/uffcfaf76bd71c570.-2fa1d670.1444ea5abeb.-25dc" title="關於Work as an uncountable noun的文法"><div class="x-h dx-h"><span class="obj dobj">Work</span> as an uncountable noun</div><span class="x-pos dx-pos">Work is an uncountable noun when it means something we do that takes an effort, often as part of a job or for study:</span> …
            </a></div>

            <div class="item lpt-10 lpb-10" data-position="3"><a href="/zht/%E8%AA%9E%E6%B3%95/%E8%8B%B1%E5%BC%8F%E8%AA%9E%E6%B3%95/uffcfaf76bd71c570.-2fa1d670.1444ea5abeb.-25dc" title="關於Work as a countable noun的文法"><div class="x-h dx-h"><span class="obj dobj">Work</span> as a countable noun</div><span class="x-pos dx-pos">Work as a countable noun means something created, especially a book or painting or piece of music or sculpture:</span> …
            </a></div></div></div><div class="xref idioms hax dxref-w lmt-25 lmb-25"><h3 class="bb fs16 lp-10 lmb-0"><strong class="xref-title dxref-t">習語</strong></h3><div class="hax lp-10 lb lb-cm lbt0"><div class="lcs">

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="1"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/all-work-and-no-play-makes-jack-a-dull-boy" title="all work and no play (makes Jack a dull boy)的意思" rel=""><span class="x-h dx-h">all work and no play (makes Jack a dull boy)</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="2"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/be-at-work" title="be at work的意思" rel=""><span class="x-h dx-h">be at work</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="3"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/be-in-work" title="be in work的意思" rel=""><span class="x-h dx-h">be in work</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="4"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/be-out-of-work" title="be out of work的意思" rel=""><span class="x-h dx-h">be out of work</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="5"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/get-set-to-work" title="get/set to work的意思" rel=""><span class="x-h dx-h">get/set to work</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="6"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/have-work-cut-out-for" title="have your work cut out (for you)的意思" rel=""><span class="x-h dx-h">have <span class="obj dobj">your</span> work cut out (for <span class="obj dobj">you</span>)</span></a></div>

            <div class="item lc lc1 lc-xs6-12 lpb-10 lpr-10" data-position="7"><a href="/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/in-the-works" title="in the works的意思" rel=""><span class="x-h dx-h">in the works</span></a></div></div></div></div></div></div>`);

test('test gettinng word', () => {
    const entryBody = new EntryBody(element);
    expect(entryBody.getWord()).toBe('work');
});

test('test getting part of speech', () => {
    const entryBody = new EntryBody(element);
    expect(entryBody.getPartOfSpeech()).toBe('noun');
});

test('test getting dsense blocks', () => {
    const entryBody = new EntryBody(element);
    const dsenseBlocks = entryBody.getDsenseBlocks();
    expect(dsenseBlocks.length).toBe(8);
    expect(dsenseBlocks[0].getGuideWord()).toBe('ACTIVITY');
    expect(dsenseBlocks[1].getGuideWord()).toBe('PLACE');
    expect(dsenseBlocks[2].getGuideWord()).toBe('CREATION');
    expect(dsenseBlocks[3].getGuideWord()).toBe('SURGERY');
    expect(dsenseBlocks[4].getGuideWord()).toBe('EVERYTHING');
    expect(dsenseBlocks[5].getGuideWord()).toBe('FACTORY');
    expect(dsenseBlocks[6].getGuideWord()).toBe('MACHINE');
    expect(dsenseBlocks[7].getGuideWord()).toBe('PHYSICS');
});

const elementWithCode = createMockElement(`<div class="entry-body"> <div class="pr entry-body__el"><div class="cid" id="caldcnt-1"></div><div class="pos-header dpos-h"><div class="di-title"><span class="headword hdb tw-bw dhw dpos-h_hw "><span class="hw dhw">situation</span></span></div><div class="posgram dpos-g hdib lmr-5"><span class="pos dpos" title="A word that refers to a person, place, idea, event or thing.">noun</span> <span class="gram dgram"><a href="/help/codes.html">[ <span class="gc dgc">C</span> ]</a></span></div> <div></div><span class="uk dpron-i "><span class="region dreg">uk</span><span class="daud">                    
<audio class="hdn" preload="none" id="audio1" controlslist="nodownload">
    <div class="hdib" fallback="">
        <p>Your browser doesn't support HTML5 audio</p>
    </div>
    <source type="audio/mpeg" src="/media/english-chinese-traditional/uk_pron/u/uks/uksit/uksitua002.mp3">
    <source type="audio/ogg" src="/media/english-chinese-traditional/uk_pron_ogg/u/uks/uksit/uksitua002.ogg">
</audio>
<div title="Listen to the British English pronunciation" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio1.load(); audio1.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">ˌsɪtʃ.uˈeɪ.ʃ<span class="sp dsp">ə</span>n</span>/</span></span> <span class="us dpron-i "><span class="region dreg">us</span><span class="daud">                    
<audio class="hdn" preload="none" id="audio2" controlslist="nodownload">
    <div class="hdib" fallback="">
        <p>Your browser doesn't support HTML5 audio</p>
    </div>
    <source type="audio/mpeg" src="/media/english-chinese-traditional/us_pron/s/sit/situa/situation.mp3">
    <source type="audio/ogg" src="/media/english-chinese-traditional/us_pron_ogg/s/sit/situa/situation.ogg">
</audio>
<div title="Listen to the American English pronunciation" class="i i-volume-up c_aud htc hdib hp hv-1 fon tcu tc-bd lmr-10 lpt-3 fs20 hv-3" onclick="audio2.load(); audio2.play();" role="button" tabindex="0"></div>
</span><span class="pron dpron">/<span class="ipa dipa lpr-2 lpl-1">ˌsɪtʃ.uˈeɪ.ʃ<span class="sp dsp">ə</span>n</span>/</span></span></div><div class="pos-body">

                            <div class="pr dsense dsense-noh"><div class="cid" id="caldcnt-1-1"></div> <div class="sense-body dsense_b"><div class="def-block ddef_block " data-wl-senseid="ID_00029634_01">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00029634_01', wotd: 'situation' } }), sidebarWordList.open">
        <span class="tb fs10 hvm">Add to word list</span>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:amp-access.login-sign-in" amp-access-hide="">
        <span class="tb fs10 hvm">Add to word list</span>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info"><span class="epp-xref dxref B1">B1</span> </span><div class="def ddef_d db">the set of things that are <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/happening" title="happening" rel="">happening</a> and the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/condition" title="conditions" rel="">conditions</a> that <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/exist" title="exist" rel="">exist</a> at a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/particular" title="particular" rel="">particular</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/time" title="time" rel="">time</a> and <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/place" title="place" rel="">place</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">處境，情況，形勢</span>
        <div class="examp dexamp with-anki-button"> <span class="eg deg">the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/economic" title="economic" rel="">economic</a>/<a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/political" title="political" rel="">political</a> situation</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">經濟／政治形勢</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div><div class="examp dexamp with-anki-button"> <span class="eg deg">Her <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/news" title="news" rel="">news</a> put me <span class="b db">in</span> a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/difficult" title="difficult" rel="">difficult</a> situation.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">她的消息讓我陷入困境。</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div><div class="examp dexamp with-anki-button"> <span class="eg deg">"Would you get <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/involved" title="involved" rel="">involved</a> in a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/fight" title="fight" rel="">fight</a>?" "It would <span class="b db"><a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/depend" title="depend" rel="">depend</a> on the</span> situation."</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">「你會和別人打架嗎?」 「這要看情況。」</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div><div class="examp dexamp with-anki-button"> <span class="eg deg">I'll <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/worry" title="worry" rel="">worry</a> about it <span class="b db">if/when/as</span> the situation <span class="b db"><a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/arise" title="arises" rel="">arises</a></span> <span class="gloss dgloss">(= if/when/as it <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/happen" title="happens" rel="">happens</a>)</span>.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">如果這種情況發生/這種情況發生時，我會擔憂的。</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div> </div></div>                                 
     <div class="def-block ddef_block " data-wl-senseid="ID_00029634_02">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00029634_02', wotd: 'situation' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:amp-access.login-sign-in" amp-access-hide="">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  <span class="lab dlab"><span class="usage dusage lpl-10">old use</span></span></span> <div class="def ddef_d db">a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/job" title="job" rel="">job</a></div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant"><a class="Ref" href="/dictionary/chinese-traditional-english/%E5%B7%A5%E4%BD%9C"><span class="dtrans">工作</span></a></span>
        <div class="examp dexamp with-anki-button"> <span class="eg deg">My <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/sister" title="sister" rel="">sister</a> has a good situation <span class="b db">as</span> a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/teacher" title="teacher" rel="">teacher</a> in the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/local" title="local" rel="">local</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/school" title="school" rel="">school</a>.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">我姐姐有一份好工作，在當地學校當老師。</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div> <div class="xref synonyms hax dxref-w lmt-25"><strong class="xref-title dxref-t">Synonyms</strong><div class="lcs lmt-10 lmb-20">

            <div class="item lc lc1 lpb-10 lpr-10" data-position="1"><a href="/dictionary/english-chinese-traditional/appointment" title="meaning of appointment" rel=""><span class="x-h dx-h">appointment</span> <span class="x-num dx-num">(JOB)</span></a></div>

            <div class="item lc lc1 lpb-10 lpr-10" data-position="2"><a href="/dictionary/english-chinese-traditional/job" title="meaning of job" rel=""><span class="x-h dx-h">job</span> <span class="x-num dx-num">(EMPLOYMENT)</span></a></div>

            <div class="item lc lc1 lpb-10 lpr-10" data-position="3"><a href="/dictionary/english-chinese-traditional/position" title="meaning of position" rel=""><span class="x-h dx-h">position</span>  <span class="x-num dx-num">(RANK)</span></a></div>

            <div class="item lc lc1 lpb-10 lpr-10" data-position="4"><a href="/dictionary/english-chinese-traditional/post" title="meaning of post" rel=""><span class="x-h dx-h">post</span>  <span class="x-num dx-num">(JOB)</span></a></div></div></div><div class="xref compare hax dxref-w "><strong class="xref-title dxref-t">Compare</strong><div class="lcs lmt-10 lmb-20">

            <div class="item lc lc1 lpb-10 lpr-10" data-position="1"><a href="/dictionary/english-chinese-traditional/employment" title="meaning of employment"><span class="x-h dx-h">employment</span> <span class="x-num dx-num">(WORK)</span></a></div>

            <div class="item lc lc1 lpb-10 lpr-10" data-position="2"><a href="/dictionary/english-chinese-traditional/work" title="meaning of work"><span class="x-h dx-h">work</span> <span class="x-pos dx-pos">noun</span> <span class="x-num dx-num">(ACTIVITY)</span></a></div></div></div> </div></div>     
     <div class="def-block ddef_block " data-wl-senseid="ID_00029634_03">
                    <div class="dwl hax">
                        
     
    <a amp-access="loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:AMP.setState({ stateGlobal: { wlSenseId: 'ID_00029634_03', wotd: 'situation' } }), sidebarWordList.open">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    <a amp-access="NOT loggedIn" class="dwla wordlist-add-button" title="Add this meaning to a word list" on="tap:amp-access.login-sign-in" amp-access-hide="">
        <i class="i i-plus" aria-hidden="true"></i>
        <i class="i i-list-ul" aria-hidden="true"></i>
    </a>
    </div>
            <div class="ddef_h"><span class="def-info ddef-info">  <span class="lab dlab"><span class="usage dusage lpl-10">formal</span></span></span> <div class="def ddef_d db">the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/position" title="position" rel="">position</a> of something, <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/especially" title="especially" rel="">especially</a> a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/town" title="town" rel="">town</a>, <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/building" title="building" rel="">building</a>, etc.</div> </div><div class="def-body ddef_b">  
                             
    <span class="trans dtrans dtrans-se  break-cj" lang="zh-Hant">（尤指城鎮、建築物等的）<a class="Ref" href="/dictionary/chinese-traditional-english/%E4%BD%8D%E7%BD%AE"><span class="dtrans">位置</span></a></span>
        <div class="examp dexamp with-anki-button"> <span class="eg deg">The house's situation in the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/river" title="river" rel="">river</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/valley" title="valley" rel="">valley</a> is <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/perfect" title="perfect" rel="">perfect</a>.</span>  
                             
    <span class="trans dtrans dtrans-se hdb break-cj" lang="zh-Hant">房子在河谷中的位置極佳。</span>
        <button type="button" class="anki-button"><img src="http://127.0.0.1:5173/src/assets/anki_104026.svg"></button></div> </div></div>     
                        <div class="daccord"><amp-accordion class="i-amphtml-element i-amphtml-layout-container i-amphtml-built i-amphtml-layout" i-amphtml-layout="container">
                        <section expanded="">
                    <header class="ca_h daccord_h i-amphtml-accordion-header" id="3_AMP_header_0" role="button" aria-controls="3_AMP_content_0" aria-expanded="true" tabindex="0">
                            <i class="i i-plus ca_hi" aria-hidden="true"></i>
                            <span class="showmore">More examples</span><span class="showless">Fewer examples</span></header><div class="i-amphtml-accordion-content" id="3_AMP_content_0" aria-labelledby="3_AMP_header_0" role="region"><ul class="hul-u hul-u0 ca_b daccord_b lm-0"><li class="eg dexamp hax">Quite <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/frankly" title="frankly" rel="">frankly</a>, I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/think" title="think" rel="">think</a> this <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/whole" title="whole" rel="">whole</a> situation is <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/ridiculous" title="ridiculous" rel="">ridiculous</a>.</li><li class="eg dexamp hax">It's a <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/difficult" title="difficult" rel="">difficult</a> situation and I don't <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/know" title="know" rel="">know</a> what the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/answer" title="answer" rel="">answer</a> is.</li><li class="eg dexamp hax">Few <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/journalist" title="journalists" rel="">journalists</a> have <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/manage" title="managed" rel="">managed</a> to <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/convey" title="convey" rel="">convey</a> the <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/full" title="full" rel="">full</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/horror" title="horror" rel="">horror</a> of the situation.</li><li class="eg dexamp hax">I <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/thought" title="thought" rel="">thought</a> he <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/handle" title="handled" rel="">handled</a> the situation very well.</li><li class="eg dexamp hax">The situation has <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/become" title="become" rel="">become</a> <a class="query" href="https://dictionary.cambridge.org/dictionary/english-chinese-traditional/intolerable" title="intolerable" rel="">intolerable</a>.</li></ul></div>
                        </section>
                </amp-accordion></div></div>           
                                    <script type="text/javascript">
if(typeof iaw !== 'undefined') {
    iaw.que.push(function() {
        iaw.setExtraAdSlots(["ad_ringlinkslot"]);
        iaw.addPageCriteria("cdo_elvl", "B1");
        iaw.addPageCriteria("cdo_abt", "1");
    });
}
</script>
<div id="ad_ringlinkslot" data-google-query-id="COjY2MPErYYDFVRTwgUdfbAG8Q" style="display: none;">
<script type="text/javascript">iaw.cmd.push(function () { iaw.display("ad_ringlinkslot"); });</script>
<div id="google_ads_iframe_/2863368/ringlinkslot_0__container__" style="border: 0pt none; width: 300px; height: 0px;"></div></div>
               </div></div></div></div>`);

test('test getting code', () => {
    const entryBody = new EntryBody(elementWithCode);
    expect(entryBody.getCode()).toBe('[ C ]');
});
