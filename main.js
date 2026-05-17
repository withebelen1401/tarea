// ==========================================
// EL PROGRAMADOR COMELÓN NY
// Videojuego Educativo de JavaScript con Temas
// ==========================================

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 100;

// TEMAS Y SU TEORÍA
const themes = {
    variables: {
        name: "Variables",
        theory: [
            {
                title: "¿Qué es una variable?",
                text: "Una variable es un espacio de memoria que almacena un valor. Es como una caja donde guardamos datos.",
                code: "let nombre = 'Juan';\nlet edad = 25;"
            },
            {
                title: "Palabras clave: let, const y var",
                text: "let y const son las formas modernas. let permite cambiar el valor, const no. var es antigua, no la uses.",
                code: "let x = 10; // Puedo cambiar\nconst pi = 3.14; // No puedo cambiar\nx = 20; // ✓ Funciona"
            },
            {
                title: "Nombres de variables",
                text: "Deben empezar con letra, pueden incluir números y guiones bajos. Usa camelCase (nombreVariable).",
                code: "let miVariable = 5; // ✓ Correcto\nlet mi_variable = 5; // Funciona pero no es estándar"
            }
        ]
    },
    operadores: {
        name: "Operadores",
        theory: [
            {
                title: "Operadores aritméticos",
                text: "Sirven para hacer cálculos: suma (+), resta (-), multiplicación (*), división (/), módulo (%).",
                code: "let suma = 5 + 3; // 8\nlet resta = 10 - 4; // 6\nlet modulo = 10 % 3; // 1"
            },
            {
                title: "Operadores de comparación",
                text: "Comparan valores y retornan true o false. === es más seguro que == porque compara tipo y valor.",
                code: "5 === 5 // true\n5 === '5' // false\n5 == '5' // true (peligroso)"
            },
            {
                title: "Operadores lógicos",
                text: "AND (&&), OR (||) y NOT (!). Sirven para combinar condiciones.",
                code: "true && true // true\nfalse || true // true\n!true // false"
            }
        ]
    },
    arrays: {
        name: "Arrays",
        theory: [
            {
                title: "¿Qué es un Array?",
                text: "Es una lista que guarda múltiples valores en orden. Accedes con índices (empiezan en 0).",
                code: "let numeros = [1, 2, 3, 4];\nconsole.log(numeros[0]); // 1"
            },
            {
                title: "Métodos principales: push y pop",
                text: "push() agrega al final, pop() elimina el último elemento.",
                code: "let arr = [1, 2];\narr.push(3); // [1, 2, 3]\narr.pop(); // [1, 2]"
            },
            {
                title: "Método length",
                text: "Te dice cuántos elementos tiene el array.",
                code: "let arr = ['a', 'b', 'c'];\nconsole.log(arr.length); // 3"
            }
        ]
    },
    strings: {
        name: "Strings",
        theory: [
            {
                title: "¿Qué es un String?",
                text: "Es texto. Se declara con comillas simples '', comillas dobles \"\", o backticks ``.",
                code: "let nombre = 'Juan';\nlet apellido = \"Pérez\";\nlet completo = `${nombre} ${apellido}`;"
            },
            {
                title: "Propiedad length",
                text: "Te dice cuántos caracteres tiene el string.",
                code: "let texto = 'Hola';\nconsole.log(texto.length); // 4"
            },
            {
                title: "Métodos útiles",
                text: "toUpperCase() convierte a mayúsculas, toLowerCase() a minúsculas, includes() busca texto.",
                code: "let texto = 'JavaScript';\nconsole.log(texto.toUpperCase()); // JAVASCRIPT\nconsole.log(texto.includes('Script')); // true"
            }
        ]
    },
    condicionales: {
        name: "Condicionales",
        theory: [
            {
                title: "if - else",
                text: "Ejecuta código solo si una condición es verdadera.",
                code: "let edad = 18;\nif (edad >= 18) {\n  console.log('Eres mayor');\n} else {\n  console.log('Eres menor');\n}"
            },
            {
                title: "else if",
                text: "Permite múltiples condiciones.",
                code: "let nota = 8;\nif (nota >= 9) {\n  console.log('Sobresaliente');\n} else if (nota >= 7) {\n  console.log('Bien');\n} else {\n  console.log('Insuficiente');\n}"
            },
            {
                title: "Operador ternario",
                text: "Forma corta de if-else: condición ? valor_si_true : valor_si_false",
                code: "let edad = 20;\nlet estado = edad >= 18 ? 'Mayor' : 'Menor';"
            }
        ]
    },
    bucles: {
        name: "Bucles",
        theory: [
            {
                title: "for - Bucle clásico",
                text: "Repite un bloque un número específico de veces.",
                code: "for (let i = 0; i < 5; i++) {\n  console.log(i); // 0, 1, 2, 3, 4\n}"
            },
            {
                title: "while - Bucle condicional",
                text: "Repite mientras una condición sea verdadera.",
                code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}"
            },
            {
                title: "Métodos de arrays: forEach, map",
                text: "Recorren arrays. map() transforma, forEach() solo ejecuta.",
                code: "let arr = [1, 2, 3];\narr.forEach(num => console.log(num));\nlet doble = arr.map(num => num * 2); // [2, 4, 6]"
            }
        ]
    },
    funciones: {
        name: "Funciones",
        theory: [
            {
                title: "¿Qué es una función?",
                text: "Es un bloque de código reutilizable que hace una tarea específica.",
                code: "function saludar(nombre) {\n  return `Hola ${nombre}`;\n}\nconsole.log(saludar('Juan')); // Hola Juan"
            },
            {
                title: "Función flecha",
                text: "Forma moderna y corta de escribir funciones con =>",
                code: "const sumar = (a, b) => a + b;\nconsole.log(sumar(3, 5)); // 8"
            },
            {
                title: "Return",
                text: "Devuelve un valor de la función. Sin return, devuelve undefined.",
                code: "function multiplicar(a, b) {\n  return a * b;\n}\nlet resultado = multiplicar(4, 5); // 20"
            }
        ]
    },
    objetos: {
        name: "Objetos",
        theory: [
            {
                title: "¿Qué es un objeto?",
                text: "Almacena pares clave-valor. Es como un diccionario.",
                code: "let persona = {\n  nombre: 'Juan',\n  edad: 25,\n  ciudad: 'Madrid'\n};\nconsole.log(persona.nombre); // Juan"
            },
            {
                title: "Propiedades y métodos",
                text: "Las propiedades almacenan datos. Los métodos son funciones dentro del objeto.",
                code: "let coche = {\n  marca: 'Toyota',\n  arrancar: function() {\n    return 'El coche arranca';\n  }\n};"
            },
            {
                title: "Object.keys()",
                text: "Obtiene todas las claves del objeto como array.",
                code: "let objeto = { a: 1, b: 2, c: 3 };\nlet claves = Object.keys(objeto); // ['a', 'b', 'c']"
            }
        ]
    },
    tipos: {
        name: "Tipos de Datos",
        theory: [
            {
                title: "typeof - Identificar tipos",
                text: "Te dice qué tipo de dato es una variable.",
                code: "typeof 5 // 'number'\ntypeof 'texto' // 'string'\ntypeof true // 'boolean'\ntypeof undefined // 'undefined'"
            },
            {
                title: "Conversión de tipos",
                text: "Puedes convertir entre tipos. String() convierte a texto, Number() a número.",
                code: "let texto = '123';\nlet numero = Number(texto); // 123\nlet aTexto = String(456); // '456'"
            },
            {
                title: "Truthy y Falsy",
                text: "Valores que se comportan como true/false: false, 0, '', undefined, null son falsy.",
                code: "if (0) { } // No se ejecuta\nif (1) { } // Se ejecuta\nif ('') { } // No se ejecuta\nif ('texto') { } // Se ejecuta"
            }
        ]
    }
};

