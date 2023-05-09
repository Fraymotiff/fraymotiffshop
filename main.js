


  //ORTHER TRY

  const sliderImages = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];
const sliderDom = document.getElementById("mySlides");

let currentImage = 0;

function renderImages() {
    sliderImages.forEach((image) => {
        sliderDom.innerHTML += "<img src='" + image + "' />";
    });
}

function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
}

function showImage(image) {
    clearImages();
    document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
    renderImages();
    showImage(currentImage);
}

init();

let myBtn = document.querySelector("#prevButton");

myBtn.onclick = function() {
    const newImage = (currentImage + 1) % sliderImages.length;

    showImage(newImage);
}
let myBtn2 = document.querySelector("#nextButton");

myBtn2.onclick = function() {}
    const newImage = (currentImage + 1) % sliderImages.length;
    showImage(newImage);
const sliderImages = 
    "./image1.jpg"
    "./image2.jpg"
"./image3.jpg"    
const sliderDom = document.getElementById("");

let currentImage = 0;

function renderImages() {
    sliderImages.forEach((image) => {
        sliderDom.innerHTML += "<img src='" + image + "' />";
    });
}

function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
}

function showImage(image) {
    clearImages();
    document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
    renderImages();
    showImage(currentImage);
}

init();

let myBtn = document.querySelector("#prevButton");

myBtn.onclick = function() {
    const newImage = (currentImage + 1) % sliderImages.length;

    showImage(newImage);
}
let myBtn2 = document.querySelector("#nextButton");

myBtn2.onclick = function() {
    const newImage = (currentImage + 1) % sliderImages.length;
    showImage(newImage);
}

//slider

