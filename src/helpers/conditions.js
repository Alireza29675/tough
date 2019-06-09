export const check = (element, conditions) => {
    const { text, caseSensitive = false } = conditions;

    // conditions
    const innerText = caseSensitive ? element.innerText : element.innerText.toLowerCase();
    const searchingText = caseSensitive ? text : text.toLowerCase();

    return innerText.includes(searchingText);
}