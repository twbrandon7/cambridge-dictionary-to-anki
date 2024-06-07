import { expect, test } from 'vitest';
import ConfigInitializer from '@/lib/config-initializer';
import { createMockElement } from '../../test/test-utils';


const element = createMockElement(`<ul class="hdn hdib-m hul-u hul-ib lmb-0 lpl-20 lp-xs_l-25 han hax">
<li class="lpr-2"><a href="https://www.facebook.com/CUPCambridgeDictionary/" title="贊" class="hao lpl-10 lpr-15 i i-facebook iw fs16" target="_blank" rel="noopener noreferrer"></a></li>
<li class="lpr-5"><a href="https://www.instagram.com/cambridgewords" title="Instagram" class="hao lpl-10 lpr-10 i i-instagram tc-w fs16" target="_blank" rel="noopener noreferrer"></a></li>
<li class="lpr-5"><a href="https://twitter.com/CambridgeWords" title="關注" class="hao lpl-10 lpr-10 i i-x iw fs16" target="_blank" rel="noopener noreferrer"></a></li>
</ul>`);

test('test initialize', () => {
    const copiedElement = element.cloneNode(true) as HTMLElement;
    expect(copiedElement.querySelectorAll('li').length).toBe(3);
    const initializer = new ConfigInitializer(copiedElement);
    initializer.initialize();
    expect(copiedElement.querySelectorAll('li').length).toBe(4);
});