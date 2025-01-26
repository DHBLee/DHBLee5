const menuBtn = document.querySelectorAll('.menu-btn');
const closeBtn = document.querySelectorAll('.close-btn');
const mobileNav = document.querySelectorAll('.mobile__nav__explore, .mobile__nav__homepage');
console.log(mobileNav)
menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('boom pra!')
        mobileNav.forEach(nav => {
            console.log('pokemon');
            nav.classList.add('open');
        })
    })
})
closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileNav.forEach(nav => {
            nav.classList.remove('open');
        })
    })
})
const currentPath = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    let parentLink;
    if(link.parentElement.className === 'nav-li') {
        parentLink = link.parentElement;
        parentLink.classList.remove('active');
    }
    link.classList.remove('active');
    if (linkPath === currentPath) {
        console.log('blahed');
        if(parentLink) {
            parentLink.classList.add('active');
        }
        link.classList.add('active');
    }
});



let destinationsData = [];
let crewData = [];
let technologyData = [];


fetch('starter-code/data.json')
  .then(response => response.json())
  .then(data => {
    window.destinationsData = data.destinations; 
    window.crewData = data.crew;
    window.technologyData = data.technology
  })
  .catch(error => console.error('Error fetching data:', error));
