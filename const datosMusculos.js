/* =========================
   DATOS DE LOS MUSCULOS
========================= */

const datosMusculos = {

    pecho: {
        nombre: "Pecho",
        descripcion: "El pecho participa en los movimientos de empuje y es uno de los grupos musculares más trabajados.",

        ejercicios: [
            {
                nombre: "Press de banca",
                series: "4 series x 8-12 repeticiones",
                imagen: "imagenes/pecho/pres de banca.jfif"
            },
            {
                nombre: "Press inclinado",
                series: "4 series x 8-12 repeticiones",
                imagen: "imagenes/pecho/pres de banca inclinado.jfif"
            },
            {
                nombre: "Aperturas con mancuernas",
                series: "3 series x 10-15 repeticiones",
                imagen: "imagenes/pecho/Apertura con mancuernas.jfif"
            }
        ]
    },


    espalda: {
        nombre: "Espalda",
        descripcion: "La espalda es fundamental para desarrollar fuerza de tracción, estabilidad y una buena postura.",

        ejercicios: [
            {
                nombre: "Dominadas",
                series: "4 series x 6-12 repeticiones",
                imagen: "img/dominadas.jpg"
            },
            {
                nombre: "Remo con barra",
                series: "4 series x 8-12 repeticiones",
                imagen: "img/remo-barra.jpg"
            },
            {
                nombre: "Jalón al pecho",
                series: "3 series x 10-12 repeticiones",
                imagen: "img/jalon-pecho.jpg"
            }
        ]
    },


    hombros: {
        nombre: "Hombros",
        descripcion: "Los hombros aportan amplitud al físico y participan en diferentes movimientos del tren superior.",

        ejercicios: [
            {
                nombre: "Press militar",
                series: "4 series x 8-12 repeticiones",
                imagen: "imagenes/hombro/press_militar.jfif"
            },
            {
                nombre: "Elevaciones laterales",
                series: "4 series x 10-15 repeticiones",
                imagen: "imagenes/hombro/elevaciones_laterales.jpg"
            },
            {
                nombre: "Pájaros",
                series: "3 series x 10-15 repeticiones",
                imagen: "imagenes/hombro/pajaro.jfif"
            }
        ]
    },


    biceps: {
        nombre: "Bíceps",
        descripcion: "Los bíceps intervienen en la flexión del brazo y son importantes en los movimientos de tracción.",

        ejercicios: [
            {
                nombre: "Curl con barra",
                series: "4 series x 8-12 repeticiones",
                imagen: "imagenes/biceps/curl_con_barra.jfif"
            },
            {
                nombre: "Curl martillo",
                series: "3 series x 10-12 repeticiones",
                imagen: "imagenes/biceps/curl_martillo.jfif"
            },
            {
                nombre: "Curl concentrado",
                series: "3 series x 10-15 repeticiones",
                imagen: "imagenes/biceps/curl_concentrado.webp"
            }
        ]
    },


    triceps: {
        nombre: "Tríceps",
        descripcion: "Los tríceps representan gran parte del volumen del brazo y participan principalmente en movimientos de empuje.",

        ejercicios: [
            {
                nombre: "Fondos",
                series: "4 series x 8-12 repeticiones",
                imagen: "img/fondos.jpg"
            },
            {
                nombre: "Extensión en polea",
                series: "3 series x 10-15 repeticiones",
                imagen: "img/extension-polea.jpg"
            },
            {
                nombre: "Press francés",
                series: "3 series x 8-12 repeticiones",
                imagen: "img/press-frances.jpg"
            }
        ]
    },


    abdomen: {
        nombre: "Abdomen",
        descripcion: "El abdomen ayuda a estabilizar el cuerpo y participa en el control y protección de la zona central.",

        ejercicios: [
            {
                nombre: "Crunch",
                series: "3 series x 15-20 repeticiones",
                imagen: "imagenes/Habdomen/Crunch.jfif"
            },
            {
                nombre: "Elevaciones de piernas",
                series: "3 series x 10-15 repeticiones",
                imagen: "imagenes/Habdomen/Elevacion de piernas.jfif"
            },
            {
                nombre: "Plancha",
                series: "3 series x 30-60 segundos",
                imagen: "imagenes/Habdomen/plancha.png"
            }
        ]
    },


    cuadriceps: {
        nombre: "Piernas",
        descripcion: "Las piernas permiten realizar movimientos como caminar, correr, saltar y generar fuerza en el tren inferior.",

        ejercicios: [
            {
                nombre: "Sentadilla",
                series: "4 series x 8-12 repeticiones",
                imagen: "imagenes/cuadriceps/sentadillas.jpg"
            },
            {
                nombre: "Prensa",
                series: "4 series x 10-12 repeticiones",
                imagen: "imagenes/cuadriceps/prensa.jpg"
            },
            {
                nombre: "Extensiones",
                series: "3 series x 10-15 repeticiones",
                imagen: "imagenes/cuadriceps/extenciones.jfif"
            }
        ]
    },


    gluteos: {
        nombre: "Glúteos",
        descripcion: "Los glúteos participan en la extensión de la cadera y ayudan a desarrollar potencia y estabilidad.",

        ejercicios: [
            {
                nombre: "Hip Thrust",
                series: "4 series x 8-12 repeticiones",
                imagen: "img/hip-thrust.jpg"
            },
            {
                nombre: "Sentadilla búlgara",
                series: "3 series x 8-12 repeticiones",
                imagen: "img/sentadilla-bulgara.jpg"
            },
            {
                nombre: "Patada de glúteo",
                series: "3 series x 12-15 repeticiones",
                imagen: "img/patada-gluteo.jpg"
            }
        ]
    },


    gemelos: {
        nombre: "Gemelos",
        descripcion: "Los gemelos participan en la impulsión del cuerpo al caminar, correr y saltar.",

        ejercicios: [
            {
                nombre: "Elevación de talones",
                series: "4 series x 12-15 repeticiones",
                imagen: "img/elevacion-talones.jpg"
            },
            {
                nombre: "Gemelos en prensa",
                series: "4 series x 10-15 repeticiones",
                imagen: "img/gemelos-prensa.jpg"
            },
            {
                nombre: "Gemelos sentado",
                series: "3 series x 12-15 repeticiones",
                imagen: "img/gemelos-sentado.jpg"
            }
        ]
    }

};


