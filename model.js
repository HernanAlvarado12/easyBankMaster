import { choose, latest } from './data.js'

const menu = document.querySelector('header > nav menu.w-90.absolute')
const iconMenu = document.getElementById('iconMenu')

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


const latestFragment = document.createDocumentFragment()
const chooseFragment = document.createDocumentFragment()
const latestTemplate = document.getElementById('latestTemplate').content
const chooseTemplate = document.getElementById('chooseTemplate').content

console.log(latestTemplate)

choose.forEach(choose => {
    const cloneNode = document.importNode(chooseTemplate, true)
    const { title, image, content } = choose
    cloneNode.querySelector('img').setAttribute('src', image)
    cloneNode.querySelector('h2').textContent = title
    cloneNode.querySelector('p').textContent = content
    chooseFragment.appendChild(cloneNode)
})
document.querySelector('main > section.my-15').append(chooseFragment)


latest.forEach(latest => {
    const cloneNode = document.importNode(latestTemplate, true)
    const { by, title, content, image} = latest
    cloneNode.querySelector('img').setAttribute('src', image)
    cloneNode.querySelector('div > p').textContent = by
    cloneNode.querySelector('div > h3').textContent = title
    cloneNode.querySelector('h3 + p').textContent = content
    latestFragment.append(cloneNode)
})
document.querySelector('section + section > section.flex').append(latestFragment)