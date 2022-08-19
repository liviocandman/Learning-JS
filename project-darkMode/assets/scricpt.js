const button = document.getElementById('changeMode');
button.addEventListener('click', selectMode);

const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode';

function selectMode(){
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light";
    const darkMode = "Dark"
    
    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode;
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode;
}
