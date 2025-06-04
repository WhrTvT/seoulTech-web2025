const questions = [
    { text: '다른 사람들과 어울리는 것이 좋다.', axis: 'EI', optionA: '예', optionB: '아니오' },
    { text: '세부적인 것보다 큰 그림을 보는 편이다.', axis: 'SN', optionA: '예', optionB: '아니오' },
    { text: '결정을 내릴 때 이성적인 근거가 중요하다.', axis: 'TF', optionA: '예', optionB: '아니오' },
    { text: '계획에 따라 움직이는 것을 선호한다.', axis: 'JP', optionA: '예', optionB: '아니오' },
    { text: '혼자만의 시간을 갖는 것이 필요하다.', axis: 'EI', optionA: '아니오', optionB: '예' },
    { text: '경험에 의존하기보다는 가능성을 상상한다.', axis: 'SN', optionA: '아니오', optionB: '예' },
    { text: '다른 사람의 감정을 중시한다.', axis: 'TF', optionA: '아니오', optionB: '예' },
    { text: '계획보다는 즉흥적인 편이다.', axis: 'JP', optionA: '아니오', optionB: '예' },
    { text: '모임에서 에너지를 얻는다.', axis: 'EI', optionA: '예', optionB: '아니오' },
    { text: '사실과 현실을 중시한다.', axis: 'SN', optionA: '예', optionB: '아니오' },
    { text: '논리적인 것이 더 중요하다.', axis: 'TF', optionA: '예', optionB: '아니오' },
    { text: '마감 직전에 일을 처리한다.', axis: 'JP', optionA: '아니오', optionB: '예' }
];

const results = {
    'ISTJ': { animal: '거북이', emoji: '🐢', desc: '신중하고 책임감 있는 거북이형입니다.' },
    'ISFJ': { animal: '사슴', emoji: '🦌', desc: '따뜻하고 성실한 사슴형입니다.' },
    'INFJ': { animal: '부엉이', emoji: '🦉', desc: '통찰력 있고 배려심 많은 부엉이형입니다.' },
    'INTJ': { animal: '독수리', emoji: '🦅', desc: '분석적이고 독립적인 독수리형입니다.' },
    'ISTP': { animal: '살쾡이', emoji: '🐱', desc: '현실적이고 과묵한 살쾡이형입니다.' },
    'ISFP': { animal: '고양이', emoji: '🐈', desc: '호기심 많고 온화한 고양이형입니다.' },
    'INFP': { animal: '수달', emoji: '🦎', desc: '이상적이고 충실한 수달형입니다.' },
    'INTP': { animal: '올빼미', emoji: '🦉', desc: '논리적이고 호기심 많은 올빼미형입니다.' },
    'ESTP': { animal: '치타', emoji: '🐅', desc: '활동적이고 현실적인 치타형입니다.' },
    'ESFP': { animal: '강아지', emoji: '🐶', desc: '사교적이고 낙천적인 강아지형입니다.' },
    'ENFP': { animal: '돌고래', emoji: '🐬', desc: '열정적이고 창의적인 돌고래형입니다.' },
    'ENTP': { animal: '여우', emoji: '🦊', desc: '재기발랄하고 영리한 여우형입니다.' },
    'ESTJ': { animal: '벌', emoji: '🐝', desc: '현실적이고 체계적인 벌형입니다.' },
    'ESFJ': { animal: '코끼리', emoji: '🐘', desc: '친절하고 협동적인 코끼리형입니다.' },
    'ENFJ': { animal: '말', emoji: '🐎', desc: '열정적이고 사려 깊은 말형입니다.' },
    'ENTJ': { animal: '사자', emoji: '🦁', desc: '지도력 있고 당당한 사자형입니다.' }
};

let current = 0;
let scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
let mbtiType = '';

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const progressEl = document.getElementById('progress');
const resultTypeEl = document.getElementById('result-type');
const animalEl = document.getElementById('animal');
const descEl = document.getElementById('description');

function showQuestion() {
    const q = questions[current];
    questionEl.textContent = q.text;
    choicesEl.innerHTML = '';
    const btnA = document.createElement('button');
    btnA.textContent = q.optionA;
    btnA.addEventListener('click', () => choose('A'));
    const btnB = document.createElement('button');
    btnB.textContent = q.optionB;
    btnB.addEventListener('click', () => choose('B'));
    choicesEl.append(btnA, btnB);
    progressEl.textContent = `${current + 1} / ${questions.length}`;
}

function choose(choice) {
    const q = questions[current];
    if (choice === 'A') {
        scores[q.axis.charAt(0)]++;
    } else {
        scores[q.axis.charAt(1)]++;
    }
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    mbtiType = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${scores.T >= scores.F ? 'T' : 'F'}${scores.J >= scores.P ? 'J' : 'P'}`;
    const result = results[mbtiType];
    resultTypeEl.textContent = mbtiType;
    animalEl.textContent = `${result.emoji} ${result.animal}`;
    descEl.textContent = result.desc;
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

function restart() {
    current = 0;
    scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
    mbtiType = '';
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

document.getElementById('start-btn').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    showQuestion();
});

document.getElementById('restart-btn').addEventListener('click', restart);

document.getElementById('copy-btn').addEventListener('click', () => {
    const text = `${mbtiType} - ${results[mbtiType].animal}`;
    navigator.clipboard.writeText(text).then(() => alert('복사되었습니다!'));
});
