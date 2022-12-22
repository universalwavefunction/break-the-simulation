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
    const leftSide = document.createElement('div');
    const video = document.createElement('video');
    const rightSide = document.createElement('div');
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
    description.innerHTML = day.description;
    video.src = day.videoUrl;
    video.controls = true;
    video.type = day.videoType
    submitButton.textContent = 'Submit Video';
    completeButton.textContent = 'Mark Complete';
    discordButton.textContent = 'Discord';
    completedBy.textContent = day.completedBy;

    // Add the classes, ids, and css to the elements
    dayContents.className = 'day-contents';
    description.id = "description"
    dropdownContainer.className = 'dropdown-container';
    dropdown.className = 'dropdown';
    video.className = 'video';
    title.className = 'title';


    // Add the elements to the container elements
    dayContainer.appendChild(dropdownContainer);
    dayContainer.appendChild(dayContents);
    dropdownContainer.appendChild(checkbox);
    dropdownContainer.appendChild(title);
    dropdownContainer.appendChild(dropdown);
    dayContents.appendChild(leftSide);
    dayContents.appendChild(rightSide);
    leftSide.appendChild(video);
    rightSide.appendChild(description);
    rightSide.appendChild(buttonContainer);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(discordButton);
    buttonContainer.appendChild(completedBy);

    // Add event listener to complete button
    completeButton.addEventListener('click', () => {
      if (checkbox.checked == true) {
          localStorage.setItem(checkbox.checked, JSON.stringify(false));
          checkbox.checked = JSON.parse(localStorage.getItem(checkbox.checked));
          completeButton.textContent = 'Mark Complete';
      }
      else {
          localStorage.setItem(checkbox.checked, JSON.stringify(true));
          checkbox.checked = JSON.parse(localStorage.getItem(checkbox.checked));
          completeButton.textContent = 'Not Complete';
      }
    })

    // Add event listener to drop down
    dropdown.addEventListener('click', () => {
      if (dayContents.style.display == 'none') {
          dayContents.style.display = 'flex'
          dropdown.textContent = 'v'
      }
      else {
          dayContents.style.display = 'none'
          dropdown.textContent = '>'
      }
    })

    // Return the container element
    return dayContainer;
}

// Array of objects with the content for each item
const days = [
    {
      title: 'Day 1 [Say hi👋]',
      description: `Task:<br> Say hi to a random stranger<br>
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



//make account to save progress and server side storage
//make completed by work
//add progress bar
//make mobile and web versions
//add ability to submit videos (go to backend to be approved, then where do they go?)
//add ability to submit exercises/challenges (for social anx and other topics)
//add profiles that show your progress and videos you've submitted
//add points for completing challenges and fun animations