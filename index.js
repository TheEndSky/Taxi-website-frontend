// const tabsList = document.getElementById('navs-container') 
// const tabsBtns = tabsList.querySelectorAll('#navs-container >li > a')
// const tabsPanels = document.querySelectorAll('.tab-container')

// tabsList.setAttribute('role', "tablist")

// tabsList.querySelectorAll('li').forEach(li => {
//     li.setAttribute('role',"presentation")
// })

// //Making all nav buttons be skipped when tabbing. This is the recommended behaviour for accesibility
// tabsBtns.forEach((tab,index) => {
//     if(index === 0) {
//         tab.setAttribute("aria-selected","true")
//     } else {
//         tab.setAttribute('tabindex',"-1")
//         tabsPanels[index].setAttribute('hidden', "")
//     }
// })
// //After displaying a panel after clicking a nav button. Make it the next element to be jumped to whenever you tab
// tabsPanels.forEach(panel => {
//     panel.setAttribute('tabindex',0)
// })

// tabsList.addEventListener('click', e => {
//     // Looks for the closest link element
//     const clickedTab = e.target.closest('a')
//     //Returns null if clicking anything but a link element
//     if (!clickedTab) return
//     e.preventDefault()
//     switchTab(clickedTab)
//     clickedTab.classList.add('active-link')
// })
// tabsList.addEventListener('keydown', e => {
//     switch (e.key) {
//         case "ArrowLeft":
//             moveLeft();
//             break;
//         case "ArrowRight":
//             moveRight();
//             break;
//         case "Home":
//             e.preventDefault()
//             switchTab(tabsBtns[0]);
//             break;
//         case "End":
//             e.preventDefault()
//             switchTab(tabsBtns[tabsBtns.length - 1]);
//             break;
//     }
// })
// function moveLeft() {
//     //Get the current element selected by tabs or not.
//     const currentTab = document.activeElement;
//     if(!currentTab.parentElement.previousElementSibling) {
//         switchTab(tabsBtns[tabsBtns.length - 1])
//     } else {
//         //Looks at the current tab, gets the parent element (list item), get the previous list item. And then grab the link in that previous element.
//         switchTab(currentTab.parentElement.previousElementSibling.querySelector('a'))
//     }
    
// }

// function moveRight() {
//     //Get the current element selected
//     const currentTab = document.activeElement;
//     //If in the last tab, go back to the first
//     if(!currentTab.parentElement.nextElementSibling) {
//         switchTab(tabsBtns[0])
//     } else {
//         switchTab(currentTab.parentElement.nextElementSibling.querySelector('a'))
//     }
    
// }

// function switchTab(newTab) {
//     const activePanelId = newTab.getAttribute('href')
//     const activePanel = document.querySelector(activePanelId)
//     //Accesibility
//     tabsBtns.forEach(btn => {
//         btn.setAttribute('aria-selected', false)
//         btn.setAttribute("tabindex","-1")
//     })
//     //Hide every list item
//     tabsPanels.forEach(panel => panel.setAttribute('hidden','true'))

//     //Put those attributes back to the current active tab
//     activePanel.removeAttribute('hidden')
//     newTab.setAttribute('aria-selected',true)
//     newTab.setAttribute('tabindex',"0")
//     //If you switch tabs with our moveLeft moveRight functions() make them to be the new focused element
//     newTab.focus()
// }