/* =========================
   MOSTRAR MUSCULO
========================= */

function mostrarMusculo(musculo) {

    const datos = datosMusculos[musculo];

    if (!datos) {
        return;
    }

    document.getElementById("muscleName").innerText =
        datos.nombre;

    document.getElementById("muscleDescription").innerText =
        datos.descripcion;


    let html = "";


    /* MOSTRAR LOS 3 EJERCICIOS DESTACADOS */

    datos.ejercicios.forEach(ejercicio => {

        html += `
            <div class="exercise-item">

                <img 
                    src="${ejercicio.imagen}" 
                    alt="${ejercicio.nombre}"
                >

                <div>

                    <h5>${ejercicio.nombre}</h5>

                    <p>
                        ${ejercicio.series}
                    </p>

                </div>

            </div>
        `;

    });


    /* BOTON PARA VER MAS */

    html += `
        <div class="more-exercises">

            <a 
                href="ejercicios.html?musculo=${musculo}"
                class="btn-mas-ejercicios"
            >
                Ver más ejercicios →
            </a>

        </div>
    `;


    document.getElementById("exerciseList").innerHTML =
        html;

}


/* =========================
   RUTINAS
========================= */

function mostrarRutina() {

    const nivel =
        document.getElementById("rutina").value;

    const resultado =
        document.getElementById("resultadoRutina");

    let html = "";


    if (nivel === "principiante") {

        html = `

            <div class="routine-content">

                <h2>🏋️ Rutina Principiante</h2>

                <p>
                    Rutina pensada para personas que están
                    comenzando a entrenar.
                </p>

                <div class="routine-day">
                    <h3>Lunes</h3>
                    <p>Pecho + Tríceps</p>
                </div>

                <div class="routine-day">
                    <h3>Miércoles</h3>
                    <p>Espalda + Bíceps</p>
                </div>

                <div class="routine-day">
                    <h3>Viernes</h3>
                    <p>Piernas + Abdomen</p>
                </div>

            </div>

        `;

    }


    else if (nivel === "intermedio") {

        html = `

            <div class="routine-content">

                <h2>🔥 Rutina Intermedia</h2>

                <p>
                    Una rutina con mayor frecuencia
                    y volumen de entrenamiento.
                </p>

                <div class="routine-day">
                    <h3>Lunes</h3>
                    <p>Pecho + Tríceps</p>
                </div>

                <div class="routine-day">
                    <h3>Martes</h3>
                    <p>Espalda + Bíceps</p>
                </div>

                <div class="routine-day">
                    <h3>Jueves</h3>
                    <p>Hombros + Abdomen</p>
                </div>

                <div class="routine-day">
                    <h3>Viernes</h3>
                    <p>Piernas + Glúteos</p>
                </div>

                <div class="routine-day">
                    <h3>Sábado</h3>
                    <p>Cardio y acondicionamiento</p>
                </div>

            </div>

        `;

    }


    else if (nivel === "avanzado") {

        html = `

            <div class="routine-content">

                <h2>🚀 Rutina Avanzada</h2>

                <p>
                    Rutina de mayor frecuencia para
                    personas con experiencia entrenando.
                </p>

                <div class="routine-day">
                    <h3>Lunes</h3>
                    <p>Pecho</p>
                </div>

                <div class="routine-day">
                    <h3>Martes</h3>
                    <p>Espalda</p>
                </div>

                <div class="routine-day">
                    <h3>Miércoles</h3>
                    <p>Piernas</p>
                </div>

                <div class="routine-day">
                    <h3>Jueves</h3>
                    <p>Hombros</p>
                </div>

                <div class="routine-day">
                    <h3>Viernes</h3>
                    <p>Bíceps + Tríceps</p>
                </div>

                <div class="routine-day">
                    <h3>Sábado</h3>
                    <p>Abdomen + Cardio</p>
                </div>

            </div>

        `;

    }


    else {

        html = `
            <p>
                Selecciona una rutina para comenzar.
            </p>
        `;

    }


    resultado.innerHTML = html;

}