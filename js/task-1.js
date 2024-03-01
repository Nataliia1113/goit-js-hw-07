
'use strict'

const items = document.querySelectorAll(".item")
console.log(`Number of categories: ${items.length}`)
items.forEach(element => {
    const titles = element.querySelector('h2')
    console.log(`Category: ${titles.textContent}`)
    const list = element.querySelectorAll('li')
    console.log(`Elements: ${list.length}`)
})