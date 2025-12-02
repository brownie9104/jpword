const partData = [
    { "id": 1, "part": "basic", "name": "기초 파트", "desc": "일본어 학습의 첫걸음! 기초 단어를 학습합니다." },
    { "id": 2, "part": "travel", "name": "여행 파트", "desc": "일본 여행에서 바로 사용할 수 있는 필수 단어입니다." },
    {
        id: 3,
        part: "life",
        name: "실생활 파트",
        desc: "일상에서 자주 사용하는 필수 단어들을 학습합니다."
    },
    {
        id: 4,
        part: "travel_adv",
        name: "여행 심화 파트",
        desc: "여행 상황에서 한 단계 더 자연스럽게 말할 수 있는 표현입니다."
    }
];

const groupData = [
    { "id": 1, "part": "basic", "group": "basic_1", "name": "기초 1", "desc": "가장 기초적인 인칭대명사와 의문사를 배웁니다." },
    { "id": 2, "part": "basic", "group": "basic_2", "name": "기초 2", "desc": "일상 생활에서 자주 쓰이는 필수 표현입니다." },
    { "id": 3, "part": "travel", "group": "travel_1", "name": "여행 기초 1", "desc": "여행 중 장소와 관련된 필수 단어입니다." },
    { "id": 4, "part": "travel", "group": "travel_2", "name": "여행 기초 2", "desc": "쇼핑과 가격 흥정에 필요한 단어들입니다." },
    { "id": 5, "part": "travel", "group": "travel_3", "name": "여행 기초 3", "desc": "식당에서 주문할 때 유용한 단어입니다." },
    { "id": 6, "part": "basic", "group": "basic_3", "name": "기초 3", "desc": "자주 쓰이는 기초 동사를 익힙니다." },
    { "id": 7, "part": "basic", "group": "basic_4", "name": "기초 4", "desc": "사물의 상태를 표현하는 형용사입니다." },
    { "id": 8, "part": "travel", "group": "travel_4", "name": "여행 실전", "desc": "여행지에서 바로 쓸 수 있는 실전 문장입니다." },
    {
        id: 9,
        part: "life",
        group: "life_1",
        name: "실생활 1",
        desc: "가족, 사람, 기본 생활 관련 단어입니다."
    },
    {
        id: 10,
        part: "life",
        group: "life_2",
        name: "실생활 2",
        desc: "시간과 빈도 표현 등 자주 쓰는 기초 표현입니다."
    },
    {
        id: 11,
        part: "life",
        group: "life_3",
        name: "실생활 3",
        desc: "감정과 상태를 표현하는 형용사/명사입니다."
    },
    {
        id: 12,
        part: "life",
        group: "life_4",
        name: "실생활 4",
        desc: "일상에서 매우 자주 쓰는 기본 동사들입니다."
    },
    {
        id: 13,
        part: "life",
        group: "life_5",
        name: "실생활 5",
        desc: "회화에서 자주 쓰는 한마디 표현들입니다."
    },

    // 여행 심화 1~5
    {
        id: 14,
        part: "travel_adv",
        group: "travel_adv_1",
        name: "여행 심화 1",
        desc: "길 찾기, 방향 물어볼 때 쓰는 표현입니다."
    },
    {
        id: 15,
        part: "travel_adv",
        group: "travel_adv_2",
        name: "여행 심화 2",
        desc: "숙소/호텔 이용 시 자주 쓰는 단어입니다."
    },
    {
        id: 16,
        part: "travel_adv",
        group: "travel_adv_3",
        name: "여행 심화 3",
        desc: "쇼핑, 계산, 할인 관련 필수 표현입니다."
    },
    {
        id: 17,
        part: "travel_adv",
        group: "travel_adv_4",
        name: "여행 심화 4",
        desc: "음식, 알레르기, 특이 식단 관련 표현입니다."
    },
    {
        id: 18,
        part: "travel_adv",
        group: "travel_adv_5",
        name: "여행 심화 5",
        desc: "긴급 상황, 분실, 병원 관련 표현입니다."
    }
];

const wordData = [
    { "id": 1, "group": "basic_1", "jp": "わたし", "kr": "나" },
    { "id": 2, "group": "basic_1", "jp": "あなた", "kr": "너" },
    { "id": 3, "group": "basic_1", "jp": "これ", "kr": "이것" },
    { "id": 4, "group": "basic_1", "jp": "それ", "kr": "그것" },
    { "id": 5, "group": "basic_1", "jp": "あれ", "kr": "저것" },
    { "id": 6, "group": "basic_1", "jp": "だれ", "kr": "누구" },
    { "id": 7, "group": "basic_1", "jp": "どこ", "kr": "어디" },
    { "id": 8, "group": "basic_1", "jp": "いつ", "kr": "언제" },
    { "id": 9, "group": "basic_1", "jp": "なぜ / どうして", "kr": "왜" },
    { "id": 10, "group": "basic_1", "jp": "どう", "kr": "어떻게" },

    { "id": 11, "group": "basic_2", "jp": "いっしょに", "kr": "같이" },
    { "id": 12, "group": "basic_2", "jp": "はい", "kr": "네" },
    { "id": 13, "group": "basic_2", "jp": "いいえ", "kr": "아니요" },
    { "id": 14, "group": "basic_2", "jp": "お願(one)いします", "kr": "부탁합니다" },
    { "id": 15, "group": "basic_2", "jp": "すみません", "kr": "죄송합니다 / 실례합니다" },
    { "id": 16, "group": "basic_2", "jp": "わかりません", "kr": "모르겠습니다" },
    { "id": 17, "group": "basic_2", "jp": "わかります", "kr": "알겠습니다" },
    { "id": 18, "group": "basic_2", "jp": "もういちど", "kr": "다시 한 번" },
    { "id": 19, "group": "basic_2", "jp": "ゆっくり", "kr": "천천히" },
    { "id": 20, "group": "basic_2", "jp": "ちょっと待(ma)って", "kr": "잠깐 기다려" },

    { "id": 21, "group": "travel_1", "jp": "ホテル", "kr": "호텔" },
    { "id": 22, "group": "travel_1", "jp": "レストラン", "kr": "식당 / 레스토랑" },
    { "id": 23, "group": "travel_1", "jp": "トイレ", "kr": "화장실" },
    { "id": 24, "group": "travel_1", "jp": "駅(eki)", "kr": "역" },
    { "id": 25, "group": "travel_1", "jp": "空(kuu)港(kou)", "kr": "공항" },
    { "id": 26, "group": "travel_1", "jp": "地(chi)図(zu)", "kr": "지도" },
    { "id": 27, "group": "travel_1", "jp": "道(michi)", "kr": "길" },
    { "id": 28, "group": "travel_1", "jp": "入(iri)口(guchi)", "kr": "입구" },
    { "id": 29, "group": "travel_1", "jp": "出(de)口(guchi)", "kr": "출구" },
    { "id": 30, "group": "travel_1", "jp": "チケット", "kr": "티켓 / 표" },

    { "id": 31, "group": "travel_2", "jp": "お金(kane)", "kr": "돈" },
    { "id": 32, "group": "travel_2", "jp": "カード", "kr": "카드" },
    { "id": 33, "group": "travel_2", "jp": "値(ne)段(dan)", "kr": "가격" },
    { "id": 34, "group": "travel_2", "jp": "安(yasu)い", "kr": "싸다" },
    { "id": 35, "group": "travel_2", "jp": "高(taka)い", "kr": "비싸다" },
    { "id": 36, "group": "travel_2", "jp": "お土(miya)産(ge)", "kr": "기념품" },
    { "id": 37, "group": "travel_2", "jp": "ショッピング", "kr": "쇼핑" },
    { "id": 38, "group": "travel_2", "jp": "サイズ", "kr": "사이즈" },
    { "id": 39, "group": "travel_2", "jp": "試(shi)着(chaku)", "kr": "착용 / 피팅" },
    { "id": 40, "group": "travel_2", "jp": "おすすめ", "kr": "추천" },

    { "id": 41, "group": "travel_3", "jp": "メニュー", "kr": "메뉴" },
    { "id": 42, "group": "travel_3", "jp": "注(chuu)文(mon)", "kr": "주문" },
    { "id": 43, "group": "travel_3", "jp": "水(mizu)", "kr": "물" },
    { "id": 44, "group": "travel_3", "jp": "美(oi)味(shii)い", "kr": "맛있다" },
    { "id": 45, "group": "travel_3", "jp": "まずい", "kr": "맛없다" },
    { "id": 46, "group": "travel_3", "jp": "アレルギー", "kr": "알레르기" },
    { "id": 47, "group": "travel_3", "jp": "辛(kara)い", "kr": "맵다" },
    { "id": 48, "group": "travel_3", "jp": "甘(ama)い", "kr": "달다" },
    { "id": 49, "group": "travel_3", "jp": "肉(niku)", "kr": "고기" },
    { "id": 50, "group": "travel_3", "jp": "魚(sakana)", "kr": "생선" },

    { "id": 51, "group": "basic_3", "jp": "する", "kr": "하다" },
    { "id": 52, "group": "basic_3", "jp": "いく", "kr": "가다" },
    { "id": 53, "group": "basic_3", "jp": "くる", "kr": "오다" },
    { "id": 54, "group": "basic_3", "jp": "みる", "kr": "보다" },
    { "id": 55, "group": "basic_3", "jp": "たべる", "kr": "먹다" },
    { "id": 56, "group": "basic_3", "jp": "のむ", "kr": "마시다" },
    { "id": 57, "group": "basic_3", "jp": "いう", "kr": "말하다" },
    { "id": 58, "group": "basic_3", "jp": "ねる", "kr": "자다" },
    { "id": 59, "group": "basic_3", "jp": "おきる", "kr": "일어나다" },
    { "id": 60, "group": "basic_3", "jp": "つかう", "kr": "사용하다" },

    { "id": 61, "group": "basic_4", "jp": "大(oo)きい", "kr": "크다" },
    { "id": 62, "group": "basic_4", "jp": "小(chii)さい", "kr": "작다" },
    { "id": 63, "group": "basic_4", "jp": "長(naga)い", "kr": "길다" },
    { "id": 64, "group": "basic_4", "jp": "短(miji)かい", "kr": "짧다" },
    { "id": 65, "group": "basic_4", "jp": "早(haya)い", "kr": "빠르다 / 이르다" },
    { "id": 66, "group": "basic_4", "jp": "遅(oso)い", "kr": "늦다 / 느리다" },
    { "id": 67, "group": "basic_4", "jp": "新(atarashi)い", "kr": "새롭다" },
    { "id": 68, "group": "basic_4", "jp": "古(furu)い", "kr": "오래되다" },
    { "id": 69, "group": "basic_4", "jp": "強(tsuyo)い", "kr": "강하다" },
    { "id": 70, "group": "basic_4", "jp": "弱(yowa)い", "kr": "약하다" },

    { "id": 71, "group": "travel_4", "jp": "これ は すし ください", "kr": "이거 스시 주세요" },
    { "id": 72, "group": "travel_4", "jp": "おすすめ を お願(one)いします", "kr": "추천으로 부탁합니다" },
    { "id": 73, "group": "travel_4", "jp": "お会(kai)計(kei) お願(one)いします", "kr": "계산 부탁합니다" },
    { "id": 74, "group": "travel_4", "jp": "写(sha)真(shin) を とって ください", "kr": "사진 찍어 주세요" },
    { "id": 75, "group": "travel_4", "jp": "道(michi) に まよいました", "kr": "길을 잃었어요" },
    { "id": 76, "group": "travel_4", "jp": "駅(eki) は どこ ですか", "kr": "역은 어디인가요?" },
    { "id": 77, "group": "travel_4", "jp": "この バス は 空(kuu)港(kou) に 行(i)きます か", "kr": "이 버스는 공항에 가나요?" },
    { "id": 78, "group": "travel_4", "jp": "クレジットカード は つかえます か", "kr": "카드 사용할 수 있나요?" },
    { "id": 79, "group": "travel_4", "jp": "予(yo)約(yaku) して いません", "kr": "예약 안 했습니다" },
    { "id": 80, "group": "travel_4", "jp": "部(he)屋(ya) を かえられます か", "kr": "방을 변경할 수 있나요?" },
    { "id": 81, "group": "travel_4", "jp": "Wi-Fi パスワード を おしえて ください", "kr": "와이파이 비밀번호 알려 주세요" },
    { "id": 82, "group": "travel_4", "jp": "ちょっと まって ください", "kr": "잠시만 기다려 주세요" },
    { "id": 83, "group": "travel_4", "jp": "もっと ゆっくり はなして ください", "kr": "좀 더 천천히 말해 주세요" },
    { "id": 84, "group": "travel_4", "jp": "これは アレルギー が あります", "kr": "이건 알레르기가 있어요" },
    { "id": 85, "group": "travel_4", "jp": "荷(ni)物(motsu) を あずけたい です", "kr": "짐을 맡기고 싶어요" },
    { "id": 86, "group": "travel_4", "jp": "明(ashi)日(ta) 何(nan)時(ji) に 出(de)ます か", "kr": "내일 몇 시에 나가나요?" },
    { "id": 87, "group": "travel_4", "jp": "チェックイン できます か", "kr": "체크인 할 수 있나요?" },
    { "id": 88, "group": "travel_4", "jp": "チェックアウト は 何(nan)時(ji) ですか", "kr": "체크아웃은 몇 시인가요?" },
    { "id": 89, "group": "travel_4", "jp": "タクシー を よんで ください", "kr": "택시 불러 주세요" },
    { "id": 90, "group": "travel_4", "jp": "助(tasu)けて ください", "kr": "도와 주세요" },

    // --- 실생활 1 : 가족/사람/기본 생활 ---
    { id: 91, group: "life_1", jp: "お母さん", kr: "엄마" },
    { id: 92, group: "life_1", jp: "お父さん", kr: "아빠" },
    { id: 93, group: "life_1", jp: "友達", kr: "친구" },
    { id: 94, group: "life_1", jp: "子ども", kr: "아이 / 어린이" },
    { id: 95, group: "life_1", jp: "先生", kr: "선생님" },
    { id: 96, group: "life_1", jp: "会社", kr: "회사" },
    { id: 97, group: "life_1", jp: "家", kr: "집" },
    { id: 98, group: "life_1", jp: "学校", kr: "학교" },
    { id: 99, group: "life_1", jp: "電話", kr: "전화" },
    { id: 100, group: "life_1", jp: "今日", kr: "오늘" },

    // --- 실생활 2 : 시간/빈도 ---
    { id: 101, group: "life_2", jp: "朝", kr: "아침" },
    { id: 102, group: "life_2", jp: "夜", kr: "밤 / 저녁" },
    { id: 103, group: "life_2", jp: "時間", kr: "시간" },
    { id: 104, group: "life_2", jp: "今週", kr: "이번 주" },
    { id: 105, group: "life_2", jp: "来週", kr: "다음 주" },
    { id: 106, group: "life_2", jp: "毎日", kr: "매일" },
    { id: 107, group: "life_2", jp: "いつも", kr: "항상 / 늘" },
    { id: 108, group: "life_2", jp: "すぐ", kr: "곧 / 바로" },
    { id: 109, group: "life_2", jp: "よく", kr: "자주" },
    { id: 110, group: "life_2", jp: "たくさん", kr: "많이 / 양이 많음" },

    // --- 실생활 3 : 감정/상태 ---
    { id: 111, group: "life_3", jp: "うれしい", kr: "기쁘다" },
    { id: 112, group: "life_3", jp: "かなしい", kr: "슬프다" },
    { id: 113, group: "life_3", jp: "たのしい", kr: "즐겁다 / 재미있다" },
    { id: 114, group: "life_3", jp: "つかれた", kr: "피곤하다" },
    { id: 115, group: "life_3", jp: "ねむい", kr: "졸리다" },
    { id: 116, group: "life_3", jp: "びょうき", kr: "병 / 아픔" },
    { id: 117, group: "life_3", jp: "だいじょうぶ", kr: "괜찮다" },
    { id: 118, group: "life_3", jp: "ひま", kr: "한가하다" },
    { id: 119, group: "life_3", jp: "いそがしい", kr: "바쁘다" },
    { id: 120, group: "life_3", jp: "こわい", kr: "무섭다 / 두렵다" },

    // --- 실생활 4 : 자주 쓰는 동사 ---
    { id: 121, group: "life_4", jp: "歩く", kr: "걷다" },
    { id: 122, group: "life_4", jp: "走る", kr: "달리다" },
    { id: 123, group: "life_4", jp: "住む", kr: "살다(거주하다)" },
    { id: 124, group: "life_4", jp: "働く", kr: "일하다 / 근무하다" },
    { id: 125, group: "life_4", jp: "休む", kr: "쉬다 / 휴식하다" },
    { id: 126, group: "life_4", jp: "会う", kr: "만나다" },
    { id: 127, group: "life_4", jp: "開ける", kr: "열다" },
    { id: 128, group: "life_4", jp: "閉める", kr: "닫다" },
    { id: 129, group: "life_4", jp: "始める", kr: "시작하다" },
    { id: 130, group: "life_4", jp: "終わる", kr: "끝나다" },

    // --- 실생활 5 : 회화 한마디 표현 ---
    { id: 131, group: "life_5", jp: "すごい", kr: "대단하다 / 굉장하다" },
    { id: 132, group: "life_5", jp: "本当に", kr: "정말 / 진짜" },
    { id: 133, group: "life_5", jp: "大丈夫です", kr: "괜찮습니다" },
    { id: 134, group: "life_5", jp: "大好き", kr: "아주 좋아하다 / 정말 좋아하다" },
    { id: 135, group: "life_5", jp: "大嫌い", kr: "아주 싫어하다" },
    { id: 136, group: "life_5", jp: "たぶん", kr: "아마(도)" },
    { id: 137, group: "life_5", jp: "もちろん", kr: "물론" },
    { id: 138, group: "life_5", jp: "だから", kr: "그래서 / 그러니까" },
    { id: 139, group: "life_5", jp: "でも", kr: "하지만 / 그런데" },
    { id: 140, group: "life_5", jp: "本当ですか", kr: "정말입니까? / 진짜예요?" },

    // --- 여행 심화 1 : 길/방향 ---
    { id: 141, group: "travel_adv_1", jp: "まっすぐ", kr: "똑바로 / 곧장" },
    { id: 142, group: "travel_adv_1", jp: "右", kr: "오른쪽" },
    { id: 143, group: "travel_adv_1", jp: "左", kr: "왼쪽" },
    { id: 144, group: "travel_adv_1", jp: "ここ", kr: "여기" },
    { id: 145, group: "travel_adv_1", jp: "そこ", kr: "거기" },
    { id: 146, group: "travel_adv_1", jp: "あそこ", kr: "저기" },
    { id: 147, group: "travel_adv_1", jp: "近い", kr: "가깝다" },
    { id: 148, group: "travel_adv_1", jp: "遠い", kr: "멀다" },
    { id: 149, group: "travel_adv_1", jp: "角", kr: "모퉁이 / 코너" },
    { id: 150, group: "travel_adv_1", jp: "信号", kr: "신호등" },

    // --- 여행 심화 2 : 숙소/호텔 ---
    { id: 151, group: "travel_adv_2", jp: "フロント", kr: "프런트 / 안내 데스크" },
    { id: 152, group: "travel_adv_2", jp: "予約確認", kr: "예약 확인" },
    { id: 153, group: "travel_adv_2", jp: "シングルルーム", kr: "싱글룸 / 1인실" },
    { id: 154, group: "travel_adv_2", jp: "ツインルーム", kr: "트윈룸 / 2인실" },
    { id: 155, group: "travel_adv_2", jp: "朝食付き", kr: "조식 포함" },
    { id: 156, group: "travel_adv_2", jp: "禁煙ルーム", kr: "금연실" },
    { id: 157, group: "travel_adv_2", jp: "喫煙所", kr: "흡연 구역" },
    { id: 158, group: "travel_adv_2", jp: "エレベーター", kr: "엘리베이터" },
    { id: 159, group: "travel_adv_2", jp: "エアコン", kr: "에어컨" },
    { id: 160, group: "travel_adv_2", jp: "シャワー", kr: "샤워" },

    // --- 여행 심화 3 : 쇼핑/계산 ---
    { id: 161, group: "travel_adv_3", jp: "割引", kr: "할인" },
    { id: 162, group: "travel_adv_3", jp: "免税", kr: "면세" },
    { id: 163, group: "travel_adv_3", jp: "現金", kr: "현금" },
    { id: 164, group: "travel_adv_3", jp: "レジ", kr: "계산대 / 캐셔" },
    { id: 165, group: "travel_adv_3", jp: "在庫", kr: "재고" },
    { id: 166, group: "travel_adv_3", jp: "色", kr: "색 / 색깔" },
    { id: 167, group: "travel_adv_3", jp: "交換", kr: "교환" },
    { id: 168, group: "travel_adv_3", jp: "返品", kr: "반품 / 환불(상품 반환)" },
    { id: 169, group: "travel_adv_3", jp: "試食", kr: "시식" },
    { id: 170, group: "travel_adv_3", jp: "試飲", kr: "시음" },

    // --- 여행 심화 4 : 음식/알레르기/특이 식단 ---
    { id: 171, group: "travel_adv_4", jp: "ベジタリアン", kr: "베지테리언 / 채식주의자" },
    { id: 172, group: "travel_adv_4", jp: "ハラール", kr: "할랄" },
    { id: 173, group: "travel_adv_4", jp: "豚肉", kr: "돼지고기" },
    { id: 174, group: "travel_adv_4", jp: "牛乳", kr: "우유" },
    { id: 175, group: "travel_adv_4", jp: "卵", kr: "달걀 / 계란" },
    { id: 176, group: "travel_adv_4", jp: "入っている", kr: "들어 있다 / 포함되어 있다" },
    { id: 177, group: "travel_adv_4", jp: "抜きで", kr: "~ 빼고 / 없이" },
    { id: 178, group: "travel_adv_4", jp: "おすすめ料理", kr: "추천 요리" },
    { id: 179, group: "travel_adv_4", jp: "名物", kr: "명물 / 명물 요리" },
    { id: 180, group: "travel_adv_4", jp: "辛さ", kr: "매운 정도 / 매운맛의 정도" },

    // --- 여행 심화 5 : 긴급 상황/병원/분실 ---
    { id: 181, group: "travel_adv_5", jp: "病院", kr: "병원" },
    { id: 182, group: "travel_adv_5", jp: "薬", kr: "약" },
    { id: 183, group: "travel_adv_5", jp: "警察", kr: "경찰" },
    { id: 184, group: "travel_adv_5", jp: "パスポート", kr: "여권" },
    { id: 185, group: "travel_adv_5", jp: "落としました", kr: "떨어뜨렸습니다 / 잃어버렸습니다" },
    { id: 186, group: "travel_adv_5", jp: "なくしました", kr: "잃어버렸습니다" },
    { id: 187, group: "travel_adv_5", jp: "迷子", kr: "길을 잃은 아이 / 미아" },
    { id: 188, group: "travel_adv_5", jp: "怪我", kr: "부상 / 상처" },
    { id: 189, group: "travel_adv_5", jp: "緊急", kr: "긴급 / 응급" },
    { id: 190, group: "travel_adv_5", jp: "保険", kr: "보험" }
];