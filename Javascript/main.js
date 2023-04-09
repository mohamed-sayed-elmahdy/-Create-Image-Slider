//Get Slider Items | Array.form[ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

    // Create The LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false
    }
    else {
        currentSlide++;
        theChecker()
    }

}

// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false
    }
    else {
        currentSlide--;
        theChecker()
    }

}

// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    // check if current slide is the first 
    if (currentSlide == 1) {
        prevButton.classList.add("disabled");
    }
    else {
        prevButton.classList.remove("disabled");
    }
    // check if current slide is the last
    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");
    }
    else {
        nextButton.classList.remove("disabled");
    }


}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });
}




// Get Slider items - Array from [ES6 feature]
// var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// // Get Number of slides
// var slidesCount = sliderImages.length;
// // Set current slide
// var currentSlide = 1;
// // Slide Number Element
// var slideNumber = document.getElementById("slide-number");
// //Previous and next Buttons
// var prevButton = document.getElementById("prev");
// var nextButton = document.getElementById("next");
// // Create The main Ul Element
// var paginationElement = document.createElement("ul");
// //Set Id for Ul Element
// paginationElement.setAttribute('id', 'pagination-ul');

// // Create list items based on slides count
// for (var i = 1; i <= slidesCount; i++) {
//     //Craete The Li element
//     var paginationElementitems = document.createElement("li");
//     //Set custom Attribute for Ul Element
//     paginationElementitems.setAttribute("data-index", i);
//     // Set item content
//     paginationElementitems.appendChild(document.createTextNode(i));
//     // Append items to the main Ul list
//     paginationElement.appendChild(paginationElementitems);

// }

// // Handle Click on Previous and next Buttons
// prevButton.onclick = PrevSlide;
// nextButton.onclick = nextSlide;

// // Get The new Created Ul
// var paginationCreatedUl = document.getElementById("pagination-ul");
// // Get Slider items - Array from [ES6 feature]
// var paginationbullets = Array.from(document.querySelectorAll("#pagination-ul li"));
// // Add The Created Ul Element to The Page
// document.getElementById("indicators").appendChild(paginationElement);



// // Trigger The Checker Function
// theChecker();

// // Next Slide Function
// function nextSlide() {
//     console.log(++currentSlide);
// }
// // prev Slide Function
// function PrevSlide() {
//     --currentSlide;
// }
// // Create The checker function
// function theChecker() {
//     // Set the slide number
//     slideNumber.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);

//     // set Active Class On Current Slide
//     sliderImages[currentSlide - 1].classList.add('active');
//     // Set Active class on current pagination
//     paginationElement.children[currentSlide - 1].classList.add('active');
//     removeActive();
// }
// // Remove all Active Classes from Images and Bullets
// function removeActive() {
//     // remove Active Class from all Slide
//     sliderImages.forEach(function (e) {
//         e.classList.remove('active');
//     })
//     // remove Active class from all pagination
//     paginationbullets.forEach(function (bullet) {
//         bullet.classList.remove('active');
//     })
// }