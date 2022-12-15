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

/*make days into a factory function with repeatable properties for each day,
and each day as an item in an array*/
const days = () => {
    const day = (number,title,description,completed,video,buttons) => {
        return {number,title,description,completed,video,buttons}
    }
}



//make account to save progress and backend storage
//add progress bar
//add ability to submit videos (go to backend to be approved, then where do they go?)
//add ability to submit exercises/challenges (for social anx and other topics)
//add profiles that show your progress and videos you've submitted
//add points for completing challenges and fun animations