const questions = [
    { text: '다른 사람들과 어울리는 것이 좋다.', axis: 'EI', optionA: '예', optionB: '아니오' },
    { text: '세부적인 것보다 큰 그림을 보는 편이다.', axis: 'NS', optionA: '예', optionB: '아니오' },
    { text: '결정을 내릴 때 이성적인 근거가 중요하다.', axis: 'TF', optionA: '예', optionB: '아니오' },
    { text: '계획에 따라 움직이는 것을 선호한다.', axis: 'JP', optionA: '예', optionB: '아니오' },
    { text: '혼자만의 시간을 갖는 것이 필요하다.', axis: 'IE', optionA: '예', optionB: '아니오' },
    { text: '경험에 의존하기보다는 가능성을 상상한다.', axis: 'NS', optionA: '예', optionB: '아니오' },
    { text: '다른 사람의 감정을 중시한다.', axis: 'FT', optionA: '예', optionB: '아니오' },
    { text: '계획보다는 즉흥적인 편이다.', axis: 'PJ', optionA: '예', optionB: '아니오' },
    { text: '모임에서 에너지를 얻는다.', axis: 'EI', optionA: '예', optionB: '아니오' },
    { text: '사실과 현실을 중시한다.', axis: 'SN', optionA: '예', optionB: '아니오' },
    { text: '논리적인 것이 더 중요하다.', axis: 'TF', optionA: '예', optionB: '아니오' },
    { text: '마감 직전에 일을 처리한다.', axis: 'PJ', optionA: '예', optionB: '아니오' }
];

const results = {
    'ISTJ': {
        animal: '거북이',
        emoji: '🐢',
        desc: '조용하지만 뚜렷한 신념으로 성실하게 일합니다. 계획적이고 책임감 있는 거북이형으로 믿음직한 동료가 되어 줍니다.'
    },
    'ISFJ': {
        animal: '사슴',
        emoji: '🦌',
        desc: '따뜻한 배려심과 근면성실함이 돋보입니다. 주변 사람을 세심히 챙기는 사슴형으로 든든한 지원군 역할을 합니다.'
    },
    'INFJ': {
        animal: '부엉이',
        emoji: '🦉',
        desc: '깊은 통찰력과 이상을 추구하며 조용한 리더십을 발휘합니다. 타인의 감정을 잘 이해하는 부엉이형입니다.'
    },
    'INTJ': {
        animal: '독수리',
        emoji: '🦅',
        desc: '논리와 전략을 중시하며 독립적인 사고를 합니다. 목표 달성을 위해 체계적으로 움직이는 독수리형입니다.'
    },
    'ISTP': {
        animal: '살쾡이',
        emoji: '🐱',
        desc: '실용적이고 과묵하지만 상황 판단이 빠릅니다. 문제 해결에 능한 살쾡이형으로 행동력이 뛰어납니다.'
    },
    'ISFP': {
        animal: '고양이',
        emoji: '🐈',
        desc: '온화하고 조용하지만 감수성이 풍부합니다. 현재의 순간을 즐길 줄 아는 자유로운 고양이형입니다.'
    },
    'INFP': {
        animal: '수달',
        emoji: '🦦',
        desc: '이상과 가치를 중시하며 상상력이 풍부합니다. 따뜻한 마음으로 타인을 돕는 수달형입니다.'
    },
    'INTP': {
        animal: '올빼미',
        emoji: '🦉',
        desc: '지적 호기심이 많고 분석적인 사고를 좋아합니다. 새로운 아이디어를 탐구하는 올빼미형입니다.'
    },
    'ESTP': {
        animal: '치타',
        emoji: '🐅',
        desc: '현실적이고 활동적이며 도전을 즐깁니다. 순간의 판단과 실행력이 뛰어난 치타형입니다.'
    },
    'ESFP': {
        animal: '강아지',
        emoji: '🐶',
        desc: '사교적이고 에너지 넘치며 사람들과 함께할 때 빛납니다. 분위기를 이끄는 강아지형입니다.'
    },
    'ENFP': {
        animal: '돌고래',
        emoji: '🐬',
        desc: '열정적이고 창의적이며 새로운 가능성을 찾습니다. 긍정적인 에너지로 주변을 밝히는 돌고래형입니다.'
    },
    'ENTP': {
        animal: '여우',
        emoji: '🦊',
        desc: '재치 있고 호기심이 많아 끊임없이 새로운 것을 추구합니다. 논쟁을 즐기는 여우형입니다.'
    },
    'ESTJ': {
        animal: '벌',
        emoji: '🐝',
        desc: '현실적이고 체계적이며 주도적으로 일을 추진합니다. 조직을 이끄는 벌형입니다.'
    },
    'ESFJ': {
        animal: '코끼리',
        emoji: '🐘',
        desc: '타인을 잘 배려하며 협동심이 강합니다. 공동체를 소중히 여기는 코끼리형입니다.'
    },
    'ENFJ': {
        animal: '말',
        emoji: '🐎',
        desc: '사람들을 격려하고 인도하는 능력이 뛰어납니다. 따뜻한 리더십을 가진 말형입니다.'
    },
    'ENTJ': {
        animal: '사자',
        emoji: '🦁',
        desc: '목표 지향적이며 확고한 결단력을 지녔습니다. 카리스마 있는 사자형입니다.'
    }
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

const copyBtn = document.getElementById('copy-btn');
const copyMsg = document.getElementById('copy-msg');

copyBtn.addEventListener('click', () => {
    const r = results[mbtiType];
    const text = `나의 MBTI는 ${mbtiType}!\n추천 동물: ${r.emoji} ${r.animal}\n${r.desc}`;
    navigator.clipboard.writeText(text).then(() => {
        copyMsg.classList.remove('hidden');
        copyMsg.textContent = '결과가 복사되었습니다!';
        setTimeout(() => copyMsg.classList.add('hidden'), 2000);
    });
});
