// import { learningData } from './data.js'; // Removed for file:// compatibility

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.state = {
            view: 'main',
            currentStepId: null,
            currentPartId: null,
            currentQuestion: null,
            score: 0,
            progress: this.loadProgress()
        };

        this.init();
    }

    init() {
        this.render();
    }

    // --- State Management ---
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    loadProgress() {
        const saved = localStorage.getItem('jp_learning_progress_v3');
        return saved ? JSON.parse(saved) : { mastery: {}, completedParts: {} };
    }

    saveProgress() {
        localStorage.setItem('jp_learning_progress_v3', JSON.stringify(this.state.progress));
    }

    resetProgress() {
        this.state.progress = { mastery: {}, completedParts: {} };
        this.saveProgress();
        alert('모든 학습 기록이 초기화되었습니다.');
        this.render();
    }

    // --- Navigation ---
    navigateToMain() {
        this.setState({ view: 'main', currentStepId: null, currentPartId: null, currentQuestion: null });
    }

    navigateToStep(stepId) {
        this.setState({ view: 'step_detail', currentStepId: stepId });
    }

    navigateToQuiz(partId) {
        try {
            this.state.currentPartId = partId;
            this.state.score = 0;
            this.state.view = 'quiz';
            this.generateNextQuestion();
        } catch (e) {
            alert('Error in navigateToQuiz: ' + e.message + '\n' + e.stack);
            console.error(e);
        }
    }

    navigateToSettings() {
        this.setState({ view: 'settings' });
    }

    navigateToInfo() {
        this.setState({ view: 'info' });
    }

    // --- Logic: Spaced Repetition & Generation ---

    generateNextQuestion() {
        const step = learningData[this.state.currentStepId];
        if (!step) throw new Error(`Step not found: ${this.state.currentStepId}`);

        const part = step.parts.find(p => p.id === this.state.currentPartId);
        if (!part) throw new Error(`Part not found: ${this.state.currentPartId}`);

        // Special handling for Random Sentences
        if (part.type === 'random_sentence') {
            this.generateRandomSentenceQuestion();
            return;
        }

        // --- Interleaved Spaced Repetition Logic ---

        // 1. Active Pool: Characters in CURRENT part with count < 10 (Part Completion)
        const activePool = part.characters.filter(c => {
            const count = this.state.progress.mastery[c.char] || 0;
            return count < 10;
        });

        // 2. Review Pool: Characters from SAME SCRIPT with 0 < count < 30
        let allChars = [];
        const currentScriptId = this.state.currentStepId; // 'hiragana' or 'katakana'

        if (learningData[currentScriptId]) {
            learningData[currentScriptId].parts.forEach(p => {
                allChars = allChars.concat(p.characters);
            });
        }

        const reviewPool = allChars.filter(c => {
            const count = this.state.progress.mastery[c.char] || 0;
            // Must have been seen at least once (> 0) and not fully mastered (< 30)
            const isEligible = count > 0 && count < 30;

            // Exclude characters that are currently in the active pool (current part < 10)
            // to prevent them from dominating the review slot as well.
            const isInActivePool = part.characters.some(active => active.char === c.char) && count < 10;

            return isEligible && !isInActivePool;
        });

        // Completion Condition: Active Pool is empty (Current part is "completed")
        if (activePool.length === 0) {
            this.state.progress.completedParts[part.id] = true;
            this.saveProgress();
            this.setState({ view: 'result' });
            return;
        }

        let targetCharObj;
        const roll = Math.random();

        // Selection: 70% Active, 30% Review (if available)
        if (reviewPool.length > 0 && roll < 0.3) {
            targetCharObj = reviewPool[Math.floor(Math.random() * reviewPool.length)];
        } else {
            targetCharObj = activePool[Math.floor(Math.random() * activePool.length)];
        }

        // Generate Question Object
        const type = Math.random() > 0.5 ? 'char_to_sound' : 'sound_to_char';
        let questionText, answerText, options;

        // Distractor Pool: Current Part + Target (if review)
        const distractorPool = [...part.characters];
        if (!distractorPool.find(c => c.char === targetCharObj.char)) {
            distractorPool.push(targetCharObj);
        }

        if (type === 'char_to_sound') {
            questionText = targetCharObj.char;
            answerText = targetCharObj.sound;
            options = this.generateOptions(targetCharObj.sound, distractorPool.map(c => c.sound), 'sound');
        } else {
            questionText = targetCharObj.sound;
            answerText = targetCharObj.char;
            options = this.generateOptions(targetCharObj.char, distractorPool.map(c => c.char), 'char');
        }

        this.state.currentQuestion = {
            type: type,
            question: questionText,
            answer: answerText,
            options: options,
            targetChar: targetCharObj.char
        };

        this.render();
    }

    generateOptions(correctAnswer, allPossibilities, type) {
        let pool = [...allPossibilities];
        if (pool.length < 4) {
            const hChars = learningData.hiragana.parts.flatMap(p => p.characters);
            if (type === 'sound') {
                pool = pool.concat(hChars.map(c => c.sound));
            } else {
                pool = pool.concat(hChars.map(c => c.char));
            }
        }

        const uniquePool = [...new Set(pool)].filter(x => x !== correctAnswer);
        const wrongOptions = uniquePool.sort(() => 0.5 - Math.random()).slice(0, 3);
        return [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());
    }

    generateRandomSentenceQuestion() {
        const length = Math.floor(Math.random() * 3) + 3; // 3 to 5
        let questionText = '';
        let answerText = '';

        const hChars = learningData.hiragana.parts.flatMap(p => p.characters);
        const kChars = learningData.katakana.parts.flatMap(p => p.characters);
        const pool = [...hChars, ...kChars];

        const usedSounds = new Set();

        for (let i = 0; i < length; i++) {
            let randomObj;
            let attempts = 0;
            // Try to find a unique sound
            do {
                randomObj = pool[Math.floor(Math.random() * pool.length)];
                attempts++;
            } while (usedSounds.has(randomObj.sound) && attempts < 10);

            usedSounds.add(randomObj.sound);
            questionText += randomObj.char;
            answerText += randomObj.sound;
        }

        const options = [answerText];
        for (let i = 0; i < 3; i++) {
            let wrongOption = '';
            const wrongUsedSounds = new Set();

            for (let j = 0; j < length; j++) {
                let randomObj;
                let attempts = 0;
                do {
                    randomObj = pool[Math.floor(Math.random() * pool.length)];
                    attempts++;
                } while (wrongUsedSounds.has(randomObj.sound) && attempts < 10);

                wrongUsedSounds.add(randomObj.sound);
                wrongOption += randomObj.sound;
            }
            options.push(wrongOption);
        }

        this.state.currentQuestion = {
            type: 'sentence',
            question: questionText,
            answer: answerText,
            options: options.sort(() => 0.5 - Math.random()),
            isSentence: true
        };
        this.render();
    }

    handleAnswer(button, correctAnswer) {
        if (button.disabled && !button.classList.contains('correct-target')) return;

        if (button.classList.contains('correct-target')) {
            this.generateNextQuestion();
            return;
        }

        const allButtons = document.querySelectorAll('.btn-option');
        const selectedValue = button.dataset.value;
        const isCorrect = selectedValue === correctAnswer;
        const feedbackArea = document.getElementById('feedback-area');

        if (isCorrect) {
            allButtons.forEach(btn => btn.disabled = true);
            button.classList.add('correct');
            feedbackArea.textContent = '정답입니다! 🎉';
            feedbackArea.style.color = '#00b894';
            this.state.score++;

            if (!this.state.currentQuestion.isSentence) {
                const char = this.state.currentQuestion.targetChar;
                const currentCount = this.state.progress.mastery[char] || 0;
                this.state.progress.mastery[char] = currentCount + 1;
                this.saveProgress();
            }

            setTimeout(() => {
                this.generateNextQuestion();
            }, 600);

        } else {
            button.classList.add('wrong');
            feedbackArea.textContent = `오답입니다. 정답을 선택하여 넘어가세요.`;
            feedbackArea.style.color = '#ff7675';

            allButtons.forEach(btn => btn.disabled = true);

            allButtons.forEach(btn => {
                if (btn.dataset.value === correctAnswer) {
                    btn.classList.add('correct');
                    btn.classList.add('correct-target');
                    btn.disabled = false;
                    btn.style.cursor = 'pointer';
                    btn.style.animation = 'pulse 1s infinite';
                }
            });

            if (!this.state.currentQuestion.isSentence) {
                const char = this.state.currentQuestion.targetChar;
                const currentCount = this.state.progress.mastery[char] || 0;
                this.state.progress.mastery[char] = Math.max(0, currentCount - 1);
                this.saveProgress();
            }
        }
    }

    // --- Rendering ---
    render() {
        this.appElement.innerHTML = '';

        switch (this.state.view) {
            case 'main': this.renderMain(); break;
            case 'step_detail': this.renderStepDetail(); break;
            case 'quiz': this.renderQuiz(); break;
            case 'result': this.renderResult(); break;
            case 'settings': this.renderSettings(); break;
            case 'info': this.renderInfo(); break;
        }
    }

    renderMain() {
        const container = document.createElement('div');
        container.className = 'fade-in';

        container.innerHTML = `
            <div class="glass-card interactive text-center">
                <h1>일본어 문자 학습</h1>
                <p>문제를 읽고 학습해보세요, 한번 학습한 문자는 복습을 위해 재등장 합니다.</p>
                <div class="grid-2 mt-2">
                    <button id="btn-info" class="btn btn-secondary">ℹ️ 정보</button>
                    <button id="btn-settings" class="btn btn-secondary">⚙️ 설정</button>
                </div>
            </div>
        `;

        Object.values(learningData).forEach(step => {
            const stepProgress = this.calculateStepProgress(step.id);
            const card = document.createElement('div');
            card.className = 'glass-card interactive';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h2>${step.title}</h2>
                    <span style="font-weight:bold; color:var(--primary-color);">${stepProgress}%</span>
                </div>
                <p>${step.description}</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${stepProgress}%"></div>
                </div>
                <button class="btn btn-primary mt-2" style="width:100%">학습하기</button>
            `;
            card.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateToStep(step.id);
            });
            card.addEventListener('click', () => this.navigateToStep(step.id));
            container.appendChild(card);
        });

        container.querySelector('#btn-settings').addEventListener('click', () => this.navigateToSettings());
        container.querySelector('#btn-info').addEventListener('click', () => this.navigateToInfo());
        this.appElement.appendChild(container);
    }

    renderStepDetail() {
        const step = learningData[this.state.currentStepId];
        const container = document.createElement('div');
        container.className = 'fade-in';

        container.innerHTML = `
            <div class="glass-card">
                <button id="btn-back" class="btn btn-secondary mb-2">← 뒤로가기</button>
                <h1>${step.title}</h1>
                <p>${step.description}</p>
            </div>
        `;

        step.parts.forEach(part => {
            const isCompleted = this.state.progress.completedParts[part.id];
            const card = document.createElement('div');
            card.className = 'glass-card interactive';
            card.style.borderLeft = isCompleted ? '5px solid #00b894' : '5px solid #dfe6e9';

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3>${part.title}</h3>
                    ${isCompleted ? '✅ 완료' : '⬜ 학습중'}
                </div>
                <p>${part.description}</p>
                <button class="btn btn-primary mt-1">${isCompleted ? '복습하기' : '시작하기'}</button>
            `;
            card.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateToQuiz(part.id);
            });
            card.addEventListener('click', () => this.navigateToQuiz(part.id));
            container.appendChild(card);
        });

        container.querySelector('#btn-back').addEventListener('click', () => this.navigateToMain());
        this.appElement.appendChild(container);
    }

    renderQuiz() {
        if (!this.state.currentQuestion) return;

        const question = this.state.currentQuestion;

        let progressText = '';
        let progressPercent = 0;

        if (question.isSentence) {
            progressText = '무한 연습 모드';
            progressPercent = 100;
        } else {
            const partId = this.state.currentPartId;
            const step = learningData[this.state.currentStepId];
            const part = step.parts.find(p => p.id === partId);
            const totalChars = part.characters.length;
            const totalGoal = totalChars * 10; // Part completion goal is 10

            let currentTotalCount = 0;
            part.characters.forEach(c => {
                const count = this.state.progress.mastery[c.char] || 0;
                currentTotalCount += Math.min(count, 10); // Cap at 10 for this view
            });

            progressPercent = (currentTotalCount / totalGoal) * 100;
            progressText = `숙련도: ${Math.round(progressPercent)}%`;
        }

        const container = document.createElement('div');
        container.className = 'fade-in';

        let html = `
            <div class="glass-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <button id="btn-quit" class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;">✕ 나가기</button>
                    <span class="quiz-header-info">${progressText}</span>
                </div>
                <div class="progress-container" style="margin-bottom: 20px;">
                    <div class="progress-bar" style="width: ${progressPercent}%"></div>
                </div>
                
                <div class="quiz-question-area text-center" style="margin: 40px 0;">
                    <h1 style="font-size: 4rem; margin-bottom: 10px;">${question.question}</h1>
                    <p style="color: #666;">알맞은 발음을 선택하세요</p>
                </div>

                <div class="quiz-options-grid">
                    ${question.options.map((opt) => `
                        <button class="btn btn-option" data-value="${opt}">${opt}</button>
                    `).join('')}
                </div>
                <div id="feedback-area" class="text-center" style="height: 30px; margin-top: 20px; font-weight:bold;"></div>
            </div>
        `;

        container.innerHTML = html;

        container.querySelector('#btn-quit').addEventListener('click', () => {
            this.navigateToStep(this.state.currentStepId);
        });

        const options = container.querySelectorAll('.btn-option');
        options.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e.target, question.answer));
        });

        this.appElement.appendChild(container);
    }

    renderResult() {
        const container = document.createElement('div');
        container.className = 'fade-in';
        container.innerHTML = `
            <div class="glass-card text-center">
                <h1 style="font-size: 3rem;">🎉</h1>
                <h2>학습 완료!</h2>
                <p>이 파트의 모든 문자를 10번씩 연습했습니다.<br>이제 다음 파트로 넘어가세요!<br>(복습 문제로 계속 등장합니다)</p>
                <button id="btn-finish" class="btn btn-primary mt-2">목록으로 돌아가기</button>
            </div>
        `;

        this.appElement.appendChild(container);
        container.querySelector('#btn-finish').addEventListener('click', () => {
            this.navigateToStep(this.state.currentStepId);
        });
    }

    renderSettings() {
        const container = document.createElement('div');
        container.className = 'fade-in';
        container.innerHTML = `
            <div class="glass-card text-center">
                <button id="btn-back" class="btn btn-secondary mb-2" style="float:left">← 뒤로가기</button>
                <div style="clear:both"></div>
                <h1>설정</h1>
                <div class="mt-2">
                    <p>모든 학습 진행도를 초기화합니다.</p>
                    <button id="btn-reset" class="btn btn-danger">데이터 초기화</button>
                </div>
            </div>
        `;

        container.querySelector('#btn-back').addEventListener('click', () => this.navigateToMain());
        container.querySelector('#btn-reset').addEventListener('click', () => this.resetProgress());
        this.appElement.appendChild(container);
    }

    renderInfo() {
        const container = document.createElement('div');
        container.className = 'fade-in';
        container.innerHTML = `
            <div class="glass-card">
                <button id="btn-back" class="btn btn-secondary mb-2">← 뒤로가기</button>
                <h1>사이트 정보</h1>
                <div class="mt-2">
                    <h3>제작자 - 브라우니</h3>
                    <p>brownie9104@naver.com</p>
                    <p>일본어 문자 학습에 도움이 되었으면 해서 제작했습니다.</p>
                    <p>버그 제보는 메일로 부탁 드립니다.</p>
                    <p>제가 만든 다른 게임도 많이 사랑해주세요</p>
                    <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8;">
                        
                        <li><strong>반복 학습:</strong> 각 문자를 10번 익히면 파트가 완료됩니다.</li>
                        <li><strong>복습 시스템:</strong> 완료된 문자는 30번 완벽하게 익힐 때까지 다른 파트에서 계속 등장합니다.</li>
                        <li><strong>문장 연습:</strong> 글자를 익힌 후 무작위 단어 조합으로 읽기 연습을 할 수 있습니다.</li>
                    </ul>
                    <p>하루 5분씩 꾸준히 연습해보세요!</p>
                </div>
            </div>
        `;

        container.querySelector('#btn-back').addEventListener('click', () => this.navigateToMain());
        this.appElement.appendChild(container);
    }

    // --- Helpers ---
    calculateStepProgress(stepId) {
        const step = learningData[stepId];
        if (!step) return 0;

        const totalParts = step.parts.length;
        if (totalParts === 0) return 0;

        // Calculate based on Total Mastery (Goal: 30 per char)
        let totalChars = 0;
        let totalMastery = 0;

        step.parts.forEach(part => {
            if (part.characters) {
                part.characters.forEach(c => {
                    totalChars++;
                    const count = this.state.progress.mastery[c.char] || 0;
                    totalMastery += Math.min(count, 30);
                });
            }
        });

        if (totalChars === 0) return 0;
        return Math.round((totalMastery / (totalChars * 30)) * 100);
    }
}

// Initialize App
// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof learningData === 'undefined') {
            throw new Error('learningData is not defined. Check if data.js is loaded correctly.');
        }
        new App();
    } catch (e) {
        document.body.innerHTML = `<div style="color:red; padding:20px;">
            <h1>Error Initializing App</h1>
            <p>${e.message}</p>
            <pre>${e.stack}</pre>
        </div>`;
        console.error(e);
    }
});
