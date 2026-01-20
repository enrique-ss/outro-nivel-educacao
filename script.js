const APP_DATA = {
    categories: [
        { id: 'saude', name: 'Saúde', icon: '🍎', color: '#ff5263' },
        { id: 'esportes', name: 'Esportes', icon: '⚽', color: '#6a5ae0' },
        { id: 'educacao', name: 'Educação', icon: '📚', color: '#00d68f' }
    ],
    lessons: {
        saude: [
            {
                id: 's1', title: 'Higiene Diária', icon: '🧼', requiredLevel: 1,
                content: `<h3>Por que Lavar as Mãos?</h3><p>Nossas mãos tocam em muitas coisas durante o dia e podem carregar germes invisíveis!</p><h3>Como Fazer:</h3><ul><li>Use água e sabão</li><li>Esfregue por 20 segundos</li><li>Lave antes das refeições</li></ul>`,
                quiz: [
                    { q: "Quando devemos lavar as mãos?", opts: ["Só de manhã", "Antes de comer", "Nunca", "Só à noite"], a: 1 }
                ]
            },
            {
                id: 's2', title: 'Alimentação Saudável', icon: '🥗', requiredLevel: 2,
                content: `<h3>Comida é Energia!</h3><p>Nosso corpo precisa de nutrientes para funcionar bem, crescer e ter energia para brincar!</p><h3>Alimentos Importantes:</h3><ul><li>Frutas e vegetais</li><li>Grãos integrais</li><li>Proteínas</li></ul>`,
                quiz: [
                    { q: "O que nos dá energia para brincar?", opts: ["Apenas doces", "Alimentos saudáveis", "Refrigerante", "Nada"], a: 1 }
                ]
            },
            {
                id: 's3', title: 'Sono e Descanso', icon: '😴', requiredLevel: 3,
                content: `<h3>Por que Dormir é Importante?</h3><p>Durante o sono, nosso corpo descansa e se prepara para um novo dia cheio de aventuras!</p><h3>Benefícios:</h3><ul><li>Crescemos enquanto dormimos</li><li>Nosso cérebro organiza memórias</li><li>Acordamos com mais energia</li></ul>`,
                quiz: [
                    { q: "O que acontece quando dormimos bem?", opts: ["Ficamos cansados", "Crescemos e descansamos", "Nada", "Ficamos doentes"], a: 1 }
                ]
            }
        ],
        esportes: [
            {
                id: 'e1', title: 'Futebol Básico', icon: '⚽', requiredLevel: 1,
                content: `<h3>O Esporte Mais Popular!</h3><p>O futebol é jogado por milhões de pessoas ao redor do mundo!</p><h3>Regras Básicas:</h3><ul><li>Duas equipes de 11 jogadores</li><li>Marcar gols no gol adversário</li><li>Não pode usar as mãos (exceto o goleiro)</li></ul>`,
                quiz: [
                    { q: "Quantos jogadores tem cada time de futebol?", opts: ["5", "11", "7", "15"], a: 1 }
                ]
            },
            {
                id: 'e2', title: 'Basquete para Iniciantes', icon: '🏀', requiredLevel: 2,
                content: `<h3>Arremesso na Cesta!</h3><p>No basquete, o objetivo é acertar a bola na cesta do adversário!</p><h3>Como Jogar:</h3><ul><li>Quicar a bola ao se movimentar</li><li>Arremessar na cesta</li><li>Trabalho em equipe</li></ul>`,
                quiz: [
                    { q: "Como você se movimenta com a bola no basquete?", opts: ["Correndo com ela", "Quicando", "Chutando", "Arremessando"], a: 1 }
                ]
            },
            {
                id: 'e3', title: 'Natação e Segurança', icon: '🏊', requiredLevel: 3,
                content: `<h3>Nadando com Segurança!</h3><p>Nadar é ótimo exercício e muito divertido, mas sempre precisamos de segurança!</p><h3>Regras Importantes:</h3><ul><li>Sempre nade com supervisão</li><li>Use colete se não souber nadar</li><li>Respeite a profundidade</li></ul>`,
                quiz: [
                    { q: "Quando podemos nadar sozinhos?", opts: ["Sempre", "Nunca, precisamos supervisão", "Só de dia", "Quando quiser"], a: 1 }
                ]
            }
        ],
        educacao: [
            {
                id: 'd1', title: 'O Sistema Solar', icon: '🌍', requiredLevel: 1,
                content: `<h3>Nosso Lar no Espaço!</h3><p>A Terra faz parte do Sistema Solar, junto com outros 7 planetas que giram ao redor do Sol!</p><h3>Planetas:</h3><ul><li>Mercúrio, Vênus, Terra, Marte</li><li>Júpiter, Saturno, Urano, Netuno</li><li>O Sol é uma estrela</li></ul>`,
                quiz: [
                    { q: "Quantos planetas tem no Sistema Solar?", opts: ["5", "8", "10", "12"], a: 1 }
                ]
            },
            {
                id: 'd2', title: 'Os Dinossauros', icon: '🦕', requiredLevel: 2,
                content: `<h3>Gigantes do Passado!</h3><p>Os dinossauros viveram na Terra há milhões de anos atrás!</p><h3>Curiosidades:</h3><ul><li>Existiram por 165 milhões de anos</li><li>Alguns eram enormes, outros pequenos</li><li>Desapareceram há 65 milhões de anos</li></ul>`,
                quiz: [
                    { q: "Quando os dinossauros viveram?", opts: ["Ontem", "Há milhões de anos", "Semana passada", "Vivem hoje"], a: 1 }
                ]
            },
            {
                id: 'd3', title: 'O Ciclo da Água', icon: '💧', requiredLevel: 3,
                content: `<h3>A Viagem da Água!</h3><p>A água está sempre viajando: dos oceanos para o céu e de volta!</p><h3>Etapas:</h3><ul><li>Evaporação: água vira vapor</li><li>Condensação: vapor vira nuvem</li><li>Precipitação: chuva cai</li></ul>`,
                quiz: [
                    { q: "O que faz a água evaporar?", opts: ["Frio", "Calor do sol", "Vento", "Nada"], a: 1 }
                ]
            }
        ]
    }
};