// PREGUNTAS POR TEMA
const questionsByTheme = {
    variables: [
        { question: "¿Cómo se declara una variable?", options: ["int x", "let x", "value x", "make x"], correct: 1, explanation: "En JavaScript moderno, usamos 'let' para declarar variables." },
        { question: "¿Qué palabra crea constante?", options: ["let", "const", "varr", "define"], correct: 1, explanation: "'const' se usa para declarar constantes que no pueden cambiar." }
    ],
    operadores: [
        { question: "¿Qué operador suma?", options: ["-", "*", "+", "/"], correct: 2, explanation: "El operador '+' se utiliza para sumar números." },
        { question: "¿Qué significa ===?", options: ["Suma", "Comparación estricta", "División", "Comentario"], correct: 1, explanation: "'===' compara valores sin hacer conversión de tipos." }
    ],
    arrays: [
        { question: "¿Qué método agrega datos al array?", options: ["pop()", "push()", "shift()", "slice()"], correct: 1, explanation: "push() agrega elementos al final de un array." },
        { question: "¿Qué estructura almacena varios datos?", options: ["String", "Boolean", "Array", "Float"], correct: 2, explanation: "Los Arrays almacenan múltiples valores en una sola variable." }
    ],
    strings: [
        { question: "¿Qué tipo de dato es 'Hola'?", options: ["Number", "String", "Boolean", "Array"], correct: 1, explanation: "Los textos entre comillas son strings (cadenas de texto)." },
        { question: "¿Qué imprime console.log('Hola'.length)?", options: ["undefined", "5", "4", "Error"], correct: 2, explanation: "'Hola' tiene 4 caracteres, entonces .length retorna 4." }
    ],
    condicionales: [
        { question: "¿Qué hace if?", options: ["Repite código", "Evalúa condición", "Crea variable", "Define función"], correct: 1, explanation: "if evalúa una condición y ejecuta código si es verdadera." },
        { question: "¿Qué valor representa verdadero?", options: ["false", "0", "true", "null"], correct: 2, explanation: "En JavaScript, 'true' es el valor booleano que representa verdadero." }
    ],
    bucles: [
        { question: "¿Qué hace for?", options: ["Crea variable", "Define función", "Repite instrucciones", "Evalúa condición"], correct: 2, explanation: "for repite un bloque de código un número específico de veces." },
        { question: "¿Qué hace map()?", options: ["Filtra array", "Recorre y transforma arrays", "Ordena array", "Busca elemento"], correct: 1, explanation: "map() recorre cada elemento y aplica una función, retornando un nuevo array." }
    ],
    funciones: [
        { question: "¿Cómo se llama una función?", options: ["define miFunc()", "miFunc()", "function miFunc", "call miFunc"], correct: 1, explanation: "Se llama una función escribiendo su nombre seguido de paréntesis: miFunc()" },
        { question: "¿Qué es una función flecha?", options: ["for", "=>", "if", "let"], correct: 1, explanation: "=> es la sintaxis de función flecha en ES6." }
    ],
    objetos: [
        { question: "¿Qué hace Object.keys()?", options: ["Obtiene valores", "Obtiene propiedades", "Cuenta propiedades", "Elimina propiedad"], correct: 1, explanation: "Object.keys() retorna un array con las claves del objeto." },
        { question: "¿Qué imprime console.log(typeof 5)?", options: ["string", "number", "boolean", "object"], correct: 1, explanation: "typeof 5 retorna 'number' porque 5 es un número." }
    ],
    tipos: [
        { question: "¿Qué imprime console.log(typeof 'Hola')?", options: ["number", "object", "string", "array"], correct: 2, explanation: "typeof 'Hola' retorna 'string' porque es texto." },
        { question: "¿Qué imprime console.log(typeof null)?", options: ["null", "object", "undefined", "error"], correct: 1, explanation: "Curiosamente, typeof null retorna 'object' por un bug histórico de JavaScript." }
    ]
};

