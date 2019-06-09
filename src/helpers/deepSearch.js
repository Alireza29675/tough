import { check } from "./conditions";

const deepSearch = (elements, options = {}) => {
    const result = [];
    for (let element of elements) {
        const searchResult = deepSearchFromOneBranch(element, options);
        if (searchResult) {
            for (let res of searchResult) result.push(res)
        }
    }
    return result;
}

const deepSearchFromOneBranch = (element, conditions = {}, answers = []) => {
    const condition = check(element, conditions)

    // Going deep
    if (condition) {
        let isInside = false;
        for (let child of element.children) {
            if (deepSearchFromOneBranch(child, conditions, answers)) isInside = true;
        }
        if (!isInside) answers.push(element);
        return answers;
    }
    return false;
}

export default deepSearch