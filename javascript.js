const dropDown = document.getElementById('dropdown')
const contents = document.getElementById('day-contents')
contents.style.display = 'flex'

dropDown.addEventListener('click', () => {
    if (contents.style.display == 'none') {
        contents.style.display = 'flex'
        dropDown.innerText = '>'
    }
    else {
        contents.style.display = 'none'
        dropDown.innerText = 'v'
    }
})