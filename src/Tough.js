import deepSearch from './helpers/deepSearch'

class Tough {

    constructor (query, elements) {
        this.elements = elements;
        this.search(query);
    }

    select (query) {

    }

    search (options) {
        const result = deepSearch(this, options)
        console.log(result)
    }

    *[Symbol.iterator]() {
        let i = 0;
        while(this.elements[i] !== undefined) {
            yield this.elements[i];
            ++i;
        }
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.elements.length
        }
        else if (hint === 'string') {
            const tags = this.elements.map(element => element.tagName.toLowerCase());
            return '[' + tags.join(', ') + ']';
        }
        else {
            return (this.elements.length > 0)
        }
    }

    [Symbol.isAbstractEqual](selector) {
        return true;
    }

}

export default Tough