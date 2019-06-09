import Tough from './Tough'

const $ = (query, roots = document.body) => {
    if (!Array.isArray(roots)) roots = [roots];
    return new Tough(query, roots);
}

export default $