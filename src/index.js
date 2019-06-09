import ToughSelector from './ToughSelector'

const $$ = {}

$$.select = (query, element = document) => element.querySelectorAll(query);
$$.selectOne = (query, element = document) => element.querySelector(query); 

$$.search = (text) => {
    const tough = new ToughSelector();
    tough.search(text);
    return tough;
}

export default $$