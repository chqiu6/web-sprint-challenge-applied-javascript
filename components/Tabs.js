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

//div class topics
const topics = document.querySelector(".topics");

//axios data
axios
.get("https://lambda-times-api.herokuapp.com/topics")
.then(res =>{
    //checking the data
    const topicsData = res.data.topics;
    console.log("Here is your data", res.data.topics);
    //iterate over the data and creating tabs to append to the topics class 
    topicsData.forEach(item =>{
        const tab = tabCreate(item);
        topics.appendChild(tab);
    });
})
.catch(err => {
    console.log("Here is your err", err);
});

//function for tab
function tabCreate(res){
    const tabClass = document.createElement("div");

    tabClass.classList.add("tab");

    tabClass.textContent = res;

    return tabClass;
}