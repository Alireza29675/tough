import deepSearch from './helpers/deepSearch'
import types from './helpers/types'

class Tough {

    constructor (query, elements) {
        this.elements = elements;
        if (query) this.select(query);
    }

    select (query) {
        const steps = query.split(/{(.*?)}/);
        for (let i = 0; i < steps.length; i++) {
            const selector = steps[i].trim();
            if (selector === '') continue;
            const isMeta = (i % 2 === 1);
            if (isMeta) this.type(selector)
            else this.query(selector)
        }
        return this;
    }

    query (query) {
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

    type (type) {
        if (type in types) this.query(types[type].join(', '));
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
        return this;
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                return { value: this.elements[i++], done: !this.elements[i - 1] }
            }
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

}

export default Tough