const deepSearch = (element, options = {}, answers = []) => {
    const { text } = options;
    const condition = element.innerText.includes(text);
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