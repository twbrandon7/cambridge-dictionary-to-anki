export function filterBoldTextFromElement(element: HTMLElement): string {
    let result = "";
    element.childNodes.forEach((child: ChildNode) => {
        // if current has class `b`, then wrap it with <b> tag
        if (child instanceof HTMLElement && child.classList.contains('b')) {
            result += `<b>${child.textContent}</b>`;
        } else {
            result += child.textContent;
        }
    });
    return result;
}
