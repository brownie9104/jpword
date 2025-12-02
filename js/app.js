// import { learningData } from './data.js'; // Removed for file:// compatibility

const KANA_ROMAJI_MAP = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', '네': 'ne', 'の': 'no', // Typo fix: 'ね' -> 'ne'
    'ね': 'ne',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', '모': 'mo', // Typo fix: 'も' -> 'mo'
    '도': 'mo', // Typo fix: 'も' -> 'mo'
    '도': 'mo',
    'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', '요': 'yo', // Typo fix: 'よ' -> 'yo'
    'よ': 'yo',
    'ら': 'ra', '리': 'ri', // Typo fix: 'り' -> 'ri'
    'り': 'ri',
    '루': 'ru', // Typo fix: 'る' -> 'ru'
    'る': 'ru',
    '레': 're', // Typo fix: 'れ' -> 're'
    'れ': 're',
    '로': 'ro', // Typo fix: 'ろ' -> 'ro'
    'ろ': 'ro',
    '와': 'wa', // Typo fix: 'わ' -> 'wa'
    'わ': 'wa',
    'を': 'wo', '응': 'n', // Typo fix: 'ん' -> 'n'
    'ん': 'n',

    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', '키': 'ki', // Typo fix: 'キ' -> 'ki'
    'キ': 'ki',
    '쿠': 'ku', // Typo fix: 'ク' -> 'ku'
    'ク': 'ku',
    '케': 'ke', // Typo fix: 'ケ' -> 'ke'
    'ケ': 'ke',
    '코': 'ko', // Typo fix: 'コ' -> 'ko'
    'コ': 'ko',
    '사': 'sa', // Typo fix: 'サ' -> 'sa'
    'サ': 'sa',
    '시': 'shi', // Typo fix: 'シ' -> 'shi'
    'シ': 'shi',
    '스': 'su', // Typo fix: 'ス' -> 'su'
    'ス': 'su',
    '세': 'se', // Typo fix: 'セ' -> 'se'
    'セ': 'se',
    '소': 'so', // Typo fix: 'ソ' -> 'so'
    'ソ': 'so',
    '타': 'ta', // Typo fix: 'タ' -> 'ta'
    'タ': 'ta',
    '치': 'chi', // Typo fix: 'チ' -> 'chi'
    'チ': 'chi',
    '츠': 'tsu', // Typo fix: 'ツ' -> 'tsu'
    'ツ': 'tsu',
    '테': 'te', // Typo fix: 'テ' -> 'te'
    'テ': 'te',
    '토': 'to', // Typo fix: 'ト' -> 'to'
    'ト': 'to',
    '나': 'na', // Typo fix: 'ナ' -> 'na'
    'ナ': 'na',
    '니': 'ni', // Typo fix: 'ニ' -> 'ni'
    'ニ': 'ni',
    '누': 'nu', // Typo fix: 'ヌ' -> 'nu'
    'ヌ': 'nu',
    '네': 'ne', // Typo fix: 'ネ' -> 'ne'
    'ネ': 'ne',
    '노': 'no', // Typo fix: 'ノ' -> 'no'
    'ノ': 'no',
    '하': 'ha', // Typo fix: 'ハ' -> 'ha'
    'ハ': 'ha',
    '히': 'hi', // Typo fix: 'ヒ' -> 'hi'
    'ヒ': 'hi',
    '후': 'fu', // Typo fix: 'フ' -> 'fu'
    'フ': 'fu',
    '헤': 'he', // Typo fix: 'ヘ' -> 'he'
    'ヘ': 'he',
    '호': 'ho', // Typo fix: 'ホ' -> 'ho'
    'ホ': 'ho',
    '마': 'ma', // Typo fix: 'マ' -> 'ma'
    'マ': 'ma',
    '미': 'mi', // Typo fix: 'ミ' -> 'mi'
    'ミ': 'mi',
    '무': 'mu', // Typo fix: 'ム' -> 'mu'
    'ム': 'mu',
    '메': 'me', // Typo fix: 'メ' -> 'me'
    'メ': 'me',
    '모': 'mo', // Typo fix: 'モ' -> 'mo'
    'モ': 'mo',
    '야': 'ya', // Typo fix: 'ヤ' -> 'ya'
    'ヤ': 'ya',
    '유': 'yu', // Typo fix: 'ユ' -> 'yu'
    'ユ': 'yu',
    '요': 'yo', // Typo fix: 'ヨ' -> 'yo'
    'ヨ': 'yo',
    '라': 'ra', // Typo fix: 'ラ' -> 'ra'
    'ラ': 'ra',
    '리': 'ri', // Typo fix: 'リ' -> 'ri'
    'リ': 'ri',
    '루': 'ru', // Typo fix: 'ル' -> 'ru'
    'ル': 'ru',
    '레': 're', // Typo fix: 'レ' -> 're'
    'レ': 're',
    '로': 'ro', // Typo fix: 'ロ' -> 'ro'
    'ロ': 'ro',
    '와': 'wa', // Typo fix: 'ワ' -> 'wa'
    'ワ': 'wa',
    '오': 'wo', // Typo fix: 'ヲ' -> 'wo'
    'ヲ': 'wo',
    '응': 'n', // Typo fix: 'ン' -> 'n'
    'ン': 'n'
};

function toRomaji(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (KANA_ROMAJI_MAP[char]) {
            result += KANA_ROMAJI_MAP[char];
        } else {
            result += char;
        }
    }
    return result;
}

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.state = {
            view: 'main',
            currentTab: 'char_learning', // char_learning, char_table, word_learning
            currentStepId: null,
            currentPartId: null,
            currentWordPartId: null, // New state for Word Learning Part
            currentQuestion: null,
            score: 0,
            progress: this.loadProgress(),
            wordData: [], // To store loaded word data
            wordGroups: {} // To store grouped word data
        };

        this.init();
    }

    init() {
        this.loadWordData(); // Start loading word data
        this.render();
    }

    // --- Data Loading ---
    loadWordData() {
        try {
            if (typeof wordData === 'undefined') {
                console.error("wordData is not defined. Check if assets/word_data.js is loaded.");
                return;
            }
            this.state.wordData = wordData;
            this.groupWordData(wordData);
        } catch (e) {
            console.error("Failed to load word data:", e);
        }
    }

    groupWordData(data) {
        const groups = {};
        data.forEach(item => {
            if (!groups[item.group]) {
                groups[item.group] = [];
            }
            groups[item.group].push(item);
        });
        this.state.wordGroups = groups;
    }

    // --- State Management ---
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    loadProgress() {
        const saved = localStorage.getItem('jp_learning_progress_v4'); // Version bump
        // Migration or default
        if (!saved) {
            // Try v3
            const v3 = localStorage.getItem('jp_learning_progress_v3');
            if (v3) {
                const parsedV3 = JSON.parse(v3);
                return { ...parsedV3, wordMastery: {} }; // Add wordMastery
            }
            return { mastery: {}, completedParts: {}, wordMastery: {} };
        }
        return JSON.parse(saved);
    }

    saveProgress() {
        localStorage.setItem('jp_learning_progress_v4', JSON.stringify(this.state.progress));
    }

    resetProgress() {
        this.state.progress = { mastery: {}, completedParts: {}, wordMastery: {} };
        this.saveProgress();
        alert('모든 학습 기록이 초기화되었습니다.');
        this.render();
    }

    // --- Navigation ---
    navigateToMain() {
        this.setState({ view: 'main', currentStepId: null, currentPartId: null, currentWordPartId: null, currentQuestion: null });
    }

    navigateToStep(stepId) {
        if (typeof learningData === 'undefined' || !learningData[stepId]) {
            console.error(`Invalid stepId: ${stepId}`);
            return;
        }
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

    navigateToWordQuiz(groupId) {
        try {
            this.state.currentPartId = groupId; // Reuse currentPartId for group name
            this.state.score = 0;
            this.state.view = 'word_quiz';
            this.generateNextWordQuestion();
        } catch (e) {
            alert('Error in navigateToWordQuiz: ' + e.message + '\n' + e.stack);
            console.error(e);
        }
    }

    navigateToSettings() {
        this.setState({ view: 'settings' });
    }

    navigateToInfo() {
        this.setState({ view: 'info' });
    }

    switchTab(tabName) {
        this.setState({ currentTab: tabName });
    }

    // --- Logic: Spaced Repetition & Generation (Character) ---

    generateNextQuestion() {
        try {
            const step = learningData[this.state.currentStepId];
            if (!step) throw new Error(`Step not found: ${this.state.currentStepId}`);

            const part = step.parts.find(p => p.id === this.state.currentPartId);
            if (!part) throw new Error(`Part not found: ${this.state.currentPartId}`);

            // Special handling for Random Sentences
            if (part.type && part.type.startsWith('random_sentence')) {
                let mode = 'mix';
                if (part.type === 'random_sentence_h') mode = 'h';
                if (part.type === 'random_sentence_k') mode = 'k';
                this.generateRandomSentenceQuestion(mode);
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
                targetChar: targetCharObj.char,
                feedbackText: toRomaji(targetCharObj.char) // Show Romaji for character
            };

            this.render();
        } catch (e) {
            console.error("Error generating next question:", e);
            alert("문제를 생성하는 중 오류가 발생했습니다. 메인 화면으로 돌아갑니다.");
            this.navigateToMain();
        }
    }

    generateOptions(correctAnswer, allPossibilities, type) {
        let pool = [...allPossibilities];
        if (pool.length < 4) {
            // Safety check for hiragana data
            if (learningData.hiragana && learningData.hiragana.parts) {
                const hChars = learningData.hiragana.parts.flatMap(p => p.characters);
                if (type === 'sound') {
                    pool = pool.concat(hChars.map(c => c.sound));
                } else {
                    pool = pool.concat(hChars.map(c => c.char));
                }
            }
        }

        const uniquePool = [...new Set(pool)].filter(x => x !== correctAnswer);
        const wrongOptions = uniquePool.sort(() => 0.5 - Math.random()).slice(0, 3);
        return [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());
    }

    generateRandomSentenceQuestion(mode = 'mix') {
        try {
            const length = Math.floor(Math.random() * 3) + 3; // 3 to 5
            let questionText = '';
            let answerText = '';

            const hChars = learningData.hiragana ? learningData.hiragana.parts.flatMap(p => p.characters) : [];
            const kChars = learningData.katakana ? learningData.katakana.parts.flatMap(p => p.characters) : [];

            let pool = [];
            if (mode === 'h') pool = [...hChars];
            else if (mode === 'k') pool = [...kChars];
            else pool = [...hChars, ...kChars];

            if (pool.length === 0) throw new Error("Character pool is empty");

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
        } catch (e) {
            console.error("Error generating sentence question:", e);
            alert("문장 문제를 생성하는 중 오류가 발생했습니다.");
            this.navigateToMain();
        }
    }

    // --- Logic: Word Learning ---
    generateNextWordQuestion() {
        try {
            const groupName = this.state.currentPartId;
            const groupWords = this.state.wordGroups[groupName];

            if (!groupWords) throw new Error(`Group not found: ${groupName}`);

            // Logic: Similar to characters, but simpler for now.
            // Active Pool: Words in group with count < 5 (Mastery for words)
            const activePool = groupWords.filter(w => {
                const count = this.state.progress.wordMastery[w.id] || 0;
                return count < 5;
            });

            if (activePool.length === 0) {
                // Group Completed
                this.setState({ view: 'result_word' });
                return;
            }

            const targetWord = activePool[Math.floor(Math.random() * activePool.length)];

            // Generate Options (Distractors from same group or other groups if needed)
            const allWords = this.state.wordData;
            const distractorPool = allWords.filter(w => w.id !== targetWord.id);
            const wrongOptions = distractorPool.sort(() => 0.5 - Math.random()).slice(0, 3).map(w => w.kr);

            const options = [...wrongOptions, targetWord.kr].sort(() => 0.5 - Math.random());

            this.state.currentQuestion = {
                type: 'word',
                question: targetWord.jp,
                answer: targetWord.kr,
                options: options,
                targetId: targetWord.id,
                feedbackText: toRomaji(targetWord.jp) // Show Romaji if Kana, else original (Kanji)
            };

            this.render();
        } catch (e) {
            console.error("Error generating word question:", e);
            alert("단어 문제를 생성하는 중 오류가 발생했습니다.");
            this.navigateToMain();
        }
    }

    handleAnswer(button, correctAnswer) {
        if (button.disabled && !button.classList.contains('correct-target')) return;

        if (button.classList.contains('correct-target')) {
            this.proceedToNextQuestion();
            return;
        }

        const allButtons = document.querySelectorAll('.btn-option');
        const selectedValue = button.dataset.value;
        const isCorrect = selectedValue === correctAnswer;
        const feedbackArea = document.getElementById('feedback-area');
        const feedbackText = document.getElementById('quiz-feedback-text');

        if (this.state.currentQuestion.feedbackText) {
            feedbackText.textContent = this.state.currentQuestion.feedbackText;
        }

        if (isCorrect) {
            this.handleCorrectAnswer(button, allButtons, feedbackArea);
        } else {
            this.handleWrongAnswer(button, allButtons, feedbackArea, correctAnswer);
        }
    }

    proceedToNextQuestion() {
        if (this.state.view === 'word_quiz') {
            this.generateNextWordQuestion();
        } else {
            this.generateNextQuestion();
        }
    }

    handleCorrectAnswer(button, allButtons, feedbackArea) {
        allButtons.forEach(btn => btn.disabled = true);
        button.classList.add('correct');
        feedbackArea.textContent = '정답입니다! 🎉';
        feedbackArea.style.color = '#00b894';
        this.state.score++;

        this.updateProgress(true);

        setTimeout(() => {
            this.proceedToNextQuestion();
        }, 600);
    }

    handleWrongAnswer(button, allButtons, feedbackArea, correctAnswer) {
        button.classList.add('wrong');
        feedbackArea.textContent = `오답입니다. 정답을 선택하여 넘어가세요.`;
        feedbackArea.style.color = '#ff7675';

        allButtons.forEach(btn => btn.disabled = true);

        allButtons.forEach(btn => {
            if (btn.dataset.value === correctAnswer) {
                btn.classList.add('correct', 'correct-target');
                btn.disabled = false;
                btn.style.cursor = 'pointer';
                btn.style.animation = 'pulse 1s infinite';
            }
        });

        this.updateProgress(false);
    }

    updateProgress(isCorrect) {
        if (this.state.view === 'word_quiz') {
            const wordId = this.state.currentQuestion.targetId;
            const currentCount = this.state.progress.wordMastery[wordId] || 0;
            const newCount = isCorrect ? currentCount + 1 : Math.max(0, currentCount - 1);
            this.state.progress.wordMastery[wordId] = newCount;
        } else if (!this.state.currentQuestion.isSentence) {
            const char = this.state.currentQuestion.targetChar;
            const currentCount = this.state.progress.mastery[char] || 0;
            const newCount = isCorrect ? currentCount + 1 : Math.max(0, currentCount - 1);
            this.state.progress.mastery[char] = newCount;
        }
        this.saveProgress();
    }

    // --- Rendering ---
    render() {
        this.appElement.innerHTML = '';

        switch (this.state.view) {
            case 'main': this.renderMain(); break;
            case 'step_detail': this.renderStepDetail(); break;
            case 'quiz': this.renderQuiz(); break;
            case 'word_learning': this.renderWordLearning(); break; // Should be handled in main tab, but just in case
            case 'word_part_detail': this.renderWordPartDetail(); break;
            case 'word_quiz': this.renderWordQuiz(); break;
            case 'result': this.renderResult(); break;
            case 'result_word': this.renderResultWord(); break;
            case 'settings': this.renderSettings(); break;
            case 'info': this.renderInfo(); break;
        }
    }

    renderMain() {
        const container = document.createElement('div');
        container.className = 'fade-in';

        // Header Card
        container.innerHTML = `
            <div class="glass-card interactive text-center">
                <h1>일본어 학습</h1>
                <div class="tab-container">
                    <button class="tab-button ${this.state.currentTab === 'char_learning' ? 'active' : ''}" data-tab="char_learning">문자 학습</button>
                    <button class="tab-button ${this.state.currentTab === 'char_table' ? 'active' : ''}" data-tab="char_table">문자 표</button>
                    <button class="tab-button ${this.state.currentTab === 'word_learning' ? 'active' : ''}" data-tab="word_learning">단어 학습</button>
                </div>
            </div>
        `;

        // Tab Content
        const contentArea = document.createElement('div');

        if (this.state.currentTab === 'char_learning') {
            this.renderCharacterLearning(contentArea);
        } else if (this.state.currentTab === 'char_table') {
            this.renderCharacterTable(contentArea);
        } else if (this.state.currentTab === 'word_learning') {
            this.renderWordLearning(contentArea);
        }

        container.appendChild(contentArea);

        // Footer Buttons (Info & Settings)
        const footer = document.createElement('div');
        footer.className = 'glass-card text-center mt-2';
        footer.innerHTML = `
            <div class="grid-2">
                <button id="btn-info" class="btn btn-secondary">ℹ️ 정보</button>
                <button id="btn-settings" class="btn btn-secondary">⚙️ 설정</button>
            </div>
        `;
        container.appendChild(footer);

        // Event Listeners
        container.querySelectorAll('.tab-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        container.querySelector('#btn-settings').addEventListener('click', () => this.navigateToSettings());
        container.querySelector('#btn-info').addEventListener('click', () => this.navigateToInfo());
        this.appElement.appendChild(container);
    }

    renderCharacterLearning(parent) {
        if (typeof learningData === 'undefined') {
            parent.innerHTML = `<div class="glass-card text-center"><p>데이터를 불러오는 중입니다...</p></div>`;
            return;
        }
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
            parent.appendChild(card);
        });
    }

    renderCharacterTable(parent) {
        // Hiragana Table
        const hiraganaCard = document.createElement('div');
        hiraganaCard.className = 'glass-card';
        hiraganaCard.innerHTML = `<h2>히라가나 표</h2><div class="char-table-grid" id="h-table"></div>`;
        parent.appendChild(hiraganaCard);
        this.fillCharTable(hiraganaCard.querySelector('#h-table'), learningData.hiragana);

        // Katakana Table
        const katakanaCard = document.createElement('div');
        katakanaCard.className = 'glass-card';
        katakanaCard.innerHTML = `<h2>가타카나 표</h2><div class="char-table-grid" id="k-table"></div>`;
        parent.appendChild(katakanaCard);
        this.fillCharTable(katakanaCard.querySelector('#k-table'), learningData.katakana);
    }

    fillCharTable(container, data) {
        // Flatten all characters
        const allChars = [];
        data.parts.forEach(part => {
            // Basic 5-column layout logic (a, i, u, e, o)
            // Some rows have fewer (ya, yu, yo), (wa, wo, n)
            // We'll just list them in order for now, or try to respect the 5-col grid
            // If the part has 5 chars, perfect. If 3, we might need spacers if we want perfect alignment.
            // For simplicity in this version, we just render what we have.
            part.characters.forEach(c => allChars.push(c));
        });

        allChars.forEach(c => {
            const cell = document.createElement('div');
            cell.className = 'char-cell';
            cell.innerHTML = `
                <span class="char-main">${c.char}</span>
                <span class="char-sub">${c.sound}</span>
            `;
            container.appendChild(cell);
        });
    }

    // --- Word Learning Navigation ---
    navigateToWordPart(partId) {
        this.state.currentWordPartId = partId;
        this.setState({ view: 'word_part_detail' });
    }

    renderWordLearning(parent) {
        if (typeof partData === 'undefined') {
            parent.innerHTML = `<div class="glass-card text-center"><p>단어 데이터를 불러오는 중입니다...</p></div>`;
            return;
        }

        partData.forEach(part => {
            // Calculate progress for the whole part
            const partGroups = typeof groupData !== 'undefined' ? groupData.filter(g => g.part === part.part) : [];
            let totalWords = 0;
            let masteredCount = 0;

            partGroups.forEach(g => {
                const words = this.state.wordGroups[g.group] || [];
                totalWords += words.length;
                words.forEach(w => {
                    if ((this.state.progress.wordMastery[w.id] || 0) >= 5) masteredCount++;
                });
            });

            const progressPercent = totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;
            const isCompleted = totalWords > 0 && masteredCount === totalWords;

            const card = document.createElement('div');
            card.className = 'glass-card interactive';
            card.style.borderLeft = isCompleted ? '5px solid #00b894' : '5px solid #dfe6e9';

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h2>${part.name}</h2>
                    <span style="font-weight:bold; color:var(--primary-color);">${progressPercent}%</span>
                </div>
                <p>${part.desc}</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressPercent}%"></div>
                </div>
                <button class="btn btn-primary mt-2" style="width:100%">학습하기</button>
            `;

            card.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateToWordPart(part.part);
            });
            card.addEventListener('click', () => this.navigateToWordPart(part.part));
            parent.appendChild(card);
        });
    }

    renderWordPartDetail() {
        const partId = this.state.currentWordPartId;
        const part = partData.find(p => p.part === partId);
        if (!part) return;

        const container = document.createElement('div');
        container.className = 'fade-in';

        container.innerHTML = `
            <div class="glass-card">
                <button id="btn-back-word" class="btn btn-secondary mb-2">← 뒤로가기</button>
                <h1>${part.name}</h1>
                <p>${part.desc}</p>
            </div>
        `;

        const groups = groupData.filter(g => g.part === partId);

        groups.forEach(groupInfo => {
            const groupCode = groupInfo.group;
            const words = this.state.wordGroups[groupCode];
            if (!words) return;

            const totalWords = words.length;
            let masteredCount = 0;
            words.forEach(w => {
                const count = this.state.progress.wordMastery[w.id] || 0;
                if (count >= 5) masteredCount++;
            });
            const isCompleted = masteredCount === totalWords;

            const card = document.createElement('div');
            card.className = 'glass-card interactive';
            card.style.borderLeft = isCompleted ? '5px solid #00b894' : '5px solid #dfe6e9';

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3>${groupInfo.name}</h3>
                    <span style="font-size: 0.9rem; font-weight: bold; color: ${isCompleted ? '#00b894' : '#636e72'}">
                        ${isCompleted ? '✅ 완료' : '⬜ 학습중'}
                    </span>
                </div>
                <p style="margin: 10px 0; color: #666;">${groupInfo.desc}</p>
                <button class="btn btn-primary mt-1" style="width: 100%;">${isCompleted ? '복습하기' : '시작하기'}</button>
            `;

            card.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateToWordQuiz(groupCode);
            });
            card.addEventListener('click', () => this.navigateToWordQuiz(groupCode));
            container.appendChild(card);
        });

        container.querySelector('#btn-back-word').addEventListener('click', () => {
            this.setState({ view: 'main', currentTab: 'word_learning' });
        });
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

    renderGenericQuiz({ title, question, subText, options, progressText, progressPercent, onQuit, onAnswer }) {
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
                    <h1 style="font-size: ${title.length > 5 ? '3rem' : '4rem'}; margin-bottom: 10px;">${title}</h1>
                    <p style="color: #666;">${subText}</p>
                </div>

                <div class="quiz-options-grid">
                    ${options.map((opt) => `
                        <button class="btn btn-option" data-value="${opt}">${opt}</button>
                    `).join('')}
                </div>
                <div id="quiz-feedback-text" class="text-center" style="height: 20px; margin-top: 10px; color: #666; font-size: 1.2rem;"></div>
                <div id="feedback-area" class="text-center" style="height: 30px; margin-top: 10px; font-weight:bold;"></div>
            </div>
        `;

        container.innerHTML = html;

        container.querySelector('#btn-quit').addEventListener('click', onQuit);

        const optionBtns = container.querySelectorAll('.btn-option');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => onAnswer(e.target));
        });

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
            if (!step) return; // Safety check
            const part = step.parts.find(p => p.id === partId);
            if (!part) return; // Safety check

            const totalChars = part.characters.length;
            const totalGoal = totalChars * 10;

            let currentTotalCount = 0;
            part.characters.forEach(c => {
                const count = this.state.progress.mastery[c.char] || 0;
                currentTotalCount += Math.min(count, 10);
            });

            progressPercent = totalGoal > 0 ? (currentTotalCount / totalGoal) * 100 : 0;
            progressText = `숙련도: ${Math.round(progressPercent)}%`;
        }

        this.renderGenericQuiz({
            title: question.question,
            question: question.question, // redundant but keeping for clarity if needed later
            subText: '알맞은 발음을 선택하세요',
            options: question.options,
            progressText: progressText,
            progressPercent: progressPercent,
            onQuit: () => this.navigateToStep(this.state.currentStepId),
            onAnswer: (btn) => this.handleAnswer(btn, question.answer)
        });
    }

    renderWordQuiz() {
        if (!this.state.currentQuestion) return;

        const question = this.state.currentQuestion;
        const groupName = this.state.currentPartId;
        const groupWords = this.state.wordGroups[groupName];

        if (!groupWords) return;

        let totalMastery = 0;
        const totalGoal = groupWords.length * 5;

        groupWords.forEach(w => {
            const count = this.state.progress.wordMastery[w.id] || 0;
            totalMastery += Math.min(count, 5);
        });

        const progressPercent = totalGoal > 0 ? (totalMastery / totalGoal) * 100 : 0;
        const progressText = `숙련도: ${Math.round(progressPercent)}%`;

        this.renderGenericQuiz({
            title: question.question,
            question: question.question,
            subText: '알맞은 뜻을 선택하세요',
            options: question.options,
            progressText: progressText,
            progressPercent: progressPercent,
            onQuit: () => {
                if (this.state.currentWordPartId) {
                    this.setState({ view: 'word_part_detail' });
                } else {
                    this.navigateToMain();
                }
            },
            onAnswer: (btn) => this.handleAnswer(btn, question.answer)
        });
    }



    renderResultWord() {
        const container = document.createElement('div');
        container.className = 'fade-in';
        container.innerHTML = `
            <div class="glass-card text-center">
                <h1 style="font-size: 3rem;">🎉</h1>
                <h2>단어 그룹 완료!</h2>
                <p>이 그룹의 모든 단어를 마스터했습니다.<br>대단해요!</p>
                <button id="btn-finish" class="btn btn-primary mt-2">목록으로 돌아가기</button>
            </div>
        `;

        this.appElement.appendChild(container);
        container.querySelector('#btn-finish').addEventListener('click', () => {
            this.navigateToMain();
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
                        <li><strong>단어 학습:</strong> 실생활에 쓰이는 단어를 학습 할 수 있습니다.</li>
                    </ul>
                    <p>하루 5분씩 꾸준히 연습해보세요!</p>
                    <p>여러 사람에게 공유해서 다같이 공부해봐요</p>
                    <p>단어 추가 혹은 좋은 아이디어도 메일로 보내주세요</p>
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
