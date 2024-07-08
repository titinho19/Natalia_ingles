// Definición de las preguntas
const questions = [
    {
        word: "apple",
        options: ["manzana", "naranja", "plátano", "uva", "pera"],
        context: "I love to eat a fresh apple every morning."
    },
    {
        word: "dog",
        options: ["perro", "gato", "conejo", "pájaro", "pez"],
        context: "She has a cute dog named Max."
    },
    {
        word: "book",
        options: ["libro", "pelota", "flor", "casa", "árbol"],
        context: "I enjoy reading a good book before bedtime."
    },
    {
        word: "sun",
        options: ["sol", "luna", "estrella", "nube", "rayo"],
        context: "The sun shines brightly in the sky."
    },
    {
        word: "car",
        options: ["coche", "avión", "bicicleta", "tren", "barco"],
        context: "They drove a red car to the beach."
    },
    {
        word: "happy",
        options: ["feliz", "triste", "enojado", "asustado", "cansado"],
        context: "She is always happy when she sees her friends."
    },
    {
        word: "school",
        options: ["escuela", "parque", "supermercado", "hospital", "teatro"],
        context: "He goes to school every weekday."
    },
    {
        word: "tree",
        options: ["árbol", "flor", "arbusto", "hierba", "fruta"],
        context: "There is a big oak tree in their backyard."
    },
    {
        word: "water",
        options: ["agua", "fuego", "aire", "tierra", "hielo"],
        context: "They like to drink cold water on hot days."
    },
    {
        word: "family",
        options: ["familia", "amigo", "vecino", "extraño", "compañero"],
        context: "They visited their family during the holidays."
    },
    {
        word: "friend",
        options: ["amigo", "enemigo", "desconocido", "compañero", "vecino"],
        context: "She has a best friend who lives next door."
    },
    {
        word: "music",
        options: ["música", "pintura", "poesía", "teatro", "danza"],
        context: "He listens to music while doing his homework."
    },
    {
        word: "beach",
        options: ["playa", "montaña", "río", "lago", "bosque"],
        context: "They went swimming at the beach yesterday."
    },
    {
        word: "computer",
        options: ["computadora", "teléfono", "televisión", "radio", "reloj"],
        context: "She uses her computer to do research for school."
    },
    {
        word: "football",
        options: ["fútbol", "tenis", "baloncesto", "golf", "béisbol"],
        context: "He plays football with his friends every weekend."
    },
    {
        word: "movie",
        options: ["película", "libro", "canción", "juego", "pintura"],
        context: "They watched a funny movie last night."
    },
    {
        word: "banana",
        options: ["plátano", "manzana", "naranja", "uva", "pera"],
        context: "She likes to eat a banana for breakfast."
    },
    {
        word: "garden",
        options: ["jardín", "parque", "bosque", "campo", "huerto"],
        context: "They planted flowers in their garden."
    },
    {
        word: "house",
        options: ["casa", "apartamento", "edificio", "hotel", "tienda"],
        context: "They live in a small house near the park."
    },
    {
        word: "doctor",
        options: ["doctor", "enfermera", "policía", "bombero", "maestro"],
        context: "She went to the doctor for her check-up."
    },
    {
        word: "orange",
        options: ["naranja", "manzana", "plátano", "uva", "pera"],
        context: "They bought fresh oranges at the market."
    },
    {
        word: "cat",
        options: ["gato", "perro", "conejo", "pájaro", "pez"],
        context: "They have a black cat named Luna."
    },
    {
        word: "basketball",
        options: ["baloncesto", "fútbol", "tenis", "golf", "béisbol"],
        context: "He enjoys playing basketball after school."
    },
    {
        word: "train",
        options: ["tren", "avión", "coche", "barco", "bicicleta"],
        context: "They took a train to visit their grandparents."
    },
    {
        word: "watch",
        options: ["reloj", "teléfono", "computadora", "televisión", "radio"],
        context: "He wears a watch every day to school."
    },
    {
        word: "bird",
        options: ["pájaro", "perro", "gato", "conejo", "pez"],
        context: "They saw a colorful bird in the park."
    },
    {
        word: "rain",
        options: ["lluvia", "nieve", "viento", "sol", "tormenta"],
        context: "It rained heavily last night."
    },
    {
        word: "game",
        options: ["juego", "película", "libro", "canción", "pintura"],
        context: "They play games with their friends on weekends."
    },
    {
        word: "pencil",
        options: ["lápiz", "pluma", "pincel", "marcador", "tijeras"],
        context: "She used a pencil to write her name."
    },
    {
        word: "soccer",
        options: ["fútbol", "tenis", "baloncesto", "golf", "béisbol"],
        context: "He plays soccer with his school team."
    },
    {
        word: "bed",
        options: ["cama", "silla", "mesa", "armario", "sofá"],
        context: "They sleep in a comfortable bed."
    },
    {
        word: "teacher",
        options: ["maestro", "alumno", "director", "enfermera", "doctor"],
        context: "She is a very kind teacher."
    },
    {
        word: "bicycle",
        options: ["bicicleta", "coche", "tren", "avión", "barco"],
        context: "He rides his bicycle to school every day."
    },
    {
        word: "sky",
        options: ["cielo", "mar", "montaña", "desierto", "bosque"],
        context: "They saw a shooting star in the night sky."
    },
    {
        word: "cookie",
        options: ["galleta", "pastel", "helado", "chocolate", "fruta"],
        context: "She likes to eat chocolate chip cookies."
    },
    {
        word: "phone",
        options: ["teléfono", "computadora", "televisión", "radio", "reloj"],
        context: "They use their phone to call their friends."
    },
    {
        word: "basket",
        options: ["canasta", "bolsa", "caja", "bandeja", "taza"],
        context: "He put the apples in the basket."
    },
    {
        word: "summer",
        options: ["verano", "invierno", "primavera", "otoño", "estación"],
        context: "They go swimming in the lake every summer."
    },
    {
        word: "milk",
        options: ["leche", "jugo", "agua", "té", "refresco"],
        context: "She drinks a glass of milk before bed."
    },
    {
        word: "doctor",
        options: ["doctor", "enfermera", "policía", "bombero", "maestro"],
        context: "She went to the doctor for her check-up."
    },
    {
        word: "purple",
        options: ["morado", "rojo", "verde", "azul", "amarillo"],
        context: "Her favorite color is purple."
    },
    {
        word: "butterfly",
        options: ["mariposa", "abeja", "mosquito", "libélula", "escarabajo"],
        context: "They saw a beautiful butterfly in the garden."
    },
    {
        word: "football",
        options: ["fútbol", "tenis", "baloncesto", "golf", "béisbol"],
        context: "He plays football with his friends every weekend."
    },
    {
        word: "jacket",
        options: ["chaqueta", "camisa", "pantalón", "vestido", "zapatos"],
        context: "He wears a warm jacket in the winter."
    },
    {
        word: "tiger",
        options: ["tigre", "león", "oso", "lobo", "jaguar"],
        context: "They saw a tiger at the zoo."
    },
    {
        word: "gift",
        options: ["regalo", "carta", "tarjeta", "flores", "globos"],
        context: "She received a nice gift on her birthday."
    },
    {
        word: "bedroom",
        options: ["dormitorio", "cocina", "baño", "sala", "comedor"],
        context: "They painted their bedroom walls blue."
    },
    {
        word: "rainbow",
        options: ["arcoíris", "nube", "lluvia", "tormenta", "sol"],
        context: "They saw a beautiful rainbow after the rain."
    },
    {
        word: "guitar",
        options: ["guitarra", "piano", "batería", "violín", "flauta"],
        context: "He likes to play the guitar in his free time."
    },
    {
        word: "rabbit",
        options: ["conejo", "gato", "perro", "pez", "pájaro"],
        context: "They have a pet rabbit named Snowflake."
    },
    {
        word: "cookie",
        options: ["galleta", "pastel", "helado", "chocolate", "fruta"],
        context: "She likes to eat chocolate chip cookies."
    },
    {
        word: "elephant",
        options: ["elefante", "jirafa", "hipopótamo", "rinoceronte", "león"],
        context: "They saw an elephant at the zoo."
    },
    {
        word: "hat",
        options: ["sombrero", "gorra", "boina", "bufanda", "guantes"],
        context: "She wears a hat to protect herself from the sun."
    },
    {
        word: "piano",
        options: ["piano", "guitarra", "batería", "violín", "flauta"],
        context: "He practices playing the piano every day."
    },
    {
        word: "bear",
        options: ["oso", "tigre", "león", "lobo", "jaguar"],
        context: "They saw a bear in the forest."
    },
    {
        word: "swim",
        options: ["nadar", "correr", "saltar", "bailar", "cantar"],
        context: "They like to swim in the pool during the summer."
    },
    {
        word: "cake",
        options: ["pastel", "galleta", "helado", "chocolate", "fruta"],
        context: "They had a delicious cake at the birthday party."
    },
    {
        word: "winter",
        options: ["invierno", "verano", "primavera", "otoño", "estación"],
        context: "They build snowmen in the winter."
    },
    {
        word: "bathroom",
        options: ["baño", "cocina", "dormitorio", "sala", "comedor"],
        context: "They brushed their teeth in the bathroom."
    },
    {
        word: "skate",
        options: ["patinar", "nadar", "correr", "saltar", "bailar"],
        context: "He likes to skate at the ice rink."
    },
    {
        word: "snow",
        options: ["nieve", "lluvia", "viento", "sol", "tormenta"],
        context: "They played in the snow during winter."
    },
    {
        word: "clock",
        options: ["reloj", "teléfono", "computadora", "televisión", "radio"],
        context: "They have a big clock in their living room."
    },
    {
        word: "summer",
        options: ["verano", "invierno", "primavera", "otoño", "estación"],
        context: "They go swimming in the lake every summer."
    },
    {
        word: "chef",
        options: ["chef", "mesero", "cocinero", "cliente", "panadero"],
        context: "He wants to become a chef when he grows up."
    },
    {
        word: "boat",
        options: ["barco", "coche", "tren", "avión", "bicicleta"],
        context: "They went fishing on a boat."
    },
    {
        word: "butterfly",
        options: ["mariposa", "abeja", "mosquito", "libélula", "escarabajo"],
        context: "They saw a beautiful butterfly in the garden."
    },
    {
        word: "doctor",
        options: ["doctor", "enfermera", "policía", "bombero", "maestro"],
        context: "She went to the doctor for her check-up."
    },
    {
        word: "purple",
        options: ["morado", "rojo", "verde", "azul", "amarillo"],
        context: "Her favorite color is purple."
    },
    {
        word: "butterfly",
        options: ["mariposa", "abeja", "mosquito", "libélula", "escarabajo"],
        context: "They saw a beautiful butterfly in the garden."
    },
    {
        word: "football",
        options: ["fútbol", "tenis", "baloncesto", "golf", "béisbol"],
        context: "He plays football with his friends every weekend."
    },
    {
        word: "jacket",
        options: ["chaqueta", "camisa", "pantalón", "vestido", "zapatos"],
        context: "He wears a warm jacket in the winter."
    },
    {
        word: "tiger",
        options: ["tigre", "león", "oso", "lobo", "jaguar"],
        context: "They saw a tiger at the zoo."
    },
    {
        word: "gift",
        options: ["regalo", "carta", "tarjeta", "flores", "globos"],
        context: "She received a nice gift on her birthday."
    },
    {
        word: "bedroom",
        options: ["dormitorio", "cocina", "baño", "sala", "comedor"],
        context: "They painted their bedroom walls blue."
    },
    {
        word: "rainbow",
        options: ["arcoíris", "nube", "lluvia", "tormenta", "sol"],
        context: "They saw a beautiful rainbow after the rain."
    },
    {
        word: "guitar",
        options: ["guitarra", "piano", "batería", "violín", "flauta"],
        context: "He likes to play the guitar in his free time."
    },
    {
        word: "rabbit",
        options: ["conejo", "gato", "perro", "pez", "pájaro"],
        context: "They have a pet rabbit named Snowflake."
    },
    {
        word: "cookie",
        options: ["galleta", "pastel", "helado", "chocolate", "fruta"],
        context: "She likes to eat chocolate chip cookies."
    },
    {
        word: "elephant",
        options: ["elefante", "jirafa", "hipopótamo", "rinoceronte", "león"],
        context: "They saw an elephant at the zoo."
    },
    {
        word: "hat",
        options: ["sombrero", "gorra", "boina", "bufanda", "guantes"],
        context: "She wears a hat to protect herself from the sun."
    },
    {
        word: "piano",
        options: ["piano", "guitarra", "batería", "violín", "flauta"],
        context: "He practices playing the piano every day."
    },
    {
        word: "bear",
        options: ["oso", "tigre", "león", "lobo", "jaguar"],
        context: "They saw a bear in the forest."
    },
    {
        word: "swim",
        options: ["nadar", "correr", "saltar", "bailar", "cantar"],
        context: "They like to swim in the pool during the summer."
    },
    {
        word: "cake",
        options: ["pastel", "galleta", "helado", "chocolate", "fruta"],
        context: "They had a delicious cake at the birthday party."
    },
    {
        word: "winter",
        options: ["invierno", "verano", "primavera", "otoño", "estación"],
        context: "They build snowmen in the winter."
    },
    {
        word: "bathroom",
        options: ["baño", "cocina", "dormitorio", "sala", "comedor"],
        context: "They brushed their teeth in the bathroom."
    },
    {
        word: "skate",
        options: ["patinar", "nadar", "correr", "saltar", "bailar"],
        context: "He likes to skate at the ice rink."
    },
    {
        word: "snow",
        options: ["nieve", "lluvia", "viento", "sol", "tormenta"],
        context: "They played in the snow during winter."
    },
    {
        word: "clock",
        options: ["reloj", "teléfono", "computadora", "televisión", "radio"],
        context: "They have a big clock in their living room."
    },
    {
        word: "summer",
        options: ["verano", "invierno", "primavera", "otoño", "estación"],
        context: "They go swimming in the lake every summer."
    },
    {
        word: "chef",
        options: ["chef", "mesero", "cocinero", "cliente", "panadero"],
        context: "He wants to become a chef when he grows up."
    },
    {
        word: "boat",
        options: ["barco", "coche", "tren", "avión", "bicicleta"],
        context: "They went fishing on a boat."
    },
    {
        word: "rainbow",
        options: ["arcoíris", "nube", "lluvia", "tormenta", "sol"],
        context: "They saw a beautiful rainbow after the rain."
    },
    {
        word: "guitar",
        options: ["guitarra", "piano", "batería", "violín", "flauta"],
        context: "He likes to play the guitar in his free time."
    },
    {
        word: "rabbit",
        options: ["conejo", "gato", "perro", "pez", "pájaro"],
        context: "They have a pet rabbit named Snowflake."
    },
    {
        word: "cookie",
        options: ["galleta", "pastel", "helado", "chocolate", "fruta"],
        context: "She likes to eat chocolate chip cookies."
    },
    {
        word: "elephant",
        options: ["elefante", "jirafa", "hipopótamo", "rinoceronte", "león"],
        context: "They saw an elephant at the zoo."
    },
    {
        word: "hat",
        options: ["sombrero", "gorra", "boina", "bufanda", "guantes"],
        context: "She wears a hat to protect herself from the sun."
    },
    {
        word: "piano",
        options: ["piano", "guitarra", "batería", "violín", "flauta"],
        context: "He practices playing the piano every day."
    },
    {
        word: "bear",
        options: ["oso", "tigre", "león", "lobo", "jaguar"],
        context: "They saw a bear in the forest."
    },
    {
        word: "swim",
        options: ["nadar", "correr", "saltar", "bailar", "cantar"],
        context: "They like to swim in the pool during the summer."
    },
    {
        word: "cake",
        options: ["pastel", "galleta", "helado", "chocolate", "fruta"],
        context: "They had a delicious cake at the birthday party."
    },
    {
        word: "winter",
        options: ["invierno", "verano", "primavera", "otoño", "estación"],
        context: "They build snowmen in the winter."
    },
    {
        word: "bathroom",
        options: ["baño", "cocina", "dormitorio", "sala", "comedor"],
        context: "They brushed their teeth in the bathroom."
    },
    {
        word: "skate",
        options: ["patinar", "nadar", "correr", "saltar", "bailar"],
        context: "He likes to skate at the ice rink."
    },
    {
        word: "snow",
        options: ["nieve", "lluvia", "viento", "sol", "tormenta"],
        context: "They played in the snow during winter."
    },
    {
        word: "clock",
        options: ["reloj", "teléfono", "computadora", "televisión", "radio"],
        context: "They have a big clock in their living room."
    },
    {
        word: "summer",
        options: ["verano", "invierno", "primavera", "otoño", "estación"],
        context: "They go swimming in the lake every summer."
    },
    {
        word: "chef",
        options: ["chef", "mesero", "cocinero", "cliente", "panadero"],
        context: "He wants to become a chef when he grows up."
    },
    {
        word: "boat",
        options: ["barco", "coche", "tren", "avión", "bicicleta"],
        context: "They went fishing on a boat."
    },
    {
        word: "rainbow",
        options: ["arcoíris", "nube", "lluvia", "tormenta", "sol"],
        context: "They saw a beautiful rainbow after the rain."
    },
    {
        word: "guitar",
        options: ["guitarra", "piano", "batería", "violín", "flauta"],
        context: "He likes to play the guitar in his free time."
    },
    {
        word: "rabbit",
        options: ["conejo", "gato", "perro", "pez", "pájaro"],
        context: "They have a pet rabbit named Snowflake."
    },
    {
        word: "cookie",
        options: ["galleta", "pastel", "helado", "chocolate", "fruta"],
        context: "She likes to eat chocolate chip cookies."
    },
    {
        word: "elephant",
        options: ["elefante", "jirafa", "hipopótamo", "rinoceronte", "león"],
        context: "They saw an elephant at the zoo."
    },
    {
        word: "hat",
        options: ["sombrero", "gorra", "boina", "bufanda", "guantes"],
        context: "She wears a hat to protect herself from the sun."
    },
    {
        word: "piano",
        options: ["piano", "guitarra", "batería", "violín", "flauta"],
        context: "He practices playing the piano every day."
    },
    {
        word: "bear",
        options: ["oso", "tigre", "león", "lobo", "jaguar"],
        context: "They saw a bear in the forest."
    },
    {
        word: "swim",
        options: ["nadar", "correr", "saltar", "bailar", "cantar"],
        context: "They like to swim in the pool during the summer."
    },
    {
        word: "cake",
        options: ["pastel", "galleta", "helado", "chocolate", "fruta"],
        context: "They had a delicious cake at the birthday party."
    },
    {
        word: "winter",
        options: ["invierno", "verano", "primavera", "otoño", "estación"],
        context: "They build snowmen in the winter."
    },
    {
        word: "bathroom",
        options: ["baño", "cocina", "dormitorio", "sala", "comedor"],
        context: "They brushed their teeth in the bathroom."
    },
    {
        word: "skate",
        options: ["patinar", "nadar", "correr", "saltar", "bailar"],
        context: "He likes to skate at the ice rink."
    },
    {
        word: "snow",
        options: ["nieve", "lluvia", "viento", "sol", "tormenta"],
        context: "They played in the snow during winter."
    },
    {
        word: "clock",
        options: ["reloj", "teléfono", "computadora", "televisión", "radio"],
        context: "They have a big clock in their living room."
    }
    
];