// ESTADO DEL JUEGO
let gameState = {
    playerName: '',
    difficulty: 'easy',
    score: 0,
    lives: 3,
    correctAnswers: 0,
    currentQuestionIndex: 0,
    currentQuestion: null,
    currentTheme: null,
    gameActive: false,
    canAnswer: true,
    themesCompleted: 0,
    pelletsEaten: 0
};

// ESTADO PAC-MAN
let pacmanState = {
    x: 5,
    y: 5,
    direction: 'right',
    nextDirection: 'right',
    mouthOpen: true,
    animationFrame: 0
};

let eatenPellets = new Set();
let canvas, ctx;
let gameLoop;
let allThemesList = [];

// INICIALIZAR TEMAS
function initializeThemes() {
    allThemesList = Object.keys(themes);
    if (allThemesList.length === 0) {
        allThemesList = ['variables'];
    }
}

// ==========================================
// INICIO DEL JUEGO
// ==========================================

function startGame() {
    const playerName = document.getElementById('playerName').value.trim();
    const difficulty = document.getElementById('difficulty').value;

    if (!playerName) {
        alert('Por favor, ingresa tu nombre');
        return;
    }

    gameState.playerName = playerName;
    gameState.difficulty = difficulty;
    gameState.score = 0;
    gameState.lives = 3;
    gameState.correctAnswers = 0;
    gameState.currentQuestionIndex = 0;
    gameState.gameActive = true;
    gameState.themesCompleted = 0;
    gameState.pelletsEaten = 0;

    pacmanState.x = 5;
    pacmanState.y = 5;
    pacmanState.direction = 'right';
    pacmanState.nextDirection = 'right';

    eatenPellets.clear();
    initializeThemes();

    switchScreen('gameScreen');
    initializeGame();
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ==========================================
// INICIALIZACIÓN DEL JUEGO
// ==========================================

function initializeGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    canvas.width = GRID_SIZE * CELL_SIZE;
    canvas.height = GRID_SIZE * CELL_SIZE;

    updateGameUI();
    loadNextQuestion();

    gameLoop = setInterval(() => {
        updateGame();
        drawGame();
    }, GAME_SPEED);
}

