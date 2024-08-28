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
    inicio: {
        texto: `En una noche lluviosa y brumosa, el investigador se encuentra frente a las imponentes puertas del Bohemian Club, un lugar envuelto en misterio y rumores de alta sociedad. Se rumorea que detrás de sus puertas se lleva a cabo una conspiración que podría cambiar el curso de la historia. Tu misión es infiltrarte en el club y descubrir la verdad.`,
        opciones: {
            a: {
                texto: 'Entrar sigilosamente',
                siguiente: 'entrada'
            },
            b: {
                texto: 'Disfrazarse',
                siguiente: 'disfraz'
            }
        }
    },
    
    entrada: {
        texto: `Decides entrar sigilosamente y te encuentras en un gran vestíbulo decorado con lujosos tapices. Desde aquí puedes ir a una sala de reuniones o explorar el sótano.`,
        opciones: {
            a: {
                texto: 'Ir a la sala de reuniones',
                siguiente: 'salaReuniones'
            },
            b: {
                texto: 'Explorar el sótano',
                siguiente: 'sonido'
            }
        }
    },

    disfraz: {
        texto: `Te decides a ponerte un disfraz de camarero para pasar desapercibido. Entras al club y te encuentras en una cocina bulliciosa. Desde aquí puedes ir a la sala de reuniones o al área de almacenamiento.`,
        opciones: {
            a: {
                texto: 'Ir a la sala de reuniones',
                siguiente: 'salaReuniones'
            },
            b: {
                texto: 'Ir al área de almacenamiento',
                siguiente: 'almacenamiento'
            }
        }
    },

    salaReuniones: {
        texto: `Llegas a una elegante sala de reuniones. Aquí ves a varios miembros del club en una conversación privada. Puedes intentar escuchar la conversación o buscar documentos.`,
        opciones: {
            a: {
                texto: 'Escuchar la conversación',
                siguiente: 'escuchar'
            },
            b: {
                texto: 'Buscar documentos',
                siguiente: 'documentos'
            }
        }
    },

    sonido: {
        texto: `Bajas al sótano y te encuentras con una serie de equipos electrónicos y un ruido constante de ventiladores. Parece que hay algo sospechoso. Puedes revisar los equipos o salir del sótano.`,
        opciones: {
            a: {
                texto: 'Revisar los equipos',
                siguiente: 'equipos'
            },
            b: {
                texto: 'Salir del sótano',
                siguiente: 'salirSotano'
            }
        }
    },

    almacenamiento: {
        texto: `En el área de almacenamiento encuentras cajas apiladas y documentos dispersos. Puedes buscar entre las cajas o examinar los documentos.`,
        opciones: {
            a: {
                texto: 'Buscar entre las cajas',
                siguiente: 'cajas'
            },
            b: {
                texto: 'Examinar los documentos',
                siguiente: 'documentos'
            }
        }
    },

    escuchar: {
        texto: `Escuchas fragmentos de una conversación que mencionan un "plan secreto" y una "reunión clave". No obtienes mucha información adicional, pero parece que hay algo importante que se está planeando.`,
        opciones: {
            a: {
                texto: 'Seguir investigando',
                siguiente: 'investigar'
            },
            b: {
                texto: 'Volver al vestíbulo',
                siguiente: 'entrada'
            }
        }
    },

    documentos: {
        texto: `Encuentras unos documentos en la sala de reuniones que hablan sobre una reunión secreta y una operación encubierta. Parece que tienes una pista importante.`,
        opciones: {
            a: {
                texto: 'Seguir los documentos',
                siguiente: 'seguirDocumentos'
            },
            b: {
                texto: 'Volver al vestíbulo',
                siguiente: 'entrada'
            }
        }
    },

    equipos: {
        texto: `Entre los equipos encuentras un dispositivo de grabación en funcionamiento. Parece que están grabando conversaciones. Puedes intentar detener la grabación o seguir investigando.`,
        opciones: {
            a: {
                texto: 'Detener la grabación',
                siguiente: 'detenerGrabacion'
            },
            b: {
                texto: 'Seguir investigando',
                siguiente: 'investigar'
            }
        }
    },

    salirSotano: {
        texto: `Decides salir del sótano y vuelves al vestíbulo. Parece que has perdido la oportunidad de descubrir algo importante en el sótano.`,
        opciones: {
            a: {
                texto: 'Ir a la sala de reuniones',
                siguiente: 'salaReuniones'
            },
            b: {
                texto: 'Ir al área de almacenamiento',
                siguiente: 'almacenamiento'
            }
        }
    },

    cajas: {
        texto: `En las cajas encuentras algunos objetos y documentos viejos, pero nada de valor. Parece que los documentos importantes están en otro lugar.`,
        opciones: {
            a: {
                texto: 'Volver al área de almacenamiento',
                siguiente: 'almacenamiento'
            },
            b: {
                texto: 'Ir a la sala de reuniones',
                siguiente: 'salaReuniones'
            }
        }
    },

    investigar: {
        texto: `Decides seguir investigando y encuentras una habitación secreta en el sótano. Parece que aquí están llevando a cabo la conspiración. Puedes intentar entrar a la habitación o regresar al vestíbulo.`,
        opciones: {
            a: {
                texto: 'Entrar a la habitación secreta',
                siguiente: 'habitaciónSecreta'
            },
            b: {
                texto: 'Regresar al vestíbulo',
                siguiente: 'entrada'
            }
        }
    },

    seguirDocumentos: {
        texto: `Sigues los documentos y descubres que están relacionados con una reunión secreta en la noche. Tienes la dirección y la hora de la reunión. Parece que has descubierto una pista clave.`,
        opciones: {
            a: {
                texto: 'Ir a la reunión',
                siguiente: 'reunion'
            },
            b: {
                texto: 'Regresar al vestíbulo',
                siguiente: 'entrada'
            }
        }
    },

    detenerGrabacion: {
        texto: `Decides detener la grabación y encuentras información importante sobre una conspiración. Parece que tienes pruebas suficientes para llevar a cabo una denuncia.`,
        opciones: {
            a: {
                texto: 'Regresar al vestíbulo',
                siguiente: 'entrada'
            },
            b: {
                texto: 'Volver a revisar los documentos',
                siguiente: 'documentos'
            }
        }
    },

    habitacionSecreta: {
        texto: `En la habitación secreta encuentras a varios miembros del club discutiendo planes. Tienes la oportunidad de escuchar su conversación o tomar fotos como evidencia.`,
        opciones: {
            a: {
                texto: 'Escuchar la conversación',
                siguiente: 'escuchar'
            },
            b: {
                texto: 'Tomar fotos',
                siguiente: 'fotos'
            }
        }
    },

    reunion: {
        texto: `Asistes a la reunión y descubres detalles importantes sobre la conspiración. Has reunido suficiente evidencia para resolver el caso.`,
        opciones: {
            a: {
                texto: 'Denunciar la conspiración',
                siguiente: 'denunciar'
            },
            b: {
                texto: 'Continuar investigando',
                siguiente: 'investigar'
            }
        }
    },

    fotos: {
        texto: `Tomas fotos y tienes evidencia sólida de la conspiración. Ahora puedes proceder a hacer una denuncia.`,
        opciones: {
            a: {
                texto: 'Denunciar la conspiración',
                siguiente: 'denunciar'
            },
            b: {
                texto: 'Continuar investigando',
                siguiente: 'investigar'
            }
        }
    },

    denunciar: {
        texto: `Has denunciado la conspiración y la verdad sale a la luz. La conspiración es desmantelada y el caso se resuelve exitosamente. ¡Felicidades!`,
        opciones: {
            a: {
                texto: 'Volver al inicio',
                siguiente: 'inicio'
            }
        }
    }
};



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

