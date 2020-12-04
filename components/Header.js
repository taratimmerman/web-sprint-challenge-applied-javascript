// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() { 
    // Create elements
    const container = document.createElement('div');
    const date = document.createElement('span');
    const mainTitle = document.createElement('h1');
    const temp = document.createElement('span');

    // Assign class names
    container.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Establish textContent
    date.textContent = 'MARCH 28, 2020';
    mainTitle.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // Variable to append header to DOM
    const header = document.querySelector('.header-container');

    // Append elements
    container.appendChild(date);
    container.appendChild(mainTitle);
    container.appendChild(temp);
    header.appendChild(container);

    return container;
}

Header();


    