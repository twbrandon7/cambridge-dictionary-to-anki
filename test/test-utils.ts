export function createMockElement(html: string): HTMLElement {
    const div = document.createElement('div');
    div.innerHTML = html;
    const child = div.firstElementChild;
    return child as HTMLElement;
}
