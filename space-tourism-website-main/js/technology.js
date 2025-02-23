const techButtons = document.querySelectorAll('.tech__option');

techButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked konayan');
        techButtons.forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
            btn.parentElement.classList.remove('activetech');
        });

        button.setAttribute('aria-selected', 'true');
        button.parentElement.classList.add('activetech');

        updateTechnology(button.id);
    });
});

const techTitle = document.getElementById('tech-title');
const techName = document.getElementById('tech-name');
const techInfo = document.getElementById('tech-info');
const techSource = document.getElementById('tech-source');
const techImg = document.getElementById('tech-img');

function updateTechnology(buttonId) {
    let tech;


    switch (buttonId) {
        case 'vehicle-btn':
            tech = 'Launch vehicle';
            break;
        case 'spaceport-btn':
            tech = 'Spaceport';
            break;
        case 'capsule-btn':
            tech = 'Space capsule';
            break;
        default:
            console.error('Unknown button ID:', buttonId);
            return;
    }

    const techMember = window.technologyData.find(dest => dest.name === tech);

    if (techMember) {
        techSource.srcset = techMember.images.portrait;
        techImg.src = techMember.images.landscape;
        techName.textContent = techMember.name;
        techInfo.textContent = techMember.description; 
        techTitle.textContent = techMember.role;
    }
}