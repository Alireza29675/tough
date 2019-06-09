const rgba = require('color-rgba');

export const colorDiff = (color1, color2) => {
    const colors = [rgba(color1), rgba(color2)];
    let diff = 0;
    for (let i = 0; i < 3; i++) diff += (colors[0][i] - colors[1][i]) * (colors[0][i] - colors[1][i]);
    return Math.sqrt(diff);
};

export const maxDiff = colorDiff('#000', '#fff');

export const similarity = (color1, color2) => {
    return 1 - (colorDiff(color1, color2) / maxDiff);
}

export const isSimilar = (color1, color2, confidence = 0.8) => {
    return similarity(color1, color2) > confidence
}