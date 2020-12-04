// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
        const articles = res.data.articles;
        console.log(articles);
        const articleTopics = Object.keys(articles);
        console.log(articleTopics);
        articleTopics.forEach(i => {
            const topic = articles[i];
            topic.forEach(j => {
                const newCard = articleMaker(j);
                cardContainer.appendChild(newCard);
            });
        })
    })
    .catch((err) => {
        console.log(err);
    });

function articleMaker(article) {
    
    // Establish elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authName = document.createElement('span');

    // Assign class names
    card.classList.add('card');
    headline.classList.add('headline');
    authDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    // Establish textContent & src
    headline.textContent = `${article.headline}`;
    img.src = article.authorPhoto;
    authName.textContent = `By ${article.authorName}`;

    // Append
    card.appendChild(headline);
    card.appendChild(authDiv);
    authDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authDiv.appendChild(authName);

    // Add eventListener
    card.addEventListener('click', () => {
        console.log(headline);
    })

    return article;
}
