const story = {
    
    inicio: {
        texto: `Despiertas en el suelo de una habitacion oscura, te duele un poco la cabeza y te sientes mareado. El piso esta frio, hay mucho polvo, el silencio es tan profundo que puedes escuchar tu propio corazon latiendo.`,
        opciones: {
            a: { texto: "Explorar la habitacion",
                siguiente: "exploraHabitacion"
            },
            b: { texto: "Intentar salir",
                siguiente: "intentarSalir"
             }
        }
    },

    exploraHabitacion: {
        texto: `Notas que la habitacion es un poco angosta, esta muy oscuro pero puedes ver como hay un librero a la derecha y un espejo a la izquierda.`,
        opciones:{
            a: {
                texto: "Ver librero",
                siguiente: "verLibrero"
            },
            b: {
                texto: "Ver espejo",
                siguiente: "verEspejo"
            }
        }
    },

    verLibrero: {
        texto: `Ves que en el librero hay un par de libros, libretas, y un papel doblado`,
        opciones: {
            a: {
            texto: "Ver papel doblado",
            siguiente: "verPapelDoblado",
            },

            b: {
                texto: "Ver libros",
                siguiente: "verLibros"
            }
        }
    },

    verPapelDoblado: {
        texto: `Tomas el papel y apenas logras ver lo que parece ser un codigo "0094"`,
        opciones: {
            a: {
                texto: "Intentar salir",
                siguiente: "intentarSalir"
            },
            b: {
                texto: "Ver libros",
                siguiente: "verLibros"
            }
        }
    },

    intentarSalir: {
        texto: `Ves a tu lado una puerta, no es muy grande, intentas abrirla pero esta cerrada por fuera, al parecer debes ingresar una clave para abrirla`,
        opciones: {
            a: {
                texto: "Ingresar codigo",
                siguiente: "verificarCodigo"
            }
        }
    },

    verificarCodigo: {
        texto: `ingresa el codigo para abrir la puerta:`,
        opciones: {
            a:{
                texto: "Regresar",
                siguiente: "verLibrero"
            }
        }
    },

    puertaAbierta: {
        texto: `ingresaste el codigo correcto y la puerta se ha abierto por si sola lentamente, puedes ver un pasillo muy oscuro y angosto al otro lado de la puerta, sientes una sensacion de escalofrio recorriendo tu cuerpo mientras vas caminando, al llegar al final del pasillo te encuentras un ascensor y una puerta`,
        opciones: {
            a: {
                texto: "Usar ascensor",
                siguiente: "usarAscensor"
            },
            b: {
                texto: "Abrir la puerta",
                siguiente: "abrirPuerta"
            }
        }
    }
}
export default story;
