const dropDown = document.getElementById('dropdown')
const description = document.getElementById('description')
description.style.display = 'none'

dropDown.addEventListener('click', () => {
    if (description.style.display == 'none') {
        description.style.display = 'block'
        dropDown.innerText = '>'
    }
    else {
        description.style.display = 'none'
        dropDown.innerText = 'v'
    }
})