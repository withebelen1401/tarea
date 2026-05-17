// ==========================================
// EL PROGRAMADOR COMELÓN NY
// Videojuego Educativo de JavaScript
// ==========================================

// CONFIGURACIÓN GLOBAL
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 200;

// BANCO DE PREGUNTAS
const questions = {
    easy: [
        {
            question: "¿Qué hace console.log()?",
            options: ["Borra datos", "Muestra datos en consola", "Cierra el programa", "Guarda archivos"],
            correct: 1,
            explanation: "console.log() muestra información en la consola del navegador para debugging."
        },
        {
            question: "¿Cómo se declara una variable?",
            options: ["int x", "let x", "value x", "make x"],
            correct: 1,
            explanation: "En JavaScript moderno, usamos 'let' para declarar variables con alcance de bloque."
        },
        {
            question: "¿Qué imprime console.log(2 + 3)?",
            options: ["23", "5", "Error", "undefined"],
            correct: 1,
            explanation: "2 + 3 es una suma matemática que resulta en 5."
        },
        {
            question: "¿Qué tipo de dato es 'Hola'?",
            options: ["Number", "String", "Boolean", "Array"],
            correct: 1,
            explanation: "Los textos entre comillas son strings (cadenas de texto)."
        },
        {
            question: "¿Qué valor representa verdadero?",
            options: ["false", "0", "true", "null"],
            correct: 2,
            explanation: "En JavaScript, 'true' es el valor booleano que representa verdadero."
        },
        {
            question: "¿Qué símbolo es para comentarios?",
            options: ["//", "##", "<!--", "**"],
            correct: 0,
            explanation: "// es el símbolo para comentarios de una línea en JavaScript."
        },
        {
            question: "¿Qué hace let edad = 20?",
            options: ["Crea función", "Declara variable", "Elimina variable", "Cierra programa"],
            correct: 1,
            explanation: "let edad = 20 declara una variable llamada 'edad' con el valor 20."
        },
        {
            question: "¿Qué operador suma?",
            options: ["-", "*", "+", "/"],
            correct: 2,
            explanation: "El operador '+' se utiliza para sumar números."
        },
        {
            question: "¿Qué imprime console.log(10 - 5)?",
            options: ["15", "10", "5", "Error"],
            correct: 2,
            explanation: "10 - 5 es una resta que resulta en 5."
        },
        {
            question: "¿Qué imprime console.log(4 * 2)?",
            options: ["6", "8", "42", "2"],
            correct: 1,
            explanation: "4 * 2 es una multiplicación que resulta en 8."
        },
        {
            question: "¿Qué imprime console.log(8 / 2)?",
            options: ["4", "6", "2", "8"],
            correct: 0,
            explanation: "8 / 2 es una división que resulta en 4."
        },
        {
            question: "¿Qué significa ===?",
            options: ["Suma", "Comparación estricta", "División", "Comentario"],
            correct: 1,
            explanation: "'===' compara valores sin hacer conversión de tipos (comparación estricta)."
        },
        {
            question: "¿Qué imprime console.log(5 === 5)?",
            options: ["false", "true", "undefined", "null"],
            correct: 1,
            explanation: "5 === 5 es verdadero porque son iguales."
        },
        {
            question: "¿Qué imprime console.log(typeof 5)?",
            options: ["string", "number", "boolean", "object"],
            correct: 1,
            explanation: "typeof 5 retorna 'number' porque 5 es un número."
        },
        {
            question: "¿Qué imprime console.log(typeof 'Hola')?",
            options: ["number", "object", "string", "array"],
            correct: 2,
            explanation: "typeof 'Hola' retorna 'string' porque es texto."
        },
        {
            question: "¿Qué palabra crea constante?",
            options: ["let", "const", "varr", "define"],
            correct: 1,
            explanation: "'const' se usa para declarar constantes que no pueden cambiar."
        },
        {
            question: "¿Qué imprime console.log(true)?",
            options: ["false", "1", "true", "null"],
            correct: 2,
            explanation: "console.log(true) imprime el valor booleano true."
        },
        {
            question: "¿Qué imprime console.log(3 > 1)?",
            options: ["false", "true", "undefined", "0"],
            correct: 1,
            explanation: "3 > 1 es verdadero, por lo que retorna true."
        },
        {
            question: "¿Qué imprime console.log(1 > 5)?",
            options: ["true", "false", "null", "Error"],
            correct: 1,
            explanation: "1 > 5 es falso, por lo que retorna false."
        },
        {
            question: "¿Qué estructura almacena varios datos?",
            options: ["String", "Boolean", "Array", "Float"],
            correct: 2,
            explanation: "Los Arrays almacenan múltiples valores en una sola variable."
        }
    ],
    medium: [
        {
            question: "¿Qué imprime console.log([1,2,3])?",
            options: ["Undefined", "[1,2,3]", "Error", "NaN"],
            correct: 1,
            explanation: "console.log([1,2,3]) imprime el array completo: [1,2,3]"
        },
        {
            question: "¿Qué método agrega datos al array?",
            options: ["pop()", "push()", "shift()", "slice()"],
            correct: 1,
            explanation: "push() agrega elementos al final de un array."
        },
        {
            question: "¿Qué método elimina el último elemento?",
            options: ["push()", "shift()", "pop()", "splice()"],
            correct: 2,
            explanation: "pop() elimina y retorna el último elemento del array."
        },
        {
            question: "¿Qué imprime console.log('Hola'.length)?",
            options: ["undefined", "5", "4", "Error"],
            correct: 2,
            explanation: "'Hola' tiene 4 caracteres, entonces .length retorna 4."
        },
        {
            question: "¿Qué hace if?",
            options: ["Repite código", "Evalúa condición", "Crea variable", "Define función"],
            correct: 1,
            explanation: "if evalúa una condición y ejecuta código si es verdadera."
        },
        {
            question: "¿Qué imprime console.log(5 == '5')?",
            options: ["false", "true", "undefined", "Error"],
            correct: 1,
            explanation: "== compara valores permitiendo conversión de tipos, así 5 == '5' es true."
        },
        {
            question: "¿Qué imprime console.log(5 === '5')?",
            options: ["true", "false", "undefined", "Error"],
            correct: 1,
            explanation: "=== compara tipo y valor, 5 (número) no es igual a '5' (string)."
        },
        {
            question: "¿Qué hace for?",
            options: ["Crea variable", "Define función", "Repite instrucciones", "Evalúa condición"],
            correct: 2,
            explanation: "for repite un bloque de código un número específico de veces."
        },
        {
            question: "¿Qué imprime console.log(Boolean(1))?",
            options: ["0", "false", "true", "undefined"],
            correct: 2,
            explanation: "Boolean(1) convierte 1 a true porque cualquier número distinto de 0 es true."
        },
        {
            question: "¿Qué imprime console.log(Boolean(0))?",
            options: ["true", "1", "false", "undefined"],
            correct: 2,
            explanation: "Boolean(0) convierte 0 a false porque 0 es un valor falsy."
        },
        {
            question: "¿Cómo se llama una función?",
            options: ["define miFunc()", "miFunc()", "function miFunc", "call miFunc"],
            correct: 1,
            explanation: "Se llama una función escribiendo su nombre seguido de paréntesis: miFunc()"
        },
        {
            question: "¿Qué imprime console.log('Hello'.toUpperCase())?",
            options: ["hello", "HELLO", "'HELLO'", "Error"],
            correct: 1,
            explanation: "toUpperCase() convierte el texto a mayúsculas."
        },
        {
            question: "¿Qué hace .includes()?",
            options: ["Copia array", "Busca elemento", "Ordena array", "Elimina elemento"],
            correct: 1,
            explanation: ".includes() verifica si un elemento existe en el array."
        },
        {
            question: "¿Qué imprime console.log('JS'.repeat(2))?",
            options: ["2", "JSJS", "JS", "Error"],
            correct: 1,
            explanation: "'JS'.repeat(2) repite el string 2 veces: 'JSJS'"
        },
        {
            question: "¿Qué es una función flecha?",
            options: ["for", "=>", "if", "let"],
            correct: 1,
            explanation: "=> es la sintaxis de función flecha en ES6."
        },
        {
            question: "¿Qué hace parseInt()?",
            options: ["Convierte a string", "Convierte a número entero", "Convierte a booleano", "Crea array"],
            correct: 1,
            explanation: "parseInt() convierte un string a un número entero."
        },
        {
            question: "¿Qué hace parseFloat()?",
            options: ["Convierte a entero", "Convierte a decimal", "Convierte a string", "Crea objeto"],
            correct: 1,
            explanation: "parseFloat() convierte un string a un número decimal."
        },
        {
            question: "¿Qué imprime console.log(parseInt('42'))?",
            options: ["'42'", "4.2", "42", "Error"],
            correct: 2,
            explanation: "parseInt('42') convierte el string '42' al número 42."
        },
        {
            question: "¿Qué imprime console.log(parseFloat('3.14'))?",
            options: ["3", "31.4", "3.14", "Error"],
            correct: 2,
            explanation: "parseFloat('3.14') convierte el string a número 3.14."
        },
        {
            question: "¿Qué hace .split()?",
            options: ["Une strings", "Divide string", "Borra caracteres", "Cuenta caracteres"],
            correct: 1,
            explanation: ".split() divide un string en un array basado en un separador."
        }
    ],
    hard: [
        {
            question: "¿Qué imprime console.log(typeof null)?",
            options: ["null", "object", "undefined", "error"],
            correct: 1,
            explanation: "Curiosamente, typeof null retorna 'object' por un bug histórico de JavaScript."
        },
        {
            question: "¿Qué convierte objeto a JSON?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "Object.toJSON()"],
            correct: 1,
            explanation: "JSON.stringify() convierte un objeto JavaScript a un string JSON."
        },
        {
            question: "¿Qué convierte JSON a objeto?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "Object.fromJSON()"],
            correct: 1,
            explanation: "JSON.parse() convierte un string JSON a un objeto JavaScript."
        },
        {
            question: "¿Qué operador usa función flecha?",
            options: ["->", "=>", ">>", "<<"],
            correct: 1,
            explanation: "=> es el operador de función flecha introducido en ES6."
        },
        {
            question: "¿Qué imprime console.log(undefined)?",
            options: ["null", "undefined", "Error", "NaN"],
            correct: 1,
            explanation: "console.log(undefined) imprime 'undefined'."
        },
        {
            question: "¿Qué imprime console.log(NaN)?",
            options: ["0", "null", "NaN", "undefined"],
            correct: 2,
            explanation: "NaN significa 'Not-a-Number' y es un valor especial en JavaScript."
        },
        {
            question: "¿Qué hace map()?",
            options: ["Filtra array", "Recorre y transforma arrays", "Ordena array", "Busca elemento"],
            correct: 1,
            explanation: "map() recorre cada elemento y aplica una función, retornando un nuevo array."
        },
        {
            question: "¿Qué imprime console.log([1,2] + [3,4])?",
            options: ["[1,2,3,4]", "[1,2] [3,4]", "1,23,4", "Error"],
            correct: 2,
            explanation: "Arrays se convierten a strings y se concatenan: '1,2' + '3,4' = '1,23,4'"
        },
        {
            question: "¿Qué imprime console.log('5' - 2)?",
            options: ["'52'", "3", "7", "Error"],
            correct: 1,
            explanation: "JavaScript convierte '5' a número 5, entonces 5 - 2 = 3."
        },
        {
            question: "¿Qué imprime console.log('5' + 2)?",
            options: ["7", "5", "52", "Error"],
            correct: 2,
            explanation: "El operador + concatena strings, entonces '5' + 2 = '52'."
        },
        {
            question: "¿Qué imprime console.log(0 || 'default')?",
            options: ["0", "'default'", "true", "undefined"],
            correct: 1,
            explanation: "0 es falsy, entonces || retorna 'default'."
        },
        {
            question: "¿Qué imprime console.log('' || 'vacio')?",
            options: ["''", "'vacio'", "false", "Error"],
            correct: 1,
            explanation: "String vacío es falsy, entonces || retorna 'vacio'."
        },
        {
            question: "¿Qué hace .filter()?",
            options: ["Transforma array", "Elimina elemento", "Filtra elementos", "Ordena array"],
            correct: 2,
            explanation: ".filter() retorna un nuevo array con elementos que cumplen condición."
        },
        {
            question: "¿Qué hace .reduce()?",
            options: ["Elimina elementos", "Reduce a un valor", "Filtra array", "Ordena array"],
            correct: 1,
            explanation: ".reduce() reduce un array a un único valor acumulado."
        },
        {
            question: "¿Qué imprime console.log(typeof function(){})?",
            options: ["object", "function", "undefined", "error"],
            correct: 1,
            explanation: "typeof en una función retorna 'function'."
        },
        {
            question: "¿Qué es una promesa?",
            options: ["Variable", "Objeto async", "Función que retorna resultado futuro", "Array"],
            correct: 2,
            explanation: "Una promesa es un objeto que representa un valor que podrá estar disponible ahora, luego, o nunca."
        },
        {
            question: "¿Qué hace await?",
            options: ["Define variable", "Espera promesa", "Crea función", "Delimita bloque"],
            correct: 1,
            explanation: "await pausa la ejecución hasta que una promesa se resuelva."
        },
        {
            question: "¿Qué imprime console.log(2 ** 3)?",
            options: ["5", "6", "8", "23"],
            correct: 2,
            explanation: "** es el operador de potencia, 2 ** 3 = 2 * 2 * 2 = 8."
        },
        {
            question: "¿Qué hace Object.keys()?",
            options: ["Obtiene valores", "Obtiene propiedades", "Cuenta propiedades", "Elimina propiedad"],
            correct: 1,
            explanation: "Object.keys() retorna un array con las claves del objeto."
        },
        {
            question: "¿Qué imprime console.log([...[1,2], 3])?",
            options: ["[[1,2],3]", "[1,2,3]", "Error", "[...,3]"],
            correct: 1,
            explanation: "El spread operator ... expande el array, resultando en [1,2,3]."
        }
    ]
};