let currentQuestionIndex = 0;
let score = 0;

// Función para cargar la siguiente pregunta
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-word').textContent = currentQuestion.word.toUpperCase();

    // Barajar opciones de respuesta
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    const optionsButtons = document.querySelectorAll('.option-btn');
    for (let i = 0; i < optionsButtons.length; i++) {
        optionsButtons[i].textContent = shuffledOptions[i].toUpperCase();
        optionsButtons[i].classList.remove('correct', 'incorrect'); // Limpiar clases anteriores
        optionsButtons[i].disabled = false; // Habilitar botones
    }

    document.getElementById('question-context').textContent = currentQuestion.context;
    document.getElementById('feedback').textContent = ''; // Limpiar feedback anterior
    document.getElementById('controls').style.display = 'none'; // Ocultar controles de siguiente pregunta
}

// Función para barajar un array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Verificar la respuesta
function checkAnswer(optionText) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.options[0]; // La respuesta correcta siempre está en la posición 0

    const optionButtons = document.querySelectorAll('.option-btn');
    let selectedOption = '';
    for (let button of optionButtons) {
        if (button.textContent === optionText) {
            selectedOption = button;
        }
    }

    if (optionText.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById('feedback').textContent = '¡Respuesta correcta!';
        selectedOption.classList.add('correct');
    } else {
        document.getElementById('feedback').textContent = 'Respuesta incorrecta. La respuesta correcta es: ' + correctAnswer.toUpperCase();
        selectedOption.classList.add('incorrect');
    }

    // Deshabilitar botones después de responder
    for (let button of optionButtons) {
        button.disabled = true;
    }

    document.getElementById('controls').style.display = 'block'; // Mostrar botón de siguiente pregunta
}

// Función para avanzar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Mostrar resultados finales
        document.getElementById('question').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('score').textContent = score;
        document.getElementById('total').textContent = questions.length;
    }
}

// Cargar la primera pregunta al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    shuffleArray(questions); // Barajar el array de preguntas al inicio
    loadQuestion();
});