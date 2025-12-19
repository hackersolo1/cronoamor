document.addEventListener('DOMContentLoaded', () => {
const chooseBtn = document.querySelector('.choose');
const mainContaner = document.getElementById('mainContainer');
const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.responsive-image');
const restContent = document.querySelector('.rest-content');
const textContainer = document.querySelector('.text-container');
const loadingScreen = document.querySelector('.loading-screen');

let chooseBtnId = chooseBtn.id;

chooseBtn.addEventListener('click', () => {
    if (chooseBtnId === '3d') {
        loadingScreen.style.animation = 'show 0.5s ease-in-out forwards';

        setTimeout(() => {
            mainContaner.classList.add('flex-display');
            textContainer.style.animation = 'widthAdjust 1s ease-in-out forwards';;
            imageContainer.style.animation = 'toCenter 1s ease-in-out forwards';
            image.style.animation = 'unSkew 1s ease-in-out forwards';
            restContent.style.animation = 'unSkew 1s ease-in-out forwards';
            chooseBtn.innerText = '2D';
            chooseBtn.setAttribute('id', '2d');
            chooseBtnId = '2d';
            image.style.boxShadow = 'none';
            textContainer.style.boxShadow = 'none';
        }, 550);

        setTimeout(() => {
            loadingScreen.style.animation = 'hide 0.5s ease-in-out forwards';
        }, 2000);
    }

    if (chooseBtnId === '2d') {
        loadingScreen.style.animation = 'show 0.5s ease-in-out forwards';

        setTimeout(() => {
            mainContaner.classList.remove('flex-display');
            textContainer.style.animation = 'widthReAdjust 1s ease-in-out forwards';
            imageContainer.style.animation = 'toEnd 1s ease-in-out forwards';
            image.style.animation = 'skew 1s ease-in-out forwards';
            restContent.style.animation = 'skew 1s ease-in-out forwards';
            chooseBtn.innerText = '3D';
            chooseBtn.setAttribute('id', '3d');
            chooseBtnId = '3d';
            image.style.boxShadow = '11px 11px 0px rgb(0, 0, 0)';
            textContainer.style.boxShadow = '11px 11px 0px rgb(0, 0, 0)';
        }, 450);

        setTimeout(() => {
            loadingScreen.style.animation = 'hide 0.5s ease-in-out forwards';
        }, 2000);
    }
});
});