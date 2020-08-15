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

//created function 
function Header() {
    const headerClass = document.createElement("div");
    const spanDate = document.createElement("span")
    const h1Title = document.createElement("h1");
    const spanTemp = document.createElement("span");

    headerClass.appendChild(spanDate);
    headerClass.appendChild(h1Title);
    headerClass.appendChild(spanTemp);

    headerClass.classList.add("header");
    spanDate.classList.add("date");
    spanTemp.classList.add("temp");

    spanDate.textContent = "MARCH 28, 2020";
    h1Title.textContent = "Lambda Times";
    spanTemp.textContent = "98°";

    return headerClass;
}

//appending to div header-container
const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());