document.addEventListener('DOMContentLoaded', () => {
const chooseBtn = document.querySelector('.choose');
const mainContaner = document.getElementById('mainContainer');
const image = document.querySelector('.responsive-image');
const restContent = document.querySelector('.rest-content');
const loadingScreen = document.querySelector('.loading-screen');

let chooseBtnId = chooseBtn.id;

chooseBtn.addEventListener('click', () => {
    if (chooseBtnId === '3d') {
        loadingScreen.style.animation = 'show 0.5s ease-in-out forwards';

        setTimeout(() => {
            mainContaner.classList.add('flex-display');
            image.style.animation = 'unSkew 1s ease-in-out forwards';
            restContent.style.animation = 'unSkew 1s ease-in-out forwards';
            chooseBtn.innerText = '2D';
            chooseBtn.setAttribute('id', '2d');
            chooseBtnId = '2d';
        }, 550);

        setTimeout(() => {
            loadingScreen.style.animation = 'hide 1s ease-in-out forwards';
        }, 2000);
    }

    if (chooseBtnId === '2d') {
        loadingScreen.style.animation = 'show 0.5s ease-in-out forwards';

        setTimeout(() => {
            mainContaner.classList.remove('flex-display');
            image.style.animation = 'skew 1s ease-in-out forwards';
            restContent.style.animation = 'skew 1s ease-in-out forwards';
            chooseBtn.innerText = '3D';
            chooseBtn.setAttribute('id', '3d');
            chooseBtnId = '3d';
        }, 450);

        setTimeout(() => {
            loadingScreen.style.animation = 'hide 0.5s ease-in-out forwards';
        }, 2000);
    }
});
});