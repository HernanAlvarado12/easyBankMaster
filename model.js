import { choose, latest } from './data.js'

const iconMenu = document.getElementById('iconMenu')
const latestFragment = document.createDocumentFragment()
const chooseFragment = document.createDocumentFragment()
const menu = document.querySelector('header > nav menu.w-90.absolute')
const latestTemplate = document.getElementById('latestTemplate').content
const chooseTemplate = document.getElementById('chooseTemplate').content

document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        if(menu.classList.contains('n-menu')) {
            menu.classList.remove('n-menu', 'scale-0')
            iconMenu.setAttribute('src', './assets/close.svg')
        }else {
            menu.classList.add('n-menu', 'scale-0')
            iconMenu.setAttribute('src', './assets/hamburger.svg')
        }
    }
})


choose.forEach((json, index) => {
    const last = latest[index]
    lookTemplatesHTML({ json, template: chooseTemplate, selectorImg: 'img', selectorTitle: 'h2', selectorContent: 'p', fragment: chooseFragment })
    lookTemplatesHTML({ json: last, template: latestTemplate, selectorImg: 'img', selectorBy: '', selectorTitle: 'h3', selectorContent: 'h3 + p', selectorBy: 'p', fragment: latestFragment })
})
document.querySelector('main > section.my-15').append(chooseFragment)
document.querySelector('section + section > section.flex').append(latestFragment)


/**
 * @typedef {Object} jsonData
 * @property {Object} json
 * @property {Element} template
 * @property {String} selectorImg
 * @property {String} selectorTitle
 * @property {String} selectorContent
 * @property {String} selectorBy
 * @property {Element} fragment
 * @param {jsonData}
 */
function lookTemplatesHTML({ json, template, selectorImg, selectorTitle, selectorContent, selectorBy, fragment }) {
    const cloneNode = document.importNode(template, true)
    const { by, title, content, image} = json
    cloneNode.querySelector(selectorImg).setAttribute('src', image)
    cloneNode.querySelector(selectorTitle).textContent = title
    cloneNode.querySelector(selectorContent).textContent = content
    selectorBy? cloneNode.querySelector(selectorBy).textContent = by : ''
    fragment.append(cloneNode)
}

