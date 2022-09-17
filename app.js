// Header Section

const navList = document.querySelector(".nav-list");
const xBtn = document.querySelector(".fa-xmark");
const hamBtn = document.querySelector(".fa-bars");
const navListItem = document.querySelectorAll(".nav-list li");


xBtn.addEventListener('click', navClose);
hamBtn.addEventListener('click', navOpen);
navListItem.forEach(Item => {
    Item.addEventListener('click', navClose);
})

function navClose() {
    navList.style.right = "-100%";
}

function navOpen() {
    navList.style.right = "0";
}

// End Header Section