const XP_PER_LEVEL = [0, 100, 250, 450, 700, 1000, 1400, 1850, 2350, 2900, 3500];

let state = {
    hp: 5,
    xp: 0,
    level: 1,
    energy: 100,
    currentCat: null,
    currentLesson: null,
    quizStep: 0,
    correctCount: 0,
    completedLessons: [], // IDs das lições já completadas
    lastHpRegenTime: Date.now() // Timestamp da última regeneração de HP
};

function init() {
    renderCategories();
    loadProgress();
    updateUI();
    startHpRegeneration();
    startEnergyRegeneration();
}

function updateUI() {
    document.getElementById('hearts-display').textContent = "❤️".repeat(state.hp) + "🖤".repeat(5 - state.hp);
    document.getElementById('energy-val').textContent = state.energy;
    document.getElementById('level-val').textContent = `Nível ${state.level}`;
    updateXPBar();

    if (state.hp <= 0) gameOver();
}

function updateXPBar() {
    const currentLevel = state.level;
    const xpForCurrentLevel = XP_PER_LEVEL[currentLevel - 1];
    const xpForNextLevel = XP_PER_LEVEL[currentLevel];
    const xpInCurrentLevel = state.xp - xpForCurrentLevel;
    const xpNeededForLevel = xpForNextLevel - xpForCurrentLevel;

    const percentage = (xpInCurrentLevel / xpNeededForLevel) * 100;

    document.getElementById('xp-bar-fill').style.width = `${Math.min(percentage, 100)}%`;
    document.getElementById('xp-text').textContent = `${xpInCurrentLevel}/${xpNeededForLevel} XP`;
}