// ESTADO DEL JUEGO
let gameState = {
    playerName: '',
    difficulty: 'easy',
    score: 0,
    lives: 3,
    level: 1,
    correctAnswers: 0,
    currentQuestionIndex: 0,
    currentQuestion: null,
    gameActive: false,
    canAnswer: true
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

// CANVAS Y CONTEXTO
let canvas, ctx;
let gameLoop;

// ==========================================
// PANTALLA INICIAL
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
    gameState.level = 1;
    gameState.correctAnswers = 0;
    gameState.currentQuestionIndex = 0;
    gameState.gameActive = true;

    pacmanState.x = 5;
    pacmanState.y = 5;
    pacmanState.direction = 'right';
    pacmanState.nextDirection = 'right';

    // Cambiar pantalla
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

    // Establecer tamaño del canvas
    canvas.width = GRID_SIZE * CELL_SIZE;
    canvas.height = GRID_SIZE * CELL_SIZE;

    // Actualizar pantalla
    updateGameUI();
    loadNextQuestion();

    // Iniciar loop del juego
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

    // Actualizar dirección de Pac-Man
    pacmanState.direction = pacmanState.nextDirection;

    // Mover Pac-Man
    let newX = pacmanState.x;
    let newY = pacmanState.y;

    if (pacmanState.direction === 'right') newX++;
    if (pacmanState.direction === 'left') newX--;
    if (pacmanState.direction === 'up') newY--;
    if (pacmanState.direction === 'down') newY++;

    // Verificar límites
    if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
        pacmanState.x = newX;
        pacmanState.y = newY;
    }

    // Animar boca
    pacmanState.animationFrame++;
    if (pacmanState.animationFrame % 2 === 0) {
        pacmanState.mouthOpen = !pacmanState.mouthOpen;
    }
}

