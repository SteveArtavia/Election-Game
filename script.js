import story from './story.js';

// Starting Game

const intro = document.getElementById('intro');

const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');

const playScreen = document.getElementById('playScreen');
const loadingScreen = document.getElementById('loadingScreen');
const playerNameInput = document.getElementById('nameInput');

let playerName = '';

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('musicaFondo');
    music.currentTime = 0;
    music.loop = true;
    music.play();

    intro.style.display = 'block';
    intro.className = 'text-center mt-4 animate__animated animate__fadeIn animate__slower'

    startScreen.style.display = 'none';

    setTimeout(() => {
        intro.className = 'text-center mt-4 animate__animated animate__fadeOut animate__slower'
    }, 2500);

    setTimeout(() => {
        startScreen.style.display = 'block'
    }, 5000);

});

const startGame = () => {

    const music = document.getElementById('musicaFondo');
    music.currentTime = 0;
    music.loop = true;
    music.play();

    loadingScreen.style.display = 'block'
    setTimeout(() => {
        playScreen.style.display = 'block';
        loadingScreen.style.display = 'none'

    }, 3000);

    startScreen.style.display = 'none';

    playerName = playerNameInput.value;

    renderStory(playerName);
    
};

startBtn.addEventListener('click', () => {
    if(playerNameInput.value === ''){
        const validationMessage = document.getElementById('validationMessage');
        validationMessage.textContent = 'Debes ingresar un nombre';
    } else {
        startGame();
    }
});

// Game Logic

let seccionActual = 'inicio';

const displayTexto = document.getElementById('displayTexto');
const optionsContainer = document.getElementById('optionsContainer');

const renderStory = () => {
    const section = story[seccionActual];
    const mensaje = section.texto.replace(/{playerName}/g, playerName);
    displayTexto.innerHTML = mensaje;

    if(seccionActual ==="entrada"){
        const sonidoPuerta = document.getElementById('sonidoPuerta');
        sonidoPuerta.currentTime = 0;
        sonidoPuerta.play();
    }

    optionsContainer.innerHTML = '';

    if(seccionActual === "verificarCodigo"){
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'codigoInput';
        optionsContainer.appendChild(input);

        const btn = document.createElement('button');
        btn.textContent = 'Verificar';
        optionsContainer.appendChild(btn);
        btn.addEventListener('click', () => {
            const codigo = document.getElementById('codigoInput').value;
            if(codigo === '0094'){
                seccionActual = 'puertaAbierta';
            }else{
                alert('Codigo incorrecto, intenta de nuevo');
            }
            renderStory();
        })
    }

    for (const key in section.opciones){
        const opcion = section.opciones[key];
        const button = document.createElement('button');
        button.textContent = opcion.texto;
        button.addEventListener('click', () => {
            const sound = document.getElementById('buttonSound');
            sound.currentTime = 0;
            sound.play();

            seccionActual = opcion.siguiente;
            renderStory();
        });
        optionsContainer.appendChild(button);
    }

}

renderStory();
export default playerName;