// ==========================================
// ACTUALIZACIÓN DEL JUEGO
// ==========================================

function updateGame() {
    if (!gameState.gameActive) return;

    pacmanState.direction = pacmanState.nextDirection;

    let newX = pacmanState.x;
    let newY = pacmanState.y;

    if (pacmanState.direction === 'right') newX++;
    if (pacmanState.direction === 'left') newX--;
    if (pacmanState.direction === 'up') newY--;
    if (pacmanState.direction === 'down') newY++;

    if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
        pacmanState.x = newX;
        pacmanState.y = newY;
    }

    // Pac-Man come pellets
    const pelletKey = `${pacmanState.x},${pacmanState.y}`;
    if (!eatenPellets.has(pelletKey) && shouldHavePellet(pacmanState.x, pacmanState.y)) {
        eatenPellets.add(pelletKey);
        gameState.pelletsEaten++;
        document.getElementById('questionsMini').textContent = gameState.pelletsEaten;
    }

    pacmanState.animationFrame++;
    if (pacmanState.animationFrame % 2 === 0) {
        pacmanState.mouthOpen = !pacmanState.mouthOpen;
    }
}

function shouldHavePellet(x, y) {
    return (x + y) % 3 === 0;
}

// ==========================================
// DIBUJO DEL JUEGO
// ==========================================

function drawGame() {
    ctx.fillStyle = '#f0f8fc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(0, 150, 200, 0.08)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(canvas.width, i * CELL_SIZE);
        ctx.stroke();
    }

    drawPellets();
    drawPacman();
}

function drawPellets() {
    ctx.fillStyle = 'rgba(0, 150, 200, 0.7)';

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (i === pacmanState.x && j === pacmanState.y) continue;

            const pelletKey = `${i},${j}`;
            if (eatenPellets.has(pelletKey)) continue;

            if (shouldHavePellet(i, j)) {
                ctx.beginPath();
                ctx.arc(i * CELL_SIZE + CELL_SIZE / 2, j * CELL_SIZE + CELL_SIZE / 2, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
}

function drawPacman() {
    const x = pacmanState.x * CELL_SIZE + CELL_SIZE / 2;
    const y = pacmanState.y * CELL_SIZE + CELL_SIZE / 2;
    const radius = CELL_SIZE / 2 - 2;

    const colors = ['#FFD700', '#FFA500', '#FF8C00'];
    ctx.fillStyle = colors[Math.floor(pacmanState.animationFrame / 5) % colors.length];

    const mouthOpen = pacmanState.mouthOpen ? 0.3 : 0.1;
    let startAngle = 0;
    let endAngle = Math.PI * 2;

    if (pacmanState.direction === 'right') {
        startAngle = mouthOpen;
        endAngle = Math.PI * 2 - mouthOpen;
    } else if (pacmanState.direction === 'left') {
        startAngle = Math.PI + mouthOpen;
        endAngle = Math.PI - mouthOpen;
    } else if (pacmanState.direction === 'up') {
        startAngle = Math.PI / 2 + mouthOpen;
        endAngle = Math.PI / 2 - mouthOpen;
    } else if (pacmanState.direction === 'down') {
        startAngle = Math.PI * 1.5 + mouthOpen;
        endAngle = Math.PI * 1.5 - mouthOpen;
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineTo(x, y);
    ctx.fill();

    ctx.fillStyle = '#000';
    const eyeDistance = radius / 2;
    const eyeX = x + Math.cos(startAngle) * eyeDistance;
    const eyeY = y + Math.sin(startAngle) * eyeDistance;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 2, 0, Math.PI * 2);
    ctx.fill();
}

// ==========================================
// SISTEMA DE PREGUNTAS Y TEMAS
// ==========================================

function loadNextQuestion() {
    const themeKey = allThemesList[Math.floor(Math.random() * allThemesList.length)];
    gameState.currentTheme = themeKey;

    const themeQuestions = questionsByTheme[themeKey] || [];
    if (themeQuestions.length === 0) {
        loadNextQuestion();
        return;
    }

    gameState.currentQuestion = themeQuestions[Math.floor(Math.random() * themeQuestions.length)];
    gameState.currentQuestionIndex++;
    gameState.canAnswer = true;

    displayQuestion();
    displayTheory();
}

function displayQuestion() {
    const q = gameState.currentQuestion;
    const themeName = themes[gameState.currentTheme].name;

    document.getElementById('questionCount').textContent = `Pregunta ${gameState.currentQuestionIndex}`;
    document.getElementById('topicBadge').textContent = `📖 ${themeName}`;
    document.getElementById('questionText').textContent = q.question;

    const shuffledAnswers = [...q.options].sort(() => Math.random() - 0.5);
    const correctIndex = shuffledAnswers.indexOf(q.options[q.correct]);

    const container = document.getElementById('answersContainer');
    container.innerHTML = '';

    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index, correctIndex);
        button.disabled = !gameState.canAnswer;
        container.appendChild(button);
    });

    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').classList.remove('show', 'correct-feedback', 'incorrect-feedback');
    document.getElementById('nextButton').classList.remove('show');
}

