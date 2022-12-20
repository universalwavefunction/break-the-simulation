/*
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
*/

/*make days into a factory function with repeatable properties for each day,
and each day as an item in an array*/
function addDay(day) {
    //container for each day
    const dayContainer = document.createElement('div');

    //container for the dropdown and title
    const dropdownContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const title = document.createElement('h2');
    const dropdown = document.createElement('button');

    //create content for each day
    const dayContents = document.createElement('div');
    const video = document.createElement('video');
    const description = document.createElement('p');

    //create buttons and container
    const buttonContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    const completeButton = document.createElement('button');
    const discordButton = document.createElement('button');
    const completedBy = document.createElement('p');

    // Set the content for the elements
    checkbox.type = 'checkbox';
    title.textContent = day.title;
    dropdown.textContent = 'v';
    description.textContent = day.description;
    video.src = day.videoUrl;
    video.type = day.videoType
    submitButton.textContent = 'Submit Video';
    completeButton.textContent = 'Mark Complete';
    discordButton.textContent = 'Discord';
    completedBy.textContent = day.completedBy;

    // Add the elements to the container elements
    dropdownContainer.appendChild(checkbox);
    dropdownContainer.appendChild(title);
    dropdownContainer.appendChild(dropdown);
    dayContainer.appendChild(dropdownContainer);
    dayContents.appendChild(description);
    dayContents.appendChild(video);
    dayContainer.appendChild(dayContents);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(discordButton);
    buttonContainer.appendChild(completedBy);
    dayContainer.appendChild(buttonContainer);

    // Return the container element
    return dayContainer;
}

// Array of objects with the content for each item
const days = [
    {
      title: 'Day 1',
      description: `Say hi to a random stranger<br>
      while walking anywhere<br>`,
      videoUrl: 'saying-hi-to-strangers.mp4',
      videoType: 'video/mp4',
      completedBy: 'Completed by: 3'
    },
    {
      title: 'Day 2',
      description: 'This is the second day',
      videoUrl: '',
      videoType: '',
      completedBy: 'Completed by: 3'
    },
    {
      title: 'Day 3',
      description: 'This is the third day',
      videoUrl: '',
      videoType: '',
      completedBy: 'Completed by: 3'
    },
  ];

  // Iterate over the items array and create the HTML elements using the factory function
  for (const day of days) {
    const dayElement = addDay(day);
    document.getElementById('days-list').appendChild(dayElement);
  }



//make account to save progress and backend storage
//add progress bar
//add ability to submit videos (go to backend to be approved, then where do they go?)
//add ability to submit exercises/challenges (for social anx and other topics)
//add profiles that show your progress and videos you've submitted
//add points for completing challenges and fun animations