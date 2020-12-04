// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// Variable to append tab to DOM
const topicsTab = document.querySelector('.topics');

// Data get via axios and append
axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then((res) => {
        const topicArr = res.data.topics;
        topicArr.forEach(item => {
            topicsTab.appendChild(topicMaker(item));
        })
    })
    .catch((err) => {
        console.log(err);
    });

function topicMaker(item) {
    // Create Element
    const topic = document.createElement('div');

    // Assign class name
    topic.classList.add('tab');

    // Establish textContent
    topic.textContent = item;

    return topic;
}