import $ from '../../src'

const elements = $.search({ text: 'improve' }).get(0)

console.log(elements)