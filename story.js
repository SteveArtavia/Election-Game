const story = {
    inicio: {
        texto: "En una noche oscura y tormentosa, te encuentras frente a las puertas del Bohemian Club, un lugar envuelto en leyendas y rumores. Los poderosos y ricos de la sociedad se reúnen aquí en secreto, y se dice que están planeando algo que podría cambiar el destino del mundo. Tu misión: infiltrarte y descubrir la verdad antes de que sea demasiado tarde.",
        opciones: {
            a: { texto: "Entrar por la puerta principal", siguiente: "puertaPrincipal" },
            b: { texto: "Buscar una entrada secreta", siguiente: "entradaSecreta" }
        }
    },
    puertaPrincipal: {
        texto: "Te arriesgas a entrar por la puerta principal. Sorprendentemente, nadie parece detenerte, pero sientes miradas sospechosas a tu alrededor.",
        opciones: {
            a: { texto: "Avanzar hacia el salón principal", siguiente: "salonPrincipal" },
            b: { texto: "Esconderte en una habitación cercana", siguiente: "habitacionCercana" }
        }
    },
    entradaSecreta: {
        texto: "Encuentras una pequeña puerta oculta entre los arbustos. La abres con cuidado y te deslizas hacia adentro. Escuchas voces en la distancia.",
        opciones: {
            a: { texto: "Seguir las voces", siguiente: "seguirVoces" },
            b: { texto: "Tomar un pasillo oscuro", siguiente: "pasilloOscuro" }
        }
    },
    salonPrincipal: {
        texto: "Entras en el salón principal y te mezclas con la multitud. La elite está reunida aquí, discutiendo algo en voz baja.",
        opciones: {
            a: { texto: "Escuchar la conversación", siguiente: "escucharConversacion" },
            b: { texto: "Buscar pruebas en otro lugar", siguiente: "busquedaPruebas" }
        }
    },
    habitacionCercana: {
        texto: "Te escondes en una habitación cercana. En el interior, encuentras documentos con información clasificada.",
        opciones: {
            a: { texto: "Leer los documentos", siguiente: "leerDocumentos" },
            b: { texto: "Salir rápidamente antes de ser descubierto", siguiente: "huida" }
        }
    },
    seguirVoces: {
        texto: "Sigues las voces y te llevan a una sala de reuniones. Al espiar por la puerta, ves a personas que reconoces como líderes mundiales.",
        opciones: {
            a: { texto: "Entrar y confrontarlos", siguiente: "confrontacion" },
            b: { texto: "Escuchar más antes de actuar", siguiente: "escucharMas" }
        }
    },
    pasilloOscuro: {
        texto: "El pasillo es oscuro y frío. Al final, encuentras una puerta de metal.",
        opciones: {
            a: { texto: "Abrir la puerta", siguiente: "puertaMetal" },
            b: { texto: "Regresar", siguiente: "inicio" }
        }
    },
    escucharConversacion: {
        texto: "Escuchas atentamente. Hablan de un plan para manipular los mercados globales. Es información invaluable.",
        opciones: {
            a: { texto: "Grabar la conversación", siguiente: "grabarConversacion" },
            b: { texto: "Ir en busca de más información", siguiente: "busquedaPruebas" }
        }
    },
    busquedaPruebas: {
        texto: "Decides buscar más pruebas. Encuentras un libro antiguo que detalla rituales y reuniones secretas.",
        opciones: {
            a: { texto: "Llevar el libro contigo", siguiente: "finalConspiracion" },
            b: { texto: "Dejar el libro y seguir explorando", siguiente: "seguirExplorando" }
        }
    },
    leerDocumentos: {
        texto: "Los documentos revelan conexiones entre los miembros del club y ciertos eventos globales recientes. Esto es más grande de lo que pensabas.",
        opciones: {
            a: { texto: "Tomar fotos de los documentos", siguiente: "finalConspiracion" },
            b: { texto: "Salir con los documentos", siguiente: "huida" }
        }
    },
    huida: {
        texto: "Sales rápidamente del club, pero sientes que te están siguiendo. Debes decidir si escapar o enfrentarte a ellos.",
        opciones: {
            a: { texto: "Escapar por los callejones", siguiente: "finalEscape" },
            b: { texto: "Enfrentar a tus perseguidores", siguiente: "finalConfrontacion" }
        }
    },
    confrontacion: {
        texto: "Entras en la sala y enfrentas a los líderes. Te das cuenta de que saben quién eres y te han estado esperando.",
        opciones: {
            a: { texto: "Negociar con ellos", siguiente: "finalNegociacion" },
            b: { texto: "Luchar por tu vida", siguiente: "finalLucha" }
        }
    },
    escucharMas: {
        texto: "Sigues escuchando y te das cuenta de que mencionan tu nombre. Están al tanto de tu presencia.",
        opciones: {
            a: { texto: "Intentar escapar", siguiente: "huida" },
            b: { texto: "Seguir escuchando, arriesgando ser descubierto", siguiente: "confrontacion" }
        }
    },
    puertaMetal: {
        texto: "Abres la puerta de metal y descubres una habitación llena de tecnología avanzada, con pantallas que muestran datos en tiempo real.",
        opciones: {
            a: { texto: "Investigar la tecnología", siguiente: "finalTecnologia" },
            b: { texto: "Regresar antes de ser atrapado", siguiente: "inicio" }
        }
    },
    grabarConversacion: {
        texto: "Logras grabar la conversación. Ahora tienes pruebas contundentes. Pero alguien te ha visto y comienza a seguirte.",
        opciones: {
            a: { texto: "Escapar con la grabación", siguiente: "finalEscape" },
            b: { texto: "Enfrentar al seguidor", siguiente: "finalConfrontacion" }
        }
    },
    seguirExplorando: {
        texto: "Sigues explorando el club. Encuentras un pasadizo que te lleva a un lugar inesperado: una sala de rituales.",
        opciones: {
            a: { texto: "Escapar antes de ser descubierto", siguiente: "finalEscape" },
            b: { texto: "Investigar la sala de rituales", siguiente: "finalRitual" }
        }
    },
    // Finales
    finalConspiracion: {
        texto: "Has descubierto la conspiración del Bohemian Club. Tienes pruebas suficientes para exponerlos, pero ahora eres un objetivo. ¿Puedes escapar y divulgar la verdad?",
        opciones: {}
    },
    finalEscape: {
        texto: "Escapas por los callejones, pero sientes que nunca estarás realmente a salvo. La verdad que has descubierto te perseguirá para siempre.",
        opciones: {}
    },
    finalConfrontacion: {
        texto: "Te enfrentas a tus perseguidores. Es una batalla difícil, pero logras escapar. Sin embargo, has perdido las pruebas y solo tú conoces la verdad.",
        opciones: {}
    },
    finalNegociacion: {
        texto: "Negocias con los líderes, pero te das cuenta de que estás vendiendo tu alma. Ahora, formas parte del Bohemian Club, atrapado en la misma conspiración que intentabas detener.",
        opciones: {}
    },
    finalLucha: {
        texto: "Luchas con todo tu ser, pero el número de enemigos es demasiado. Al final, sucumbes a la oscuridad, y la conspiración continúa sin oposición.",
        opciones: {}
    },
    finalTecnologia: {
        texto: "Descubres que la tecnología es parte de un sistema de control global. Has encontrado algo que podría cambiar el mundo, pero ¿cómo usarlo sin ser destruido?",
        opciones: {}
    },
    finalRitual: {
        texto: "Investigas la sala de rituales y descubres que el club no solo conspira en el ámbito político, sino que también se adentra en lo oculto. Escapas con vida, pero con un conocimiento que te perseguirá para siempre.",
        opciones: {}
    }
};

export default story;