// ==========================================
// DIBUJAR JUEGO
// ==========================================

function drawGame() {
    // Fondo
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = 'rgba(0, 184, 255, 0.1)';
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

    // Dibujar puntos aleatorios
    drawPellets();

    // Dibujar Pac-Man
    drawPacman();
}

function drawPellets() {
    ctx.fillStyle = 'rgba(100, 200, 255, 0.6)';
    
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            // No dibujar en la posición de Pac-Man
            if (i === pacmanState.x && j === pacmanState.y) continue;

            // Dibujar pellets con patrón
            if ((i + j) % 3 === 0) {
                ctx.beginPath();
                ctx.arc(
                    i * CELL_SIZE + CELL_SIZE / 2,
                    j * CELL_SIZE + CELL_SIZE / 2,
                    3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        }
    }
}

function drawPacman() {
    const x = pacmanState.x * CELL_SIZE + CELL_SIZE / 2;
    const y = pacmanState.y * CELL_SIZE + CELL_SIZE / 2;
    const radius = CELL_SIZE / 2 - 2;

    // Colores para Pac-Man
    const colors = ['#FFD700', '#FFA500', '#FF8C00'];
    ctx.fillStyle = colors[Math.floor(pacmanState.animationFrame / 5) % colors.length];

    // Dibujar boca
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

    // Ojo
    ctx.fillStyle = '#000';
    const eyeDistance = radius / 2;
    const eyeX = x + Math.cos(startAngle) * eyeDistance;
    const eyeY = y + Math.sin(startAngle) * eyeDistance;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 2, 0, Math.PI * 2);
    ctx.fill();
}

