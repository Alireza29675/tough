import Tough from './Tough'
import { globalThis } from './globalThis'

const $ = (query, roots) => {
    if (!roots) {
        try { roots = document.body; }
        catch (e) { roots = [] }
    }
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

if (globalThis) globalThis.$ = $
export default $