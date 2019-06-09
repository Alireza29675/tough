import deepSearch from './helpers/deepSearch'

class Tough {

    constructor (query, elements) {
        this.elements = elements;
        if (query) this.select(query);
    }

    select (query) {
        const elements = [];
        for (let element of this.elements) {
            const inside = element.querySelectorAll(query);
            inside.forEach(item => elements.push(item));
        }
        this.elements = elements;
        return this;
    }

    search (options) {
        this.elements = deepSearch(this.elements, options);
        return this;
    }

    get (index) {
        return this.elements[index];
    }

    get length () {
        return this.elements.length;
    }

    each (cb) {
        for (let element of this) cb(element)
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