const dropdown = document.getElementById('dropdown')
const descriptionTitle = document.getElementById('description-title')
const descriptionInfo = document.getElementById('description-info')
descriptionTitle.style.display = 'none'

dropdown.addEventListener('click', () => {
    if (descriptionTitle.style.display == 'none') {
        descriptionTitle.style.display = 'block'
        descriptionInfo.style.display = 'block'
    }
    else {
        descriptionTitle.style.display = 'none'
        descriptionInfo.style.display = 'none'
    }
})