function calculateLevel(xp) {
    for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
        if (xp >= XP_PER_LEVEL[i]) {
            return i + 1;
        }
    }
    return 1;
}

function renderCategories() {
    const grid = document.getElementById('cat-grid');
    grid.innerHTML = APP_DATA.categories.map(c => `
        <div class="card-cat" onclick="openCategory('${c.id}')" style="border-bottom: 5px solid ${c.color}">
            <span class="icon">${c.icon}</span>
            <h2>${c.name}</h2>
            <p>Clique para explorar!</p>
        </div>
    `).join('');
}

function openCategory(id) {
    state.currentCat = id;
    const cat = APP_DATA.categories.find(c => c.id === id);
    document.getElementById('lesson-cat-title').textContent = `Mundo: ${cat.name}`;

    const container = document.getElementById('lesson-list-container');
    container.innerHTML = APP_DATA.lessons[id].map(l => {
        const isLocked = state.level < l.requiredLevel;
        const isCompleted = state.completedLessons.includes(l.id);
        const completedClass = isCompleted ? 'completed' : '';
        const completedIcon = isCompleted ? ' ✓' : '';

        return `
            <div class="lesson-item ${isLocked ? 'locked' : ''} ${completedClass}" onclick="openLesson('${l.id}')">
                <span>${l.icon} ${l.title}${completedIcon}</span>
                <span>${isLocked ? '🔒 Nível ' + l.requiredLevel : '➔'}</span>
            </div>
        `;
    }).join('');

    showScreen('lessons');
}

function openLesson(id) {
    const lesson = APP_DATA.lessons[state.currentCat].find(l => l.id === id);

    if (state.level < lesson.requiredLevel) {
        alert(`Esta lição requer Nível ${lesson.requiredLevel}. Continue estudando para desbloquear! 📚`);
        return;
    }

    state.currentLesson = lesson;
    document.getElementById('content-body').innerHTML = `
        <h1 style="font-size:2.5rem; margin-bottom:15px">${lesson.icon}</h1>
        <h2>${lesson.title}</h2>
        <div style="margin-top:20px; text-align:left">${lesson.content}</div>
    `;
    showScreen('content');
}

function startQuiz() {
    state.quizStep = 0;
    state.correctCount = 0;
    updateUI();
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const lesson = state.currentLesson;
    const q = lesson.quiz[state.quizStep];

    document.getElementById('quiz-step-text').textContent = `${state.quizStep + 1}/${lesson.quiz.length}`;
    document.getElementById('quiz-progress-bar').style.width = ((state.quizStep / lesson.quiz.length) * 100) + "%";
    document.getElementById('quiz-question').textContent = q.q;

    const opts = document.getElementById('quiz-options');
    opts.innerHTML = q.opts.map((o, i) => `
        <button class="btn-option" onclick="handleAnswer(${i})">${o}</button>
    `).join('');
}

function handleAnswer(idx) {
    const q = state.currentLesson.quiz[state.quizStep];
    const isCorrect = idx === q.a;
    const btns = document.querySelectorAll('.btn-option');

    btns.forEach(b => b.disabled = true);

    if (isCorrect) {
        btns[idx].classList.add('correct');
        state.correctCount++;
        playSound('correct');
    } else {
        btns[idx].classList.add('wrong');
        btns[q.a].classList.add('correct');
        state.hp = Math.max(0, state.hp - 1);
        playSound('wrong');
        updateUI();
    }

    setTimeout(() => {
        nextAction();
    }, 1000);
}

function nextAction() {
    state.quizStep++;

    if (state.quizStep < state.currentLesson.quiz.length) {
        renderQuestion();
    } else {
        finishLesson();
    }
}

