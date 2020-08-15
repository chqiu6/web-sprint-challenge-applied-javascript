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

const cardsContainer = document.querySelector(".cards-container");

axios
.get("https://lambda-times-api.herokuapp.com/articles")
.then(res => {
    const articlesData = res.data.articles;
    console.log("res data", res);
    articlesData.javascript.forEach(item =>{
        const articleCard = cardMake(item.headline, item.authorimg, item.authorname);
        cardsContainer.appendChild(articleCard);
    });
    articlesData.bootstrap.forEach(item => {
        const artcleCard = cardMake(item.headline, item.authorimg, item.authorname);
    });
    articlesData.jquery.forEach(item =>{
        const articleCard = cardMake(item.headline, item.authorimg, item.authorname);
        cardsContainer.appendChild(articleCard);
    });
    articlesData.node.forEach(item => {
        const artcleCard = cardMake(item.headline, item.authorimg, item.authorname);
    });
    articlesData.technology.forEach(item => {
        const artcleCard = cardMake(item.headline, item.authorimg, item.authorname);
    });
})
.catch(err => {
    console.log("Returned err", err);
});


function cardMake(headline, authorimg, authorname){
    const card = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContainerDiv = document.createElement("div");
    const imgUrl = document.createElement("img-src");
    const authorSpan = document.createElement("span");

    card.appendChild(headlineDiv);
    card.appendChild(authorDiv);
    card.appendChild(imgContainerDiv);
    card.appendChild(imgUrl);
    card.appendChild(authorSpan);

    card.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContainerDiv.classList.add("img-cotainer");

    headlineDiv.textContent = headline;
    imgUrl.src = authorimg;
    authorSpan.textContent = authorname;

    // card.addEventListener("click", () =>{
    //     s
    // });
    return card;
}
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>