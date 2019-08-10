// Your code goes here

let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('mouseover', () => {
    logoHeading.style.backgroundColor = 'blue';
})

let anchor1 = document.querySelector(".nav-link");
anchor1.addEventListener('keydown', () => {
    anchor1.style.backgroundColor = 'green';
})

let anchor2 = document.querySelectorAll(".nav-link")[1];
anchor2.addEventListener('wheel', () => {
    anchor2.style.backgroundColor = 'red';
})

let anchor3 = document.querySelectorAll(".nav-link")[2];
anchor3.addEventListener('drag', () => {
    anchor3.style.backgroundColor = 'yellow';
})

let anchor4 = document.querySelectorAll(".nav-link")[3];
anchor4.addEventListener('keyup', () => {
    anchor4.style.backgroundColor = 'purple';
})

let introHeader = document.querySelector(".intro");

let funBusPic = document.querySelector("header img");
funBusPic.addEventListener('dblclick', () => {
    introHeader.removeChild(funBusPic);
})

let destinationText = document.querySelector(".content-destination p");
destinationText.addEventListener('mouseup', () => {
    destinationText.style.backgroundColor = 'blue';
})

let islandText = document.querySelectorAll(".destination p")[2];
islandText.addEventListener('copy', () => {
    islandText.style.backgroundColor = 'teal';
})

let mountainText = document.querySelectorAll(".destination p")[1];
mountainText.addEventListener('cut', () => {
    mountainText.style.backgroundColor = 'orange';
})

function makeBackgroundPurple (event){
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = "purple";
}

let button1 = document.querySelector(".btn");

button1.addEventListener('click', makeBackgroundPurple);

let contentPick = document.querySelector(".content-pick");

contentPick.addEventListener('click', () => {
    contentPick.style.backgroundColor = 'yellow';
})

anchor1.addEventListener('click', (event) => {
    event.preventDefault();
})

anchor2.addEventListener('click', (event) => {
    event.preventDefault();
})

anchor3.addEventListener('click', (event) => {
    event.preventDefault();
})

anchor4.addEventListener('click', (event) => {
    event.preventDefault();
})

