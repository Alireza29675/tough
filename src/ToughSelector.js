import deepSearch from './helpers/deepSearch'

class ToughSelector {

    constructor () {
        this.root = document.body
    }

    search (options) {
        const result = deepSearch(this.root, options)
        console.log(result)
    }

}

export default ToughSelector