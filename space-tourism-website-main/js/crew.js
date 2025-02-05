


const crewImg = document.getElementById('crew-img');
const crewName = document.getElementById('crew-name');
const crewTitle = document.getElementById('crew-title');
const crewInfo = document.getElementById('crew-info');

const douglasBtn = document.getElementById('douglas-btn');
const markBtn = document.getElementById('mark-btn');
const victorBtn = document.getElementById('victor-btn');
const anoushehBtn = document.getElementById('anousheh-btn');


douglasBtn.addEventListener('click', () => updateCrew('Douglas Hurley', douglasBtn));
markBtn.addEventListener('click', () => updateCrew('Mark Shuttleworth', markBtn));
victorBtn.addEventListener('click', () => updateCrew('Victor Glover', victorBtn));
anoushehBtn.addEventListener('click', () => updateCrew('Anousheh Ansari', anoushehBtn));



function updateCrew(crew, clickedButton) {
    const crewMember = window.crewData.find(dest => dest.name === crew);

    if(crewMember) {

        crewImg.src = crewMember.images.png;
        crewName.textContent = crewMember.name;
        crewInfo.textContent = crewMember.bio;
        crewTitle.textContent = crewMember.role;

        const buttons = [douglasBtn, markBtn, victorBtn, anoushehBtn];
        buttons.forEach(button => {
            button.setAttribute('aria-selected', 'false');
        });

        clickedButton.setAttribute('aria-selected', 'true');
    }
}