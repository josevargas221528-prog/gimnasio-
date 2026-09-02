const ejercicios = {

    pecho: {
        nombre: "Pecho",

        descripcion:
        "El pecho participa en los movimientos de empuje y es uno de los grupos musculares más trabajados.",

        ejercicios: [
            {
                nombre: "Press de banca",
                series: "4 series x 8-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Press inclinado",
                series: "4 series x 8-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Press declinado",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Aperturas con mancuernas",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Cruces en polea",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Fondos para pecho",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            }
        ]
    },


    espalda: {
        nombre: "Espalda",

        descripcion:
        "La espalda es fundamental para desarrollar fuerza de tracción, estabilidad y una buena postura.",

        ejercicios: [
            {
                nombre: "Dominadas",
                series: "4 series x 6-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Remo con barra",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Jalón al pecho",
                series: "3 series x 10-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Remo en máquina",
                series: "3 series x 10-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Peso muerto",
                series: "4 series x 5-8 repeticiones",
                nivel: "Avanzado"
            },

            {
                nombre: "Pullover",
                series: "3 series x 10-15 repeticiones",
                nivel: "Intermedio"
            }
        ]
    },


    hombros: {
        nombre: "Hombros",

        descripcion:
        "Los hombros aportan amplitud al físico y participan en diferentes movimientos del tren superior.",

        ejercicios: [
            {
                nombre: "Press militar",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Elevaciones laterales",
                series: "4 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Elevaciones frontales",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Pájaros",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Arnold Press",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Face Pull",
                series: "3 series x 12-15 repeticiones",
                nivel: "Principiante"
            }
        ]
    },


    biceps: {
        nombre: "Bíceps",

        descripcion:
        "Los bíceps intervienen en la flexión del brazo y son importantes en los movimientos de tracción.",

        ejercicios: [
            {
                nombre: "Curl con barra",
                series: "4 series x 8-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Curl martillo",
                series: "3 series x 10-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Curl concentrado",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Curl predicador",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Curl en polea",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            }
        ]
    },


    triceps: {
        nombre: "Tríceps",

        descripcion:
        "Los tríceps representan gran parte del volumen del brazo y participan principalmente en movimientos de empuje.",

        ejercicios: [
            {
                nombre: "Fondos",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Extensión en polea",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Press francés",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Extensión por encima de la cabeza",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Rompecráneos",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            }
        ]
    },


    abdomen: {
        nombre: "Abdomen",

        descripcion:
        "El abdomen ayuda a estabilizar el cuerpo y participa en el control y protección de la zona central.",

        ejercicios: [
            {
                nombre: "Crunch",
                series: "3 series x 15-20 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Elevaciones de piernas",
                series: "3 series x 10-15 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Plancha",
                series: "3 series x 30-60 segundos",
                nivel: "Principiante"
            },

            {
                nombre: "Russian Twist",
                series: "3 series x 12-20 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Crunch en polea",
                series: "3 series x 10-15 repeticiones",
                nivel: "Intermedio"
            }
        ]
    },


    cuadriceps: {
        nombre: "Piernas",

        descripcion:
        "Las piernas permiten caminar, correr, saltar y generar fuerza en el tren inferior.",

        ejercicios: [
            {
                nombre: "Sentadilla",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Prensa",
                series: "4 series x 10-12 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Extensiones",
                series: "3 series x 10-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Hack Squat",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Zancadas",
                series: "3 series x 10-12 repeticiones",
                nivel: "Principiante"
            }
        ]
    },


    gluteos: {
        nombre: "Glúteos",

        descripcion:
        "Los glúteos participan en la extensión de la cadera y ayudan a desarrollar potencia y estabilidad.",

        ejercicios: [
            {
                nombre: "Hip Thrust",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Sentadilla búlgara",
                series: "3 series x 8-12 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Patada de glúteo",
                series: "3 series x 12-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Puente de glúteos",
                series: "3 series x 12-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Peso muerto rumano",
                series: "4 series x 8-12 repeticiones",
                nivel: "Intermedio"
            }
        ]
    },


    gemelos: {
        nombre: "Gemelos",

        descripcion:
        "Los gemelos participan en la impulsión del cuerpo al caminar, correr y saltar.",

        ejercicios: [
            {
                nombre: "Elevación de talones",
                series: "4 series x 12-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Gemelos en prensa",
                series: "4 series x 10-15 repeticiones",
                nivel: "Intermedio"
            },

            {
                nombre: "Gemelos sentado",
                series: "3 series x 12-15 repeticiones",
                nivel: "Principiante"
            },

            {
                nombre: "Elevación unilateral",
                series: "3 series x 12-15 repeticiones",
                nivel: "Intermedio"
            }
        ]
    }

};


/* =========================
   ELEMENTOS DEL HTML
========================= */

const tituloMusculo =
    document.getElementById("tituloMusculo");

const descripcionMusculo =
    document.getElementById("descripcionMusculo");

const listaEjercicios =
    document.getElementById("listaEjercicios");

const selectorMusculo =
    document.getElementById("selectorMusculo");


/* =========================
   MOSTRAR EJERCICIOS
========================= */

function cargarMusculo(musculo) {

    const datos = ejercicios[musculo];

    if (!datos) {
        console.log("No existe este músculo:", musculo);
        return;
    }


    tituloMusculo.innerText =
        datos.nombre;


    descripcionMusculo.innerText =
        datos.descripcion;


    let html = "";


    datos.ejercicios.forEach(ejercicio => {

        html += `

            <div class="exercise-card">

                <div class="exercise-info">

                    <h3>
                        ${ejercicio.nombre}
                    </h3>

                    <p>
                        ${ejercicio.series}
                    </p>

                    <span class="exercise-level">
                        ${ejercicio.nivel}
                    </span>

                </div>

            </div>

        `;

    });


    listaEjercicios.innerHTML = html;

}


/* =========================
   MUSCULO DE LA URL
========================= */

const parametros =
    new URLSearchParams(window.location.search);

const musculoInicial =
    parametros.get("musculo") || "pecho";


/* =========================
   CARGAR MUSCULO INICIAL
========================= */

selectorMusculo.value =
    musculoInicial;

cargarMusculo(
    musculoInicial
);


/* =========================
   CAMBIAR MUSCULO
========================= */

selectorMusculo.addEventListener(
    "change",
    function () {

        cargarMusculo(
            selectorMusculo.value
        );

        const nuevaURL =
            "ejercicios.html?musculo="
            + selectorMusculo.value;

        window.history.replaceState(
            {},
            "",
            nuevaURL
        );

    }
);