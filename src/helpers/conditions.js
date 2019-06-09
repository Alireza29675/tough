import { isSimilar } from './colors'

const getStyle = (element) => {
    const style = window.getComputedStyle(element);
    return (prop) => style.getPropertyValue(prop);
}

const checkText = (element, { text, caseSensitive = false }) => {
    const innerText = caseSensitive ? element.innerText : element.innerText.toLowerCase();
    const searchingText = caseSensitive ? text : text.toLowerCase();
    return innerText.includes(searchingText);
}

const checkColor = (element, { color }) => {
    const style = getStyle(element);
    const colorStyle = style('color');
    return isSimilar(colorStyle, color)
}

const checkBackgroundColor = (element, { background }) => {
    const style = getStyle(element);
    const backgroundStyle = style('background-color');
    return isSimilar(backgroundStyle, background)
}

export const check = (element, conditions) => {
    const { text, caseSensitive, color, background } = conditions;

    let final = true;

    // Searching Text
    if (text) if (!checkText(element, { text, caseSensitive })) final = false;

    // Searching Color
    if (color) if (!checkColor(element, { color })) final = false;
    
    // Searching Background
    if (background) if (!checkBackgroundColor(element, { background })) final = false;

    return final;
}