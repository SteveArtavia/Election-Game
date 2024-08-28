// Starting Game

const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');

const playScreen = document.getElementById('playScreen');
const loadingScreen = document.getElementById('loadingScreen');
const playerName = document.getElementById('nameInput');

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
                siguiente: 'exploracion'
            },
            b: {
                texto: 'Disfrazarse',
                siguiente: 'disfraz'
            }
        }
    },
    
    exploracion: {
        texto: `Decides entrar sigilosamente al Bohemian Club. Tras moverte con cautela, te encuentras en un pasillo oscuro. Al final del pasillo, escuchas un murmullo a lo lejos. También ves una puerta a la izquierda que parece llevar a un salón de eventos.`,

        opciones: {
            a: {
                texto: 'Investigar el murmullo',
                siguiente: 'investigacionMurmullo'
            },
            b: {
                texto: 'Entrar en el salón de eventos',
                siguiente: 'salonEventos'
            }
        }
    },
    
    disfraz: {
        texto: `Con tu disfraz puesto, te mezclas con la multitud en el club. Observas a los asistentes que parecen estar discutiendo algo en secreto. Notas que algunos se dirigen a una habitación privada al fondo.`,

        opciones: {
            a: {
                texto: 'Unirte a la conversación',
                siguiente: 'conversacion'
            },
            b: {
                texto: 'Seguir observando desde la distancia',
                siguiente: 'observando'
            }
        }
    },

    investigacionMurmullo: {
        texto: `Sigues el sonido del murmullo y llegas a una pequeña sala donde ves a un grupo de personas en una conversación secreta. Al parecer, están discutiendo sobre un plan para hacer desaparecer unos documentos importantes.`,

        opciones: {
            a: {
                texto: 'Escuchar la conversación',
                siguiente: 'escucharConversacion'
            },
            b: {
                texto: 'Intentar robar los documentos',
                siguiente: 'robarDocumentos'
            }
        }
    },
    
    salonEventos: {
        texto: `Entras en el salón de eventos y ves una fiesta en pleno apogeo. La gente está bailando y conversando, y parece que la atención está puesta en un escenario donde hay una presentación especial.`,

        opciones: {
            a: {
                texto: 'Investigar el escenario',
                siguiente: 'investigarEscenario'
            },
            b: {
                texto: 'Buscar entre los invitados',
                siguiente: 'buscarInvitados'
            }
        }
    },

    conversacion: {
        texto: `Decides unirte a la conversación de los asistentes. La conversación gira en torno a un misterioso objeto que se ha perdido y que es crucial para el plan que están discutiendo. La conversación sugiere que el objeto está escondido en el club.`,

        opciones: {
            a: {
                texto: 'Preguntar sobre el objeto',
                siguiente: 'preguntarObjeto'
            },
            b: {
                texto: 'Buscar el objeto en el club',
                siguiente: 'buscarObjeto'
            }
        }
    },

    observando: {
        texto: `Continúas observando desde la distancia. Notas que algunos de los asistentes parecen estar más nerviosos y empiezan a actuar de manera sospechosa. Podría ser una buena idea acercarte a ellos o buscar algún indicio en la habitación.`,

        opciones: {
            a: {
                texto: 'Acercarte a los sospechosos',
                siguiente: 'acercarteSospechosos'
            },
            b: {
                texto: 'Buscar indicios en la habitación',
                siguiente: 'buscarIndicios'
            }
        }
    },

    escucharConversacion: {
        texto: `Escuchas atentamente la conversación. Los participantes están hablando sobre un código secreto que puede desbloquear una caja fuerte donde guardan los documentos. El código es una combinación de números que sólo algunos conocen.`,

        opciones: {
            a: {
                texto: 'Tratar de obtener el código',
                siguiente: 'obtenerCodigo'
            },
            b: {
                texto: 'Buscar la caja fuerte',
                siguiente: 'buscarCajaFuerte'
            }
        }
    },

    robarDocumentos: {
        texto: `Intentas robar los documentos, pero un miembro del personal te sorprende. Tienes que decidir si luchar por escapar o rendirte y tratar de negociar.`,

        opciones: {
            a: {
                texto: 'Luchar por escapar',
                siguiente: 'lucharEscapar'
            },
            b: {
                texto: 'Negociar con el miembro del personal',
                siguiente: 'negociarPersonal'
            }
        }
    },

    investigarEscenario: {
        texto: `Investigas el escenario y descubres que hay una caja oculta debajo del escenario. Parece que es un buen lugar para buscar pistas.`,

        opciones: {
            a: {
                texto: 'Abrir la caja',
                siguiente: 'abrirCaja'
            },
            b: {
                texto: 'Buscar entre los decorados',
                siguiente: 'buscarDecorados'
            }
        }
    },

    buscarInvitados: {
        texto: `Buscas entre los invitados y encuentras a un grupo que parece estar hablando sobre la seguridad de la sala privada. Podría ser útil unirte a la conversación.`,

        opciones: {
            a: {
                texto: 'Unirte a la conversación',
                siguiente: 'unirseConversacion'
            },
            b: {
                texto: 'Continuar buscando en el salón',
                siguiente: 'buscarSalon'
            }
        }
    },

    preguntarObjeto: {
        texto: `Preguntas sobre el objeto a los asistentes. Al principio parecen reacios a hablar, pero eventualmente te dicen que está escondido en una caja fuerte detrás de una pintura.`,

        opciones: {
            a: {
                texto: 'Buscar la pintura',
                siguiente: 'buscarPintura'
            },
            b: {
                texto: 'Investigar la caja fuerte',
                siguiente: 'investigarCajaFuerte'
            }
        }
    },

    buscarObjeto: {
        texto: `Decides buscar el objeto en el club. Después de una búsqueda exhaustiva, encuentras una caja fuerte en una sala oculta.`,

        opciones: {
            a: {
                texto: 'Tratar de abrir la caja fuerte',
                siguiente: 'abrirCajaFuerte'
            },
            b: {
                texto: 'Buscar el código para abrir la caja fuerte',
                siguiente: 'buscarCodigoCajaFuerte'
            }
        }
    },

    acercarteSospechosos: {
        texto: `Te acercas a los sospechosos y logras escuchar parte de su conversación. Hablan sobre un punto de entrega secreto en el club donde realizarán una transacción.`,

        opciones: {
            a: {
                texto: 'Seguirlos al punto de entrega',
                siguiente: 'seguirPuntoEntrega'
            },
            b: {
                texto: 'Informar a las autoridades',
                siguiente: 'informarAutoridades'
            }
        }
    },

    buscarIndicios: {
        texto: `Buscas indicios en la habitación y encuentras una nota con información sobre el punto de entrega secreto. La nota también menciona una hora específica para la transacción.`,

        opciones: {
            a: {
                texto: 'Ir al punto de entrega',
                siguiente: 'irPuntoEntrega'
            },
            b: {
                texto: 'Esperar y observar',
                siguiente: 'esperarObservar'
            }
        }
    },

    obtenerCodigo: {
        texto: `Tratas de obtener el código para la caja fuerte. Algunos asistentes se dan cuenta de que estás interesado y empiezan a sospechar. Debes actuar rápido.`,

        opciones: {
            a: {
                texto: 'Intentar obtener el código de forma discreta',
                siguiente: 'obtenerCodigoDiscreto'
            },
            b: {
                texto: 'Buscar otra manera de abrir la caja fuerte',
                siguiente: 'buscarManeraCajaFuerte'
            }
        }
    },

    buscarCajaFuerte: {
        texto: `Buscas la caja fuerte en la sala y la encuentras detrás de un armario. Está bien escondida y parece que requiere un código para abrirla.`,

        opciones: {
            a: {
                texto: 'Intentar forzar la caja fuerte',
                siguiente: 'forzarCajaFuerte'
            },
            b: {
                texto: 'Buscar el código en la sala',
                siguiente: 'buscarCodigoSala'
            }
        }
    },

    lucharEscapar: {
        texto: `Decides luchar para escapar. La confrontación es intensa, pero logras salir con algunos documentos importantes en tu poder. La misión es un éxito parcial.`,

        opciones: {
            a: {
                texto: 'Investigar los documentos',
                siguiente: 'investigarDocumentos'
            },
            b: {
                texto: 'Informar a las autoridades',
                siguiente: 'informarAutoridades'
            }
        }
    },

    negociarPersonal: {
        texto: `Negocias con el miembro del personal y logras convencerlo de que te deje ir. Mantienes los documentos, pero el personal ahora está más alerta.`,

        opciones: {
            a: {
                texto: 'Escapar rápidamente',
                siguiente: 'escaparRapido'
            },
            b: {
                texto: 'Buscar un escondite temporal',
                siguiente: 'esconderte'
            }
        }
    },

    abrirCaja: {
        texto: `Abres la caja y encuentras una serie de documentos importantes que parecen ser clave para el misterio que estás investigando.`,

        opciones: {
            a: {
                texto: 'Leer los documentos',
                siguiente: 'leerDocumentos'
            },
            b: {
                texto: 'Llevar los documentos al investigador jefe',
                siguiente: 'llevarInvestigador'
            }
        }
    },

    buscarDecorados: {
        texto: `Buscas entre los decorados y encuentras una pista que te lleva a una habitación oculta. En esta habitación encuentras más pistas sobre la conspiración.`,

        opciones: {
            a: {
                texto: 'Explorar la habitación oculta',
                siguiente: 'explorarHabitacion'
            },
            b: {
                texto: 'Volver al salón principal',
                siguiente: 'volverSalonPrincipal'
            }
        }
    },

    buscarPintura: {
        texto: `Buscas la pintura mencionada y encuentras una caja fuerte escondida detrás de ella. La caja fuerte parece tener un mecanismo de apertura complicado.`,

        opciones: {
            a: {
                texto: 'Intentar abrir la caja fuerte',
                siguiente: 'abrirCajaFuerte'
            },
            b: {
                texto: 'Buscar el código para abrirla',
                siguiente: 'buscarCodigoCajaFuerte'
            }
        }
    },

    investigarCajaFuerte: {
        texto: `Investigas la caja fuerte y encuentras que tiene un código. La combinación parece estar en un libro antiguo en la biblioteca del club.`,

        opciones: {
            a: {
                texto: 'Buscar en la biblioteca',
                siguiente: 'buscarBiblioteca'
            },
            b: {
                texto: 'Intentar abrir la caja fuerte sin el código',
                siguiente: 'abrirSinCodigo'
            }
        }
    },

    abrirCajaFuerte: {
        texto: `Intentas abrir la caja fuerte. Después de algunos intentos fallidos, finalmente logras abrirla y encuentras documentos cruciales que revelan la verdad detrás de la conspiración.`,

        opciones: {
            a: {
                texto: 'Leer los documentos',
                siguiente: 'leerDocumentos'
            },
            b: {
                texto: 'Salir rápidamente del club',
                siguiente: 'salirClub'
            }
        }
    },

    buscarCodigoCajaFuerte: {
        texto: `Buscas el código para abrir la caja fuerte. Después de una exhaustiva búsqueda, encuentras una nota con el código en un libro antiguo.`,

        opciones: {
            a: {
                texto: 'Usar el código para abrir la caja fuerte',
                siguiente: 'abrirCajaFuerte'
            },
            b: {
                texto: 'Investigar el libro para más pistas',
                siguiente: 'investigarLibro'
            }
        }
    },

    irPuntoEntrega: {
        texto: `Vas al punto de entrega y descubres una transacción sospechosa. Los detalles de la transacción confirman la conspiración en el club.`,

        opciones: {
            a: {
                texto: 'Recoger pruebas de la transacción',
                siguiente: 'recogerPruebas'
            },
            b: {
                texto: 'Informar a las autoridades',
                siguiente: 'informarAutoridades'
            }
        }
    },

    esperarObservar: {
        texto: `Decides esperar y observar. Después de un tiempo, ves a varias personas que parecen estar implicadas en la conspiración. Recopilas información importante.`,

        opciones: {
            a: {
                texto: 'Documentar la información',
                siguiente: 'documentarInformacion'
            },
            b: {
                texto: 'Reportar a las autoridades',
                siguiente: 'reportarAutoridades'
            }
        }
    },

    obtenerCodigoDiscreto: {
        texto: `Intentas obtener el código de manera discreta. Logras conseguir la información sin levantar sospechas y obtienes el código para la caja fuerte.`,

        opciones: {
            a: {
                texto: 'Abrir la caja fuerte con el código',
                siguiente: 'abrirCajaFuerte'
            },
            b: {
                texto: 'Buscar más pistas en el club',
                siguiente: 'buscarPistasClub'
            }
        }
    },

    buscarManeraCajaFuerte: {
        texto: `Buscas otra manera de abrir la caja fuerte. Encuentras un manual que detalla cómo abrir la caja fuerte sin el código.`,

        opciones: {
            a: {
                texto: 'Usar el manual para abrir la caja fuerte',
                siguiente: 'abrirCajaFuerte'
            },
            b: {
                texto: 'Buscar el código en otros lugares',
                siguiente: 'buscarCodigoOtrosLugares'
            }
        }
    },

    forzarCajaFuerte: {
        texto: `Intentas forzar la caja fuerte, pero el mecanismo está muy bien asegurado. Puedes llamar la atención de la seguridad.`,

        opciones: {
            a: {
                texto: 'Volver a intentar forzar la caja',
                siguiente: 'forzarCaja'
            },
            b: {
                texto: 'Buscar una alternativa para abrirla',
                siguiente: 'buscarAlternativa'
            }
        }
    },

    buscarCodigoSala: {
        texto: `Buscas el código en la sala. Encuentras una pista que te lleva a un libro antiguo en la biblioteca.`,

        opciones: {
            a: {
                texto: 'Buscar el libro en la biblioteca',
                siguiente: 'buscarLibroBiblioteca'
            },
            b: {
                texto: 'Buscar más en la sala',
                siguiente: 'buscarMasSala'
            }
        }
    },

    investigarLibro: {
        texto: `Investigas el libro y encuentras una pista sobre la ubicación de la caja fuerte. La pista también sugiere cómo abrirla.`,

        opciones: {
            a: {
                texto: 'Abrir la caja fuerte usando la pista',
                siguiente: 'abrirCajaConPista'
            },
            b: {
                texto: 'Buscar otras pistas en el libro',
                siguiente: 'buscarOtrasPistas'
            }
        }
    },

    abrirCajaConPista: {
        texto: `Usas la pista del libro para abrir la caja fuerte. Encuentras documentos importantes que revelan la verdad detrás de la conspiración.`,

        opciones: {
            a: {
                texto: 'Leer los documentos',
                siguiente: 'leerDocumentos'
            },
            b: {
                texto: 'Salir del club con los documentos',
                siguiente: 'salirConDocumentos'
            }
        }
    },

    buscarBiblioteca: {
        texto: `Buscas en la biblioteca y encuentras varios libros antiguos. Uno de ellos parece tener información sobre el código de la caja fuerte.`,

        opciones: {
            a: {
                texto: 'Leer el libro',
                siguiente: 'leerLibroBiblioteca'
            },
            b: {
                texto: 'Buscar otros libros',
                siguiente: 'buscarOtrosLibros'
            }
        }
    },

    abrirSinCodigo: {
        texto: `Intentas abrir la caja fuerte sin el código, pero no logras acceder a ella. Necesitarás el código para continuar.`,

        opciones: {
            a: {
                texto: 'Buscar el código en el club',
                siguiente: 'buscarCodigoClub'
            },
            b: {
                texto: 'Intentar otra forma de abrir la caja',
                siguiente: 'intentarOtraForma'
            }
        }
    },

    escaparRapido: {
        texto: `Escapas rápidamente del club antes de que la seguridad te detecte. La misión es exitosa, pero debes mantenerte alerta.`,

        opciones: {
            a: {
                texto: 'Analizar la información obtenida',
                siguiente: 'analizarInformacion'
            },
            b: {
                texto: 'Reportar el incidente a las autoridades',
                siguiente: 'reportarIncidente'
            }
        }
    },

    esconderte: {
        texto: `Buscas un escondite temporal y logras evadir a la seguridad por un tiempo. Sin embargo, debes ser rápido para evitar ser atrapado.`,

        opciones: {
            a: {
                texto: 'Buscar una salida segura',
                siguiente: 'buscarSalidaSegura'
            },
            b: {
                texto: 'Esperar hasta que la seguridad se calme',
                siguiente: 'esperarSeguridad'
            }
        }
    },

    leerDocumentos: {
        texto: `Lees los documentos y descubres información crucial sobre la conspiración. Esta información podría cambiar el curso de la investigación.`,

        opciones: {
            a: {
                texto: 'Compartir la información con el equipo',
                siguiente: 'compartirInformacion'
            },
            b: {
                texto: 'Guardar la información para más adelante',
                siguiente: 'guardarInformacion'
            }
        }
    },

    salirClub: {
        texto: `Sales rápidamente del club con los documentos. Ahora tienes que decidir qué hacer con la información.`,

        opciones: {
            a: {
                texto: 'Investigar más a fondo',
                siguiente: 'investigarMas'
            },
            b: {
                texto: 'Reportar a las autoridades',
                siguiente: 'reportarAutoridades'
            }
        }
    },

    analizarInformacion: {
        texto: `Analizas la información obtenida y encuentras pistas adicionales sobre la conspiración. Estas pistas podrían ser vitales para resolver el caso.`,

        opciones: {
            a: {
                texto: 'Seguir la pista principal',
                siguiente: 'seguirPistaPrincipal'
            },
            b: {
                texto: 'Investigar otras pistas',
                siguiente: 'investigarOtrasPistas'
            }
        }
    },

    reportarIncidente: {
        texto: `Reportas el incidente a las autoridades. Tu valentía podría llevar a una mayor investigación sobre la conspiración.`,

        opciones: {
            a: {
                texto: 'Esperar respuesta de las autoridades',
                siguiente: 'esperarRespuesta'
            },
            b: {
                texto: 'Continuar investigando por tu cuenta',
                siguiente: 'investigarPorCuenta'
            }
        }
    },

    buscarPistasClub: {
        texto: `Buscas más pistas en el club y encuentras un documento que menciona la ubicación de la caja fuerte.`,

        opciones: {
            a: {
                texto: 'Ir a la ubicación mencionada',
                siguiente: 'irUbicacionCaja'
            },
            b: {
                texto: 'Seguir buscando más pistas',
                siguiente: 'seguirBuscandoPistas'
            }
        }
    },

    buscarCodigoOtrosLugares: {
        texto: `Buscas el código en otros lugares del club, pero no encuentras nada nuevo. Podría ser útil regresar a la biblioteca.`,

        opciones: {
            a: {
                texto: 'Regresar a la biblioteca',
                siguiente: 'buscarBiblioteca'
            },
            b: {
                texto: 'Buscar en otras áreas del club',
                siguiente: 'buscarOtrasAreas'
            }
        }
    },

    abrirCajaConPista: {
        texto: `Usas la pista del libro para abrir la caja fuerte. Encuentras documentos importantes que revelan la verdad detrás de la conspiración.`,

        opciones: {
            a: {
                texto: 'Leer los documentos',
                siguiente: 'leerDocumentos'
            },
            b: {
                texto: 'Salir del club con los documentos',
                siguiente: 'salirConDocumentos'
            }
        }
    },

    investigarOtrasPistas: {
        texto: `Investigas otras pistas y encuentras una red de contactos involucrados en la conspiración.`,

        opciones: {
            a: {
                texto: 'Seguir la red de contactos',
                siguiente: 'seguirRedContactos'
            },
            b: {
                texto: 'Buscar más pistas',
                siguiente: 'buscarMasPistas'
            }
        }
    },

    seguirPistaPrincipal: {
        texto: `Sigues la pista principal y descubres una conexión con una organización secreta.`,

        opciones: {
            a: {
                texto: 'Profundizar en la organización secreta',
                siguiente: 'profundizarOrganizacion'
            },
            b: {
                texto: 'Buscar más información sobre la conexión',
                siguiente: 'buscarInformacionConexion'
            }
        }
    },

    investigarPorCuenta: {
        texto: `Decides continuar investigando por tu cuenta. Encuentras más detalles sobre la conspiración que podrían ser cruciales.`,

        opciones: {
            a: {
                texto: 'Preparar un informe',
                siguiente: 'prepararInforme'
            },
            b: {
                texto: 'Continuar la investigación',
                siguiente: 'continuarInvestigacion'
            }
        }
    },

    prepararInforme: {
        texto: `Preparas un informe detallado sobre la conspiración. Tu informe podría ayudar a desmantelar la red de corrupción.`,

        opciones: {
            a: {
                texto: 'Enviar el informe a las autoridades',
                siguiente: 'enviarInforme'
            },
            b: {
                texto: 'Guardar el informe para ti',
                siguiente: 'guardarInforme'
            }
        }
    },

    seguirRedContactos: {
        texto: `Sigues la red de contactos y encuentras a varios miembros clave de la conspiración.`,

        opciones: {
            a: {
                texto: 'Investigar a los miembros clave',
                siguiente: 'investigarMiembrosClave'
            },
            b: {
                texto: 'Informar a las autoridades sobre los miembros',
                siguiente: 'informarMiembros'
            }
        }
    },

    profundidadOrganizacion: {
        texto: `Profundizas en la organización secreta y descubres sus planes. Tu investigación revela una amenaza mayor.`,

        opciones: {
            a: {
                texto: 'Exponer los planes de la organización',
                siguiente: 'exponerPlanes'
            },
            b: {
                texto: 'Continuar investigando más detalles',
                siguiente: 'continuarInvestigando'
            }
        }
    },

    enviarInforme: {
        texto: `Envías el informe a las autoridades. La información podría llevar a una gran operación contra la conspiración.`,

        opciones: {
            a: {
                texto: 'Esperar respuesta de las autoridades',
                siguiente: 'esperarRespuesta'
            },
            b: {
                texto: 'Continuar investigando por tu cuenta',
                siguiente: 'investigarPorCuenta'
            }
        }
    },

    guardarInforme: {
        texto: `Guardas el informe para ti. Esto te da tiempo para considerar los próximos pasos.`,

        opciones: {
            a: {
                texto: 'Preparar una presentación del informe',
                siguiente: 'prepararPresentacion'
            },
            b: {
                texto: 'Continuar investigando',
                siguiente: 'continuarInvestigando'
            }
        }
    },

    prepararPresentacion: {
        texto: `Preparas una presentación del informe. Esta presentación podría ayudarte a exponer la conspiración de manera efectiva.`,

        opciones: {
            a: {
                texto: 'Presentar la información a las autoridades',
                siguiente: 'presentarInformacion'
            },
            b: {
                texto: 'Guardar la presentación para otro momento',
                siguiente: 'guardarPresentacion'
            }
        }
    },

    presentarInformacion: {
        texto: `Presentas la información a las autoridades. Tu investigación ha ayudado a desmantelar la conspiración.`,

        opciones: {
            a: {
                texto: 'Recibir reconocimiento por tu trabajo',
                siguiente: 'recibirReconocimiento'
            },
            b: {
                texto: 'Continuar con nuevas investigaciones',
                siguiente: 'continuarNuevasInvestigaciones'
            }
        }
    },

    recibirReconocimiento: {
        texto: `Recibes reconocimiento por tu trabajo. Tu valentía y habilidades han tenido un impacto significativo.`,

        opciones: {
            a: {
                texto: 'Aceptar el reconocimiento',
                siguiente: 'aceptarReconocimiento'
            },
            b: {
                texto: 'Seguir trabajando en otras investigaciones',
                siguiente: 'seguirInvestigaciones'
            }
        }
    },

    aceptarReconocimiento: {
        texto: `Aceptas el reconocimiento con gratitud. Tu trabajo ha sido invaluable para resolver el caso.`,

        opciones: {
            a: {
                texto: 'Celebrar tu éxito',
                siguiente: 'celebrarExito'
            },
            b: {
                texto: 'Empezar una nueva investigación',
                siguiente: 'nuevaInvestigacion'
            }
        }
    },

    celebrarExito: {
        texto: `Celebras tu éxito con amigos y colegas. Te sientes satisfecho con el trabajo bien hecho.`,

        opciones: {
            a: {
                texto: 'Descansar y reflexionar',
                siguiente: 'descansarReflexionar'
            },
            b: {
                texto: 'Iniciar una nueva misión',
                siguiente: 'nuevaMision'
            }
        }
    },

    nuevaInvestigacion: {
        texto: `Empiezas una nueva investigación. Estás listo para enfrentar nuevos desafíos.`,

        opciones: {
            a: {
                texto: 'Preparar tu equipo',
                siguiente: 'prepararEquipo'
            },
            b: {
                texto: 'Investigar la nueva pista',
                siguiente: 'investigarNuevaPista'
            }
        }
    },

    descansarReflexionar: {
        texto: `Descansas y reflexionas sobre tu éxito. Estás listo para futuras aventuras.`,

        opciones: {
            a: {
                texto: 'Planificar tu próximo paso',
                siguiente: 'planificarProximoPaso'
            },
            b: {
                texto: 'Disfrutar del descanso',
                siguiente: 'disfrutarDescanso'
            }
        }
    },

    planificarProximoPaso: {
        texto: `Planificas tu próximo paso. Estás preparado para enfrentar cualquier desafío que venga.`,

        opciones: {
            a: {
                texto: 'Empezar una nueva investigación',
                siguiente: 'nuevaInvestigacion'
            },
            b: {
                texto: 'Buscar nuevas oportunidades',
                siguiente: 'buscarNuevasOportunidades'
            }
        }
    },

    disfrutarDescanso: {
        texto: `Disfrutas del descanso y te preparas para futuros desafíos. Estás en un buen lugar.`,

        opciones: {
            a: {
                texto: 'Volver a la acción',
                siguiente: 'volverAccion'
            },
            b: {
                texto: 'Buscar nuevas metas',
                siguiente: 'buscarNuevasMetas'
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

    optionsContainer.innerHTML = '';

    for (const key in section.opciones){
        const opcion = section.opciones[key];
        const button = document.createElement('button');
        button.textContent = opcion.texto;
        button.addEventListener('click', () => {
            seccionActual = opcion.siguiente;
            renderStory();
        });
        optionsContainer.appendChild(button);
    }

}

renderStory();

