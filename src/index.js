import "@babel/polyfill";
import Tough from './Tough'

const $ = (query, roots = document.body) => {
    if (!Array.isArray(roots)) roots = [roots];
    return new Tough(query, roots);
}

const props = Object.getOwnPropertyNames(Object.getPrototypeOf($())).filter(item => {
    return !['constructor', 'undefined', 'length'].includes(item)
});

for (let prop of props) {
    $[prop] = function () {
        const selector = $();
        return selector[prop].apply(selector, arguments);
    }
}

export default $