function displayTheory() {
    const theme = themes[gameState.currentTheme];
    const theoryContainer = document.getElementById('theoryContent');
    theoryContainer.innerHTML = '';

    theme.theory.forEach(item => {
        const theoryDiv = document.createElement('div');
        theoryDiv.className = 'theory-item';
        theoryDiv.innerHTML = `
            <div class="theory-title">${item.title}</div>
            <div class="theory-text">${item.text}</div>
            <div class="code-block">${item.code}</div>
        `;
        theoryContainer.appendChild(theoryDiv);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    if (!gameState.canAnswer) return;

    gameState.canAnswer = false;

    const buttons = document.querySelectorAll('.answer-button');
    const q = gameState.currentQuestion;

    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');

    if (selectedIndex === correctIndex) {
        gameState.score += 10;
        gameState.correctAnswers++;
        gameState.themesCompleted++;

        buttons[selectedIndex].classList.add('correct');
        feedback.classList.add('correct-feedback', 'show');
        feedback.innerHTML = `<strong>✓ ¡Correcto! Tema completado: ${themes[gameState.currentTheme].name}</strong><br>${q.explanation}`;

        playSuccessEffect();
    } else {
        gameState.lives--;
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
        feedback.classList.add('incorrect-feedback', 'show');
        feedback.innerHTML = `<strong>✗ Incorrecto</strong><br>${q.explanation}`;

        playErrorEffect();
    }

    updateGameUI();

    if (gameState.lives <= 0) {
        setTimeout(gameOver, 1500);
    } else {
        nextButton.classList.add('show');
    }
}

function nextQuestion() {
    if (gameState.lives > 0) {
        loadNextQuestion();
    }
}

// ==========================================
// INTERFAZ
// ==========================================

function updateGameUI() {
    document.getElementById('playerDisplayName').textContent = gameState.playerName;
    document.getElementById('scoreDisplay').textContent = gameState.score;
    document.getElementById('livesDisplay').textContent = gameState.lives;
    document.getElementById('levelDisplay').textContent = gameState.difficulty === 'easy' ? '1 - Fácil' : gameState.difficulty === 'medium' ? '2 - Medio' : '3 - Difícil';
    document.getElementById('correctDisplay').textContent = gameState.correctAnswers;

    document.getElementById('scoreMini').textContent = gameState.score;
    document.getElementById('livesMini').textContent = gameState.lives;
    document.getElementById('levelMini').textContent = gameState.difficulty === 'easy' ? '1' : gameState.difficulty === 'medium' ? '2' : '3';
    document.getElementById('questionsMini').textContent = gameState.pelletsEaten;
}

// ==========================================
// GAME OVER
// ==========================================

function gameOver() {
    gameState.gameActive = false;
    clearInterval(gameLoop);

    document.getElementById('finalPlayerName').textContent = gameState.playerName;
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalCorrect').textContent = gameState.correctAnswers;
    document.getElementById('finalTopics').textContent = gameState.themesCompleted;

    switchScreen('gameOverScreen');
}

function restartGame() {
    switchScreen('startScreen');
    document.getElementById('playerName').value = '';
    document.getElementById('difficulty').value = 'easy';
}

// ==========================================
// EFECTOS
// ==========================================

function playSuccessEffect() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.animation = 'none';
    setTimeout(() => {
        scoreDisplay.style.animation = 'pulse 0.3s ease';
    }, 10);
}

function playErrorEffect() {
    const livesDisplay = document.getElementById('livesDisplay');
    livesDisplay.style.animation = 'none';
    setTimeout(() => {
        livesDisplay.style.animation = 'shake 0.3s ease';
    }, 10);
}

// ==========================================
// CONTROLES
// ==========================================

document.addEventListener('keydown', (e) => {
    if (!gameState.gameActive) return;

    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') pacmanState.nextDirection = 'right';
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') pacmanState.nextDirection = 'left';
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') pacmanState.nextDirection = 'up';
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') pacmanState.nextDirection = 'down';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