function finishLesson() {
    const total = state.currentLesson.quiz.length;
    const win = state.correctCount >= total / 2;
    const isFirstTime = !state.completedLessons.includes(state.currentLesson.id);

    const oldLevel = state.level;
    let xpGained = 0;
    let heartsGained = 0;

    // Só ganha XP e vidas na primeira vez que completa
    if (win && isFirstTime) {
        xpGained = state.correctCount * 50;
        state.xp += xpGained;

        heartsGained = state.correctCount;
        state.hp = Math.min(5, state.hp + heartsGained);

        // Marca lição como completada
        state.completedLessons.push(state.currentLesson.id);
    }

    const newLevel = calculateLevel(state.xp);
    const leveledUp = newLevel > oldLevel;
    state.level = newLevel;

    document.getElementById('result-icon').textContent = win ? "🏆" : "💪";
    document.getElementById('result-title').textContent = win ? "Missão Cumprida!" : "Continue Tentando!";

    let resultDesc = `Você acertou ${state.correctCount} de ${total} perguntas.`;
    if (!isFirstTime && win) {
        resultDesc += " (Lição já completada - sem recompensas)";
    }
    document.getElementById('result-desc').textContent = resultDesc;

    document.getElementById('xp-gain').textContent = xpGained;
    document.getElementById('hp-gain').textContent = heartsGained;

    const levelUpBox = document.getElementById('level-up-box');
    if (leveledUp) {
        document.getElementById('new-level').textContent = `Nível ${newLevel}`;
        levelUpBox.classList.remove('hidden');
    } else {
        levelUpBox.classList.add('hidden');
    }

    saveProgress();
    updateUI();
    showScreen('result');
}

function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(`screen-${name}`).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function gameOver() {
    alert("Suas vidas acabaram! Aguarde a regeneração de vida para continuar jogando. ⏰");
    showScreen('home');
}

function playSound(type) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.1);
    } else {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
    }

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
}

function saveProgress() {
    const saveData = {
        xp: state.xp,
        level: state.level,
        hp: state.hp,
        energy: state.energy,
        completedLessons: state.completedLessons,
        lastHpRegenTime: state.lastHpRegenTime
    };
    localStorage.setItem('educube_state', JSON.stringify(saveData));
}

function loadProgress() {
    const saved = localStorage.getItem('educube_state');
    if (saved) {
        const data = JSON.parse(saved);
        state.xp = data.xp || 0;
        state.level = data.level || 1;
        state.hp = data.hp || 5;
        state.energy = data.energy || 100;
        state.completedLessons = data.completedLessons || [];
        state.lastHpRegenTime = data.lastHpRegenTime || Date.now();

        // Calcular HP regenerado desde a última sessão
        regenerateHpFromOfflineTime();
    }
}

// Regenera HP baseado no tempo offline
function regenerateHpFromOfflineTime() {
    const now = Date.now();
    const timePassed = now - state.lastHpRegenTime;
    const hoursPassedTotal = timePassed / (1000 * 60 * 60); // Convertendo ms para horas
    const hpToRegenerate = Math.floor(hoursPassedTotal);

    if (hpToRegenerate > 0 && state.hp < 5) {
        state.hp = Math.min(5, state.hp + hpToRegenerate);
        state.lastHpRegenTime = now;
        saveProgress();
    }
}

// Sistema de regeneração de HP (1 por hora)
function startHpRegeneration() {
    setInterval(() => {
        if (state.hp < 5) {
            const now = Date.now();
            const timeSinceLastRegen = now - state.lastHpRegenTime;
            const hourInMs = 1000 * 60 * 60; // 1 hora em milissegundos

            if (timeSinceLastRegen >= hourInMs) {
                state.hp = Math.min(5, state.hp + 1);
                state.lastHpRegenTime = now;
                updateUI();
                saveProgress();
            }
        }
    }, 60000); // Verifica a cada minuto
}

// Sistema de regeneração de energia (1 por minuto)
function startEnergyRegeneration() {
    setInterval(() => {
        if (state.energy < 100) {
            state.energy = Math.min(100, state.energy + 1);
            updateUI();
            saveProgress();
        }
    }, 60000); // 60 segundos = 1 minuto
}

init();