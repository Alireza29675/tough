const deepSearch = (element, options = {}, answers = []) => {
    const { text, caseSensitive = false } = options;

    // conditions
    const innerText = caseSensitive ? element.innerText : element.innerText.toLowerCase();
    const searchingText = caseSensitive ? text : text.toLowerCase();

    const condition = innerText.includes(searchingText);

    // Going deep
    if (condition) {
        let isInside = false;
        for (let child of element.children) {
            if (deepSearch(child, options, answers)) isInside = true;
        }
        if (!isInside) answers.push(element);
        return answers;
    }
    return false;
}

export default deepSearch