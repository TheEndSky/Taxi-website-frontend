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
const navigationList =  validElSelect('#navigation')
const modal =  validElSelect('.modal')
const transporteSubMenuBtn =  validElSelect('.transporte-btn')
const subMenuList = validElSelect('.subnavigation-wrapper')
const subList = validElSelect('#tipo-transportes')
const subEls = subList.querySelectorAll('li')
let isKeyboardNavAllowed = true

function showNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', true)
    navbar.classList.add('open')
    modal.classList.add('open')
    barsMenuBtn.classList.add('clicked')
    subMenuList.classList.remove('open')
}
function hideNavBar() {
    barsMenuBtn.setAttribute('aria-expanded', false)
    navbar.classList.remove('open')
    modal.classList.remove('open')
    barsMenuBtn.classList.remove('clicked')
    subMenuList.classList.remove('open')

    subEls.forEach(el => {
        const link = el.querySelector('a')
        link.tabIndex = -1
        el.setAttribute('aria-hidden', false)
        transporteSubMenuBtn.setAttribute('aria-expanded',false)
    })
}

modal.addEventListener('click', () => {
    hideNavBar()
})
barsMenuBtn.addEventListener('click', () =>{
    showNavBar()
})
closeMenuBtn.addEventListener('click', () => {
    hideNavBar()
})
navbar.addEventListener('click',(e) => {
    if(e.target === navbar || e.target === navigationList) {
        console.log(e.target.closest('ul'))
        subMenuList.classList.remove('open')
        subEls.forEach(el => {
        const link = el.querySelector('a')
            link.tabIndex = -1
            el.setAttribute('aria-hidden', false)
            transporteSubMenuBtn.setAttribute('aria-expanded',false)
        })
        return
    }
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


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazyLoading: true,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction:true,
    },
    keyboard: {
        enabled: isKeyboardNavAllowed,
    },
    breakpoints: {
    800: {
        slidesPerView: 2
    },
    1400: {
        slidesPerView: 3
    }
}
});

const [swiper1PrevBtn, swiper1NextBtn] = [ 
    validElSelect('.swiper-button-prev'), 
    validElSelect('.swiper-button-next') 
]


window.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') {
        swiper1PrevBtn.classList.add('active-color')
        swiper1NextBtn.classList.remove('active-color')
    }
    else if(e.key === 'ArrowRight') {
        swiper1PrevBtn.classList.remove('active-color')
        swiper1NextBtn.classList.add('active-color')
    }
})

// Modal related things
const modalSwiper = validElSelect('#swiper-modal')
const closeDialogBtn = validElSelect('.close-dialog-btn')
const dialogContactBtn = validElSelect('#dialog-contact-btn')

closeDialogBtn.addEventListener('click', () => {
    modalSwiper.close()
})

dialogContactBtn.addEventListener('click', () => {
    modalSwiper.close()
})
modalSwiper.addEventListener('click', (e) => {
    if (e.target === modalSwiper ) {
        modalSwiper.close()
    }
})
//Swiper Trigger Buttons
const qstnBtns = document.querySelectorAll('.location-qstn-btn')
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.tabIndex = 0
            }
            else {
                entry.target.tabIndex = -1
            }
        }))
qstnBtns.forEach(btn => {
    observer.observe(btn)
    btn.addEventListener('click', () => {
        modalSwiper.showModal()
    })
})
