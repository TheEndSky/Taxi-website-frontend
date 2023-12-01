
    //Catch query selectors
function validElSelect(selector,parent) {
    const el = parent ? parent.querySelector(selector) : 
    document.querySelector(selector)
    if (!el) throw new Error (`${selector} is not a valid query Element`)
    return el
}
    // Variables
const barsMenuBtn =  validElSelect('.bars-menu-btn')
const closeMenuBtn =  validElSelect('.close-menu-btn')
const navbar =  validElSelect('.navbar')
const transporteSubMenuBtn =  validElSelect('.transporte-btn')
const subMenuList = validElSelect('.subnavigation-wrapper')
const subList = validElSelect('#tipo-transportes')
const subEls = subList.querySelectorAll('li')


function showNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', true)
    navbar.classList.add('open')
    barsMenuBtn.classList.add('clicked')
    subMenuList.classList.remove('open')
}
function hideNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', false)
    navbar.classList.remove('open')
    barsMenuBtn.classList.remove('clicked')
    subMenuList.classList.remove('open')

    subEls.forEach(el => {
        const link = el.querySelector('a')
        link.tabIndex = -1
        el.setAttribute('aria-hidden', false)
        transporteSubMenuBtn.setAttribute('aria-expanded',false)
    })
}

barsMenuBtn.addEventListener('click', () =>{
    showNavBar()
})
closeMenuBtn.addEventListener('click', () => {
    hideNavBar()
})
navbar.addEventListener('click',(e) => {
    const link = e.target.closest('a')
    if (!link) return
    hideNavBar()
})
transporteSubMenuBtn.addEventListener('click', () => {
    subMenuList.classList.toggle('open')
    subEls.forEach(el => {
        const link = el.querySelector('a')
        if (subMenuList.classList.contains('open')) {
            link.tabIndex = 0
            el.setAttribute('aria-hidden', false)
            transporteSubMenuBtn.setAttribute('aria-expanded',true)
        }
        else {
            link.tabIndex = -1
            el.setAttribute('aria-hidden', false)
            transporteSubMenuBtn.setAttribute('aria-expanded',false)
        }
    } )
})

subEls.forEach(li => {
    const link = li.closest('a')
    if (!link) return
    li.addEventListener('click',() => {
        link.tabIndex = -1
        el.setAttribute('aria-hidden', false)
        transporteSubMenuBtn.setAttribute('aria-expanded',false)
    })
})
window.addEventListener('keydown', (e) => {
    if (navbar.classList.contains('open') && e.key === 'Escape') hideNavBar() 
})
window.addEventListener('click', (e) => {
    if (navbar.classList.contains('open') && e.key === 'Escape') hideNavBar() 
})