// ==========================================
// SISTEMA DE PREGUNTAS
// ==========================================

function loadNextQuestion() {
    const questionBank = questions[gameState.difficulty];
    gameState.currentQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
    gameState.currentQuestionIndex++;
    gameState.canAnswer = true;

    displayQuestion();
}

function displayQuestion() {
    const q = gameState.currentQuestion;

    document.getElementById('questionCount').textContent = `Pregunta ${gameState.currentQuestionIndex}`;
    document.getElementById('questionText').textContent = q.question;

    // Mezclar respuestas
    const shuffledAnswers = [...q.options].sort(() => Math.random() - 0.5);

    // Encontrar índice correcto después de mezclar
    const correctIndex = shuffledAnswers.indexOf(q.options[q.correct]);

    // Crear botones
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

function selectAnswer(selectedIndex, correctIndex) {
    if (!gameState.canAnswer) return;

    gameState.canAnswer = false;

    const buttons = document.querySelectorAll('.answer-button');
    const q = gameState.currentQuestion;

    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');

    if (selectedIndex === correctIndex) {
        // Respuesta correcta
        gameState.score += 10;
        gameState.correctAnswers++;
        pacmanState.nextDirection = 'right';

        buttons[selectedIndex].classList.add('correct');
        feedback.classList.add('correct-feedback', 'show');
        feedback.innerHTML = `<strong>✓ ¡Correcto!</strong><br>${q.explanation}`;

        // Sonido mental de éxito
        playSuccessEffect();
    } else {
        // Respuesta incorrecta
        gameState.lives--;
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
        feedback.classList.add('incorrect-feedback', 'show');
        feedback.innerHTML = `<strong>✗ Incorrecto</strong><br>${q.explanation}`;

        // Sonido mental de error
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
// ACTUALIZAR INTERFAZ
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
    document.getElementById('questionsMini').textContent = gameState.currentQuestionIndex + '/∞';
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
    document.getElementById('finalLevel').textContent = gameState.difficulty === 'easy' ? 'Fácil' : gameState.difficulty === 'medium' ? 'Medio' : 'Difícil';

    switchScreen('gameOverScreen');
}

function restartGame() {
    switchScreen('startScreen');
    document.getElementById('playerName').value = '';
    document.getElementById('difficulty').value = 'easy';
}

// ==========================================
// EFECTOS DE SONIDO (visuales)
// ==========================================

function playSuccessEffect() {
    // Efecto visual de éxito
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.animation = 'none';
    setTimeout(() => {
        scoreDisplay.style.animation = 'pulse 0.3s ease';
    }, 10);
}

function playErrorEffect() {
    // Efecto visual de error
    const livesDisplay = document.getElementById('livesDisplay');
    livesDisplay.style.animation = 'none';
    setTimeout(() => {
        livesDisplay.style.animation = 'shake 0.3s ease';
    }, 10);
}

// ==========================================
// CONTROLES DEL TECLADO
// ==========================================

document.addEventListener('keydown', (e) => {
    if (!gameState.gameActive) return;

    if (e.key === 'ArrowRight' || e.key === 'D') pacmanState.nextDirection = 'right';
    if (e.key === 'ArrowLeft' || e.key === 'A') pacmanState.nextDirection = 'left';
    if (e.key === 'ArrowUp' || e.key === 'W') pacmanState.nextDirection = 'up';
    if (e.key === 'ArrowDown' || e.key === 'S') pacmanState.nextDirection = 'down';
});

// ==========================================
// ANIMACIONES CSS
// ==========================================

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
