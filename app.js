// Header Section

const navList = document.querySelector(".nav-list");
const xBtn = document.querySelector(".fa-xmark");
const hamBtn = document.querySelector(".fa-bars");
const navListItem = document.querySelectorAll(".nav-list li");
const navBar = document.querySelector(".nav-bar");


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

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 200) {
        navBar.style.backgroundColor = 'var(--dark-color1)';
    } else {
        navBar.style.backgroundColor = 'transparent';
    }
})

// End Header Section

// About Section

// Profile picture hover change effect
function hover(element) {
    element.setAttribute('src', './images/profile-smile.png')
}

function unhover(element) {
    element.setAttribute('src', './images/profile.png')
}

// End About Section



