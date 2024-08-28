// Starting Game

const intro = document.getElementById('intro');

const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');

const playScreen = document.getElementById('playScreen');
const loadingScreen = document.getElementById('loadingScreen');
const playerName = document.getElementById('nameInput');

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

    renderStory(playerName.value)
    
};

startBtn.addEventListener('click', () => {
    if(playerName.value === ''){
        const validationMessage = document.getElementById('validationMessage');
        validationMessage.textContent = 'Debes ingresar un nombre';
    } else {
        startGame();
    }
});

/////////////////////////////////////////////////////////////
// Game Logic

const story = {
  // Nodo Inicial
  inicio: {
    texto: "Eres un investigador privado que ha recibido una pista sobre una peligrosa conspiración en un lugar conocido como El Bohemian Club. Llegas al lugar bajo la oscuridad de la noche. La atmósfera es tensa, y sabes que cada paso podría llevarte más cerca de la verdad... o del peligro. ¿Qué haces primero?",
    opciones: {
      a: { texto: "Entrar al club por la puerta principal", siguiente: "entrarPrincipal" },
      b: { texto: "Buscar una entrada trasera", siguiente: "buscarTrasera" },
      c: { texto: "Observar desde la distancia", siguiente: "observarDistancia" }
    }
  },

  // Entrar por la puerta principal
  entrarPrincipal: {
    texto: "Decides entrar por la puerta principal, tratando de parecer lo más natural posible. Al cruzar el umbral, eres recibido por una sala lujosamente decorada. Sin embargo, un guardia se aproxima hacia ti con una mirada sospechosa. ¿Qué haces?",
    opciones: {
      a: { texto: "Inventar una historia convincente", siguiente: "inventarHistoria" },
      b: { texto: "Escapar hacia una sala lateral", siguiente: "escaparSalaLateral" },
      c: { texto: "Enfrentar al guardia", siguiente: "enfrentarGuardia" }
    }
  },

  // Buscar una entrada trasera
  buscarTrasera: {
    texto: "Rodeas el edificio en busca de una entrada trasera. Finalmente, encuentras una puerta pequeña y poco vigilada. La abres con cautela y te encuentras en un oscuro pasillo subterráneo. Oyes voces a lo lejos. ¿Qué haces?",
    opciones: {
      a: { texto: "Seguir las voces", siguiente: "seguirVoces" },
      b: { texto: "Esconderte en las sombras", siguiente: "esconderSombras" },
      c: { texto: "Intentar encontrar un mapa del lugar", siguiente: "encontrarMapa" }
    }
  },

  // Observar desde la distancia
  observarDistancia: {
    texto: "Decides mantenerte oculto y observar desde la distancia. Desde las sombras, ves a varios hombres poderosos entrar en el club, sus rostros son conocidos en las altas esferas. Alguien menciona 'el ritual'. Sabes que necesitas acercarte más. ¿Qué haces?",
    opciones: {
      a: { texto: "Acercarte sigilosamente", siguiente: "acercarSigilosamente" },
      b: { texto: "Buscar otra manera de infiltrarte", siguiente: "infiltrarteOtra" },
      c: { texto: "Seguir observando", siguiente: "seguirObservando" }
    }
  },

  // Nodo después de "Entrar por la puerta principal"
  inventarHistoria: {
    texto: "Con nervios de acero, inventas una historia sobre ser un nuevo miembro invitado por uno de los socios. El guardia parece dudoso pero finalmente te deja pasar. Ahora dentro, te encuentras en un salón de reuniones donde los líderes están discutiendo algo secreto. ¿Qué haces?",
    opciones: {
      a: { texto: "Escuchar la conversación", siguiente: "escucharConversacion" },
      b: { texto: "Tomar una copa y mezclarse", siguiente: "mezclarse" },
      c: { texto: "Buscar documentos importantes", siguiente: "buscarDocumentos" }
    }
  },

  escaparSalaLateral: {
    texto: "Escapas rápidamente hacia una sala lateral, cerrando la puerta tras de ti. Dentro, encuentras una biblioteca llena de libros antiguos y un escritorio con papeles desordenados. Algo en estos documentos llama tu atención. ¿Qué haces?",
    opciones: {
      a: { texto: "Revisar los documentos", siguiente: "revisarDocumentos" },
      b: { texto: "Buscar una salida alternativa", siguiente: "buscarSalida" },
      c: { texto: "Esconderte en la biblioteca", siguiente: "esconderBiblioteca" }
    }
  },

  enfrentarGuardia: {
    texto: "Decides enfrentar al guardia. Con firmeza en tu voz, le preguntas si sabe lo que realmente está sucediendo aquí. El guardia parece desconcertado, pero su mano se mueve hacia su radio. La situación se vuelve crítica. ¿Qué haces?",
    opciones: {
      a: { texto: "Reducir al guardia rápidamente", siguiente: "reducirGuardia" },
      b: { texto: "Escapar mientras puedes", siguiente: "escaparGuardia" },
      c: { texto: "Intentar persuadirlo para que te deje pasar", siguiente: "persuadirGuardia" }
    }
  },

  // Nodo después de "Buscar una entrada trasera"
  seguirVoces: {
    texto: "Sigues las voces a lo largo del pasillo, hasta llegar a una sala iluminada tenuemente. Desde tu escondite, ves a un grupo de personas realizando lo que parece ser un ritual secreto. Algo oscuro está en juego. ¿Qué haces?",
    opciones: {
      a: { texto: "Interrumpir el ritual", siguiente: "interrumpirRitual" },
      b: { texto: "Observar y grabar en secreto", siguiente: "grabarSecreto" },
      c: { texto: "Buscar evidencia en otro lugar", siguiente: "buscarEvidencia" }
    }
  },

  esconderSombras: {
    texto: "Te escondes en las sombras mientras las voces se acercan. Escuchas fragmentos de conversación sobre un plan inminente que podría cambiar el destino de muchas personas. La conspiración es más grande de lo que pensabas. ¿Qué haces?",
    opciones: {
      a: { texto: "Seguir escuchando", siguiente: "seguirEscuchando" },
      b: { texto: "Intentar interceptar a los conspiradores", siguiente: "interceptarConspiradores" },
      c: { texto: "Salir y buscar más pistas", siguiente: "buscarPistas" }
    }
  },

  encontrarMapa: {
    texto: "Buscas un mapa del lugar y lo encuentras en una pared. El Bohemian Club es mucho más grande de lo que imaginabas, con túneles subterráneos y cámaras ocultas. Sabes que cada segundo cuenta. ¿Qué haces?",
    opciones: {
      a: { texto: "Dirigirte a las cámaras ocultas", siguiente: "camaraOculta" },
      b: { texto: "Seguir explorando los túneles", siguiente: "explorarTuneles" },
      c: { texto: "Salir y buscar refuerzos", siguiente: "buscarRefuerzos" }
    }
  },

  // Nodo Final (Ejemplo de Finales)
  finalExitoso: {
    texto: "Después de sortear innumerables peligros, logras descubrir la verdad sobre la conspiración y alertar a las autoridades. El Bohemian Club es desmantelado y te conviertes en un héroe. Sin embargo, algunas preguntas quedan sin respuesta. Fin.",
    opciones: {}
  },

  finalDesastroso: {
    texto: "La conspiración se revela como más grande y peligrosa de lo que esperabas. Eres capturado antes de poder exponer la verdad. Tus últimos pensamientos son de arrepentimiento por no haber sido más cuidadoso. Fin.",
    opciones: {}
  },

  finalMisterioso: {
    texto: "Escapas con información vital, pero algo no cuadra. Cuando vuelves a revisar tus notas, te das cuenta de que la evidencia ha desaparecido. ¿Acaso todo fue una ilusión, o el Bohemian Club tiene más poder del que imaginabas? Fin.",
    opciones: {}
  }



let seccionActual = 'inicio';

const displayTexto = document.getElementById('displayTexto');
const optionsContainer = document.getElementById('optionsContainer');

const renderStory = () => {
    const section = story[seccionActual];
    const mensaje = section.texto;
    displayTexto.innerHTML = mensaje;

    if(seccionActual ==="entrada"){
        const sonidoPuerta = document.getElementById('sonidoPuerta');
        sonidoPuerta.currentTime = 0;
        sonidoPuerta.play();
    }

    optionsContainer.innerHTML = '';

    for (const key in section.opciones){
        const opcion = section.opciones[key];
        const button = document.createElement('button');
        button.textContent = opcion.texto;
        button.addEventListener('click', () => {
            const sound = document.getElementById('buttonSound');
            sound.currentTime =0;
            sound.play();

            seccionActual = opcion.siguiente;
            renderStory();
        });
        optionsContainer.appendChild(button);
    }

}

renderStory();

