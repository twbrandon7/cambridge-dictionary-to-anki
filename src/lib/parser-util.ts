export function filterBoldTextFromElement(element: HTMLElement): string {
    let result = "";
    element.childNodes.forEach((child: ChildNode) => {
        // if current has class `b`, then wrap it with <b> tag
        if (child.nodeType === Node.ELEMENT_NODE && (child as Element).classList.contains('b')) {
            result += `<b>${child.textContent}</b>`;
        } else {
            result += child.textContent;
        }
    });
    return result;
}
