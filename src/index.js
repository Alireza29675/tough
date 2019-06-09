import ToughSelector from './ToughSelector'

const $ = (query, roots = [document]) => {
    return new ToughSelector(query, roots);
}

export default $