const learningData = {
    hiragana: {
        id: 'hiragana',
        title: '히라가나 (Hiragana)',
        description: '일본어의 가장 기초가 되는 문자입니다.',
        parts: [
            {
                id: 'h_row_a',
                title: '아행 (あ行)',
                description: 'あ(아) ~ お(오)',
                characters: [
                    { char: 'あ', sound: '아' }, { char: 'い', sound: '이' }, { char: 'う', sound: '우' }, { char: 'え', sound: '에' }, { char: 'お', sound: '오' }
                ]
            },
            {
                id: 'h_row_ka',
                title: '카행 (か行)',
                description: 'か(카) ~ こ(코)',
                characters: [
                    { char: 'か', sound: '카' }, { char: 'き', sound: '키' }, { char: 'く', sound: '쿠' }, { char: 'け', sound: '케' }, { char: 'こ', sound: '코' }
                ]
            },
            {
                id: 'h_row_sa',
                title: '사행 (さ行)',
                description: 'さ(사) ~ そ(소)',
                characters: [
                    { char: 'さ', sound: '사' }, { char: 'し', sound: '시' }, { char: 'す', sound: '스' }, { char: 'せ', sound: '세' }, { char: 'そ', sound: '소' }
                ]
            },
            {
                id: 'h_row_ta',
                title: '타행 (た行)',
                description: 'た(타) ~ と(토)',
                characters: [
                    { char: 'た', sound: '타' }, { char: 'ち', sound: '치' }, { char: 'つ', sound: '츠' }, { char: 'て', sound: '테' }, { char: 'と', sound: '토' }
                ]
            },
            {
                id: 'h_row_na',
                title: '나행 (な行)',
                description: 'な(나) ~ の(노)',
                characters: [
                    { char: 'な', sound: '나' }, { char: 'に', sound: '니' }, { char: 'ぬ', sound: '누' }, { char: 'ね', sound: '네' }, { char: 'の', sound: '노' }
                ]
            },
            {
                id: 'h_row_ha',
                title: '하행 (は行)',
                description: 'は(하) ~ ほ(호)',
                characters: [
                    { char: 'は', sound: '하' }, { char: 'ひ', sound: '히' }, { char: 'ふ', sound: '후' }, { char: 'へ', sound: '헤' }, { char: 'ほ', sound: '호' }
                ]
            },
            {
                id: 'h_row_ma',
                title: '마행 (ま行)',
                description: 'ま(마) ~ も(모)',
                characters: [
                    { char: 'ま', sound: '마' }, { char: 'み', sound: '미' }, { char: 'む', sound: '무' }, { char: 'め', sound: '메' }, { char: 'も', sound: '모' }
                ]
            },
            {
                id: 'h_row_ya',
                title: '야행 (や行)',
                description: 'や(야) ~ よ(요)',
                characters: [
                    { char: 'や', sound: '야' }, { char: 'ゆ', sound: '유' }, { char: 'よ', sound: '요' }
                ]
            },
            {
                id: 'h_row_ra',
                title: '라행 (ら行)',
                description: 'ら(라) ~ ろ(로)',
                characters: [
                    { char: 'ら', sound: '라' }, { char: 'り', sound: '리' }, { char: 'る', sound: '루' }, { char: 'れ', sound: '레' }, { char: 'ろ', sound: '로' }
                ]
            },
            {
                id: 'h_row_wa',
                title: '와행 (わ行)',
                description: 'わ(와) ~ ん(응)',
                characters: [
                    { char: 'わ', sound: '와' }, { char: 'を', sound: '오(wo)' }, { char: 'ん', sound: '응(n)' }
                ]
            },
            {
                id: 'h_row_ga',
                title: '가행 (が行)',
                description: 'が(가) ~ ご(고)',
                characters: [
                    { char: 'が', sound: '가' }, { char: 'ぎ', sound: '기' }, { char: 'ぐ', sound: '구' }, { char: 'げ', sound: '게' }, { char: 'ご', sound: '고' }
                ]
            },
            {
                id: 'h_row_za',
                title: '자행 (ざ行)',
                description: 'ざ(자) ~ ぞ(조)',
                characters: [
                    { char: 'ざ', sound: '자' }, { char: 'じ', sound: '지' }, { char: 'ず', sound: '즈' }, { char: 'ぜ', sound: '제' }, { char: 'ぞ', sound: '조' }
                ]
            },
            {
                id: 'h_row_da',
                title: '다행 (だ行)',
                description: 'だ(다) ~ ど(도)',
                characters: [
                    { char: 'だ', sound: '다' }, { char: 'ぢ', sound: '지(ji)' }, { char: 'づ', sound: '즈(zu)' }, { char: 'で', sound: '데' }, { char: 'ど', sound: '도' }
                ]
            },
            {
                id: 'h_row_ba',
                title: '바행 (ば行)',
                description: 'ば(바) ~ ぼ(보)',
                characters: [
                    { char: 'ば', sound: '바' }, { char: 'び', sound: '비' }, { char: 'ぶ', sound: '부' }, { char: 'べ', sound: '베' }, { char: 'ぼ', sound: '보' }
                ]
            },
            {
                id: 'h_row_pa',
                title: '파행 (ぱ行)',
                description: 'ぱ(파) ~ ぽ(포)',
                characters: [
                    { char: 'ぱ', sound: '파' }, { char: 'ぴ', sound: '피' }, { char: 'ぷ', sound: '푸' }, { char: 'ぺ', sound: '페' }, { char: 'ぽ', sound: '포' }
                ]
            }
        ]
    },
    katakana: {
        id: 'katakana',
        title: '가타카나 (Katakana)',
        description: '외래어나 강조할 때 사용하는 문자입니다.',
        parts: [
            {
                id: 'k_row_a',
                title: '아행 (ア行)',
                description: 'ア(아) ~ オ(오)',
                characters: [
                    { char: 'ア', sound: '아' }, { char: 'イ', sound: '이' }, { char: 'ウ', sound: '우' }, { char: 'エ', sound: '에' }, { char: 'オ', sound: '오' }
                ]
            },
            {
                id: 'k_row_ka',
                title: '카행 (カ行)',
                description: 'カ(카) ~ コ(코)',
                characters: [
                    { char: 'カ', sound: '카' }, { char: 'キ', sound: '키' }, { char: 'ク', sound: '쿠' }, { char: 'ケ', sound: '케' }, { char: 'コ', sound: '코' }
                ]
            },
            {
                id: 'k_row_sa',
                title: '사행 (サ行)',
                description: 'サ(사) ~ ソ(소)',
                characters: [
                    { char: 'サ', sound: '사' }, { char: 'シ', sound: '시' }, { char: 'ス', sound: '스' }, { char: 'セ', sound: '세' }, { char: 'ソ', sound: '소' }
                ]
            },
            {
                id: 'k_row_ta',
                title: '타행 (タ行)',
                description: 'タ(타) ~ ト(토)',
                characters: [
                    { char: 'タ', sound: '타' }, { char: 'チ', sound: '치' }, { char: 'ツ', sound: '츠' }, { char: 'テ', sound: '테' }, { char: 'ト', sound: '토' }
                ]
            },
            {
                id: 'k_row_na',
                title: '나행 (ナ行)',
                description: 'ナ(나) ~ ノ(노)',
                characters: [
                    { char: 'ナ', sound: '나' }, { char: 'ニ', sound: '니' }, { char: 'ヌ', sound: '누' }, { char: 'ネ', sound: '네' }, { char: 'ノ', sound: '노' }
                ]
            },
            {
                id: 'k_row_ha',
                title: '하행 (ハ行)',
                description: 'ハ(하) ~ ホ(호)',
                characters: [
                    { char: 'ハ', sound: '하' }, { char: 'ヒ', sound: '히' }, { char: 'フ', sound: '후' }, { char: 'ヘ', sound: '헤' }, { char: 'ホ', sound: '호' }
                ]
            },
            {
                id: 'k_row_ma',
                title: '마행 (マ行)',
                description: 'マ(마) ~ モ(모)',
                characters: [
                    { char: 'マ', sound: '마' }, { char: 'ミ', sound: '미' }, { char: 'ム', sound: '무' }, { char: 'メ', sound: '메' }, { char: 'モ', sound: '모' }
                ]
            },
            {
                id: 'k_row_ya',
                title: '야행 (ヤ行)',
                description: 'ヤ(야) ~ ヨ(요)',
                characters: [
                    { char: 'ヤ', sound: '야' }, { char: 'ユ', sound: '유' }, { char: 'ヨ', sound: '요' }
                ]
            },
            {
                id: 'k_row_ra',
                title: '라행 (ラ行)',
                description: 'ラ(라) ~ ロ(로)',
                characters: [
                    { char: 'ラ', sound: '라' }, { char: 'リ', sound: '리' }, { char: 'ル', sound: '루' }, { char: 'レ', sound: '레' }, { char: 'ロ', sound: '로' }
                ]
            },
            {
                id: 'k_row_wa',
                title: '와행 (ワ行)',
                description: 'ワ(와) ~ ン(응)',
                characters: [
                    { char: 'ワ', sound: '와' }, { char: 'ヲ', sound: '오(wo)' }, { char: 'ン', sound: '응(n)' }
                ]
            },
            {
                id: 'k_row_ga',
                title: '가행 (ガ行)',
                description: 'ガ(가) ~ ゴ(고)',
                characters: [
                    { char: 'ガ', sound: '가' }, { char: 'ギ', sound: '기' }, { char: 'グ', sound: '구' }, { char: 'ゲ', sound: '게' }, { char: 'ゴ', sound: '고' }
                ]
            },
            {
                id: 'k_row_za',
                title: '자행 (ザ行)',
                description: 'ザ(자) ~ ゾ(조)',
                characters: [
                    { char: 'ザ', sound: '자' }, { char: 'ジ', sound: '지' }, { char: 'ズ', sound: '즈' }, { char: 'ゼ', sound: '제' }, { char: 'ゾ', sound: '조' }
                ]
            },
            {
                id: 'k_row_da',
                title: '다행 (ダ行)',
                description: 'ダ(다) ~ ド(도)',
                characters: [
                    { char: 'ダ', sound: '다' }, { char: 'ヂ', sound: '지(ji)' }, { char: 'ヅ', sound: '즈(zu)' }, { char: 'デ', sound: '데' }, { char: 'ド', sound: '도' }
                ]
            },
            {
                id: 'k_row_ba',
                title: '바행 (バ行)',
                description: 'バ(바) ~ ボ(보)',
                characters: [
                    { char: 'バ', sound: '바' }, { char: 'ビ', sound: '비' }, { char: 'ブ', sound: '부' }, { char: 'ベ', sound: '베' }, { char: 'ボ', sound: '보' }
                ]
            },
            {
                id: 'k_row_pa',
                title: '파행 (パ行)',
                description: 'パ(파) ~ ポ(포)',
                characters: [
                    { char: 'パ', sound: '파' }, { char: 'ピ', sound: '피' }, { char: 'プ', sound: '푸' }, { char: 'ペ', sound: '페' }, { char: 'ポ', sound: '포' }
                ]
            }
        ]
    },
    sentences: {
        id: 'sentences',
        title: '문장 읽기 (Sentences)',
        description: '무작위 문장 읽기 연습 (심화)',
        parts: [
            {
                id: 's_hiragana',
                title: '히라가나 읽기',
                description: '히라가나로만 구성된 무작위 문장',
                type: 'random_sentence_h'
            },
            {
                id: 's_katakana',
                title: '가타카나 읽기',
                description: '가타카나로만 구성된 무작위 문장',
                type: 'random_sentence_k'
            },
            {
                id: 's_mixed',
                title: '무작위 섞어 읽기',
                description: '히라가나와 가타카나가 섞인 문장',
                type: 'random_sentence_mix'
            }
        ]
    }
};
