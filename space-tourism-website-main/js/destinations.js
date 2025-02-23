

const planetImg = document.getElementById('planet-img');
const planetName = document.getElementById('planet-name');
const planetInfo = document.getElementById('planet-info');
const planetDistance = document.getElementById('planet-distance');
const planetTraveltime = document.getElementById('planet-traveltime');

const buttons = document.querySelectorAll('.planet__list button');
const moonBtn = document.getElementById('moon-btn');
const marsBtn = document.getElementById('mars-btn');
const europaBtn = document.getElementById('europa-btn');
const titanBtn = document.getElementById('titan-btn');
const planets = ['Moon', 'Mars', 'Europa', 'Titan']


moonBtn.addEventListener('click', () => updateDestination('Moon'));
marsBtn.addEventListener('click', () => updateDestination('Mars'));
europaBtn.addEventListener('click', () => updateDestination('Europa'));
titanBtn.addEventListener('click', () => updateDestination('Titan'));
moonBtn.classList.add('active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

let currentPlanet = 'Moon';
updateDestination('Moon'); 
function updateDestination(planet) {
    const destination = window.destinationsData.find(dest => dest.name === planet);

    if(destination) {
        const currentIndex = planets.indexOf(currentPlanet);
        const newIndex = planets.indexOf(planet);

        if (newIndex > currentIndex) {
            planetImg.classList.add('swipe-left');
        } else if (newIndex < currentIndex) {
            planetImg.classList.add('swipe-right');
        }

        planetImg.src = destination.images.png;
        planetName.textContent = destination.name;
        planetInfo.textContent = destination.description;
        planetDistance.textContent = destination.distance;
        planetTraveltime.textContent = destination.travel;

        planetImg.addEventListener('animationend', () => {
            planetImg.classList.remove('swipe-right', 'swipe-left');
        }, { once: true });

        currentPlanet = planet;
    }
}