
const changeBgBtn = document.getElementById('change-bg-btn');
const mainSection = document.querySelector('.main');

const backgrounds = [
    "url('images/Developer programmer-Программист-разработчик.jpeg')",
    "url('images/Exploring Professional Networks for CCNA Certification Updates and Discussions.jpeg')",
    "url('images/download.jpeg')"
];

let currentBg = 0;

changeBgBtn.addEventListener('click', () => {
    currentBg = (currentBg + 1) % backgrounds.length;
    mainSection.style.backgroundImage = backgrounds[currentBg];
});
