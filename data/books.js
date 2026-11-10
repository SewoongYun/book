/*
 * 책 목록
 * - 새 책: 이 배열에 객체를 하나 더 추가하고, books/<id>/ 폴더에 cover.jpg 와 programs/ 를 넣는다.
 * - 새 프로그램: 해당 장(chapter)의 programs 배열에 항목을 추가하고 HTML 파일을 programs/ 폴더에 넣는다.
 * 자세한 방법은 README.md 참고.
 */
window.BOOKS = [
  {
    id: "how-to-lie-with-statistics",
    dir: "books/how-to-lie-with-statistics",
    cover: "cover.jpg",
    title: "새빨간 거짓말, 통계",
    original: "How to Lie with Statistics",
    author: "대럴 허프",
    translator: "박영훈",
    publisher: "청년정신",
    subject: "통계",
    intro: "표본, 평균, 오차, 그래프… 숫자가 사람을 속이는 방법을 짚어 보는 통계 교양서. 장마다 관련 개념을 직접 계산하고 실험해 보는 프로그램을 연결했다.",
    // 목차(PART 1~7)는 번역본 그대로. page = 장이 시작하는 쪽, sections = 소제목
    chapters: [
      {
        no: 1, title: "언제나 의심스러운 여론조사", page: 13,
        sections: ["예일대학 졸업생의 연평균소득", "표본 추출의 맹점", "주소불명의 예일대 졸업생들", "거짓말쟁이들", "통계적 조작",
                   "표본이 왜곡되면", "왜곡 가능성에 대한 의심", "임의추출법", "층별 임의추출법", "킨제이 보고서",
                   "질문자에 따른 왜곡된 결론", "왜곡된 결과가 나오는 이유"],
        programs: [
          {
            id: "sampling-bias", title: "표본추출의 맹점",
            file: "programs/2차시 표본추출의 맹점.html",
            type: "카드뉴스", session: "2차시", pages: "28쪽",
            summary: "1,000명에게 물으면 5천만 명의 생각을 알 수 있을까? 카드 11장과 진행 메모",
            concepts: ["전수조사", "표본조사", "모집단", "표본", "대표성", "임의추출", "편향", "표본오차"]
          }
        ]
      },
      {
        no: 2, title: "평균은 하나가 아니다", page: 43,
        sections: ["평균치로 사기치는 법", "적절한 평균값", "평균임금?", "그나마 신뢰할 수 있는 평균값"],
        programs: [
          {
            id: "average-trap", title: "평균의 함정",
            file: "programs/3차시 평균의 함정.html",
            type: "단계 활동", session: "3차시", pages: "",
            summary: "평균·중앙값·최빈값을 손으로 계산하고, 사장 월급을 움직여 이상값의 힘을 확인하는 10단계",
            concepts: ["대푯값", "평균", "중앙값", "최빈값", "이상값", "정규분포"]
          },
          {
            id: "average-salary", title: "평균급여의 속임수",
            file: "programs/3차시 평균급여의 속임수.html",
            type: "읽기 자료", session: "3차시", pages: "54~56쪽",
            summary: "같은 돈, 두 개의 발표문. 이름표와 평균에 넣는 사람을 바꾸면 숫자가 달라진다",
            concepts: ["평균", "중앙값", "이상값"]
          }
        ]
      },
      {
        no: 3, title: "작은 숫자를 생략하여 사기 치는 법", page: 61,
        sections: ["적은 인원수의 표본을 쓰는 이유", "표본의 크기에 따라 달라지는 값", "속지 않는 방법", "게젤의 준거",
                   "신문기사를 신뢰할 수 있나?", "부모들 눈 가리고 아웅하기", "그래프에 속지마라"],
        programs: [
          {
            id: "coin-lab", title: "동전 던지기 실험실",
            file: "programs/4차시 동전 던지기 실험실.html",
            type: "실험", session: "4차시", pages: "68쪽",
            summary: "10번 vs 1,000번. 혼자, 그리고 30명이 동전을 던져 보며 큰 수의 법칙 확인",
            concepts: ["큰 수의 법칙", "상대도수", "확률"]
          },
          {
            id: "significance", title: "유의수준과 동전 100번",
            file: "programs/4차시 유의수준과 동전 100번.html",
            type: "시뮬레이터", session: "4차시", pages: "70~71쪽",
            summary: "n번 중 k번이 나올 확률을 예상하고 확인. 유의수준 5%와 1%의 판정선",
            concepts: ["확률", "경우의 수", "유의수준", "유의확률"]
          }
        ]
      },
      {
        no: 4, title: "쓸데없는 숫자로 벌어지는 헛소동", page: 89,
        sections: ["IQ는 믿을 만한가", "예상오차", "아무리 적어도 차이는 차이"],
        programs: [
          {
            id: "probable-error", title: "예상오차와 표준오차",
            file: "programs/4차시 예상오차와 표준오차.html",
            type: "실험", session: "4차시", pages: "94~95쪽",
            summary: "발걸음으로 100m를 10번 재서 예상오차 구하기. 피터 98 vs 린다 101",
            concepts: ["오차", "예상오차", "표준오차", "중앙값"]
          }
        ]
      },
      { no: 5, title: "사람 눈을 속이는 그래프", page: 101,
        sections: ["눈을 속이는 그래프", "작은 것도 크게", "절단된 막대그래프"],
        programs: [
          {
            id: "graph-axis-lab", title: "그래프 축 실험실",
            file: "programs/5차시 그래프 축 실험실.html",
            type: "실험", session: "5차시", pages: "104~105쪽",
            summary: "같은 10% 증가를 세로축만 바꿔 그려 보고, 보이는 배수를 손으로 계산해 과장 정도를 확인",
            concepts: ["그래프", "세로축", "축 자르기", "과장 배율"]
          }
        ] },
      { no: 6, title: "백문이 불여일견이라고? 천만에", page: 113,
        sections: ["막대그래프도 모자라나", "시각을 자극하는 그림 도표", "과장된 도표들"],
        programs: [
          {
            id: "money-bag-trap", title: "돈자루 그림의 함정",
            file: "programs/5차시 돈자루 그림의 함정.html",
            type: "실험", session: "5차시", pages: "120~121쪽",
            summary: "2배 차이를 돈자루로 그리면 넓이 4배, 부피 8배로 보인다. 네 가지 그림 방식 비교와 닮음비 계산",
            concepts: ["그림 도표", "닮음비", "넓이 비", "부피 비", "과장"]
          }
        ] },
      { no: 7, title: "아전인수를 위한 마구잡이 통계", page: 127,
        sections: ["억지로 갖다 붙이기", "숫자로 장난치기", "숫자는 실제와 다르다", "의미 없는 숫자", "4년마다 생기는 숫자들"],
        programs: [
          {
            id: "hidden-profit", title: "숨겨진 이윤 찾기",
            file: "programs/6차시 숨겨진 이윤 찾기.html",
            type: "실험", session: "6차시", pages: "140쪽",
            summary: "실제 이윤 300억을 감가상각·적립금 칸으로 옮겨 ‘겨우 120억’으로 발표해 보고, 발표 이윤이 실제의 몇 %인지 손으로 계산하는 4단계",
            concepts: ["이윤", "매출", "비용", "이익률", "백분율", "장부 조작"]
          }
        ] },
      // 8~10장은 아직 목차 사진에 없어 원서 기준 임시 제목
      { no: 8, title: "원인과 결과의 혼동", programs: [] },
      { no: 9, title: "통계를 조작하는 법", programs: [] },
      { no: 10, title: "통계에 되묻는 법", programs: [] }
    ]
  },
  {
    id: "why-machines-learn",
    dir: "books/why-machines-learn",
    cover: "cover.webp",
    title: "기계는 왜 학습하는가",
    original: "Why Machines Learn",
    author: "아닐 아난타스와미",
    translator: "노승영",
    publisher: "까치",
    subject: "인공지능 · 수학",
    intro: "퍼셉트론에서 심층 신경망, 오늘날의 인공지능까지. AI를 움직이는 수학(선형대수·미적분·확률·최적화)을 장마다 직접 만져 보며 따라가는 프로그램을 연결했다.",
    // 목차는 번역본(까치, 2025) 그대로. page = 장이 시작하는 쪽. 프롤로그(9쪽)·에필로그(425쪽)는 장이 아니라 생략
    chapters: [
      {
        no: 1, title: "패턴을 찾고 말 테다", page: 15,
        programs: [
          {
            id: "artificial-neuron-lab", title: "인공 뉴런 실험실",
            file: "programs/인공 뉴런 실험실.html",
            type: "실험", session: "", pages: "22~31쪽",
            summary: "MCP 뉴런(뉴로드)으로 AND·OR·NOT·XOR을 만들어 보고, 퍼셉트론이 틀린 점을 만날 때마다 선을 고쳐 가는 과정을 6단계로 따라가기",
            concepts: ["뉴런", "뉴로드", "논리 게이트", "XOR", "퍼셉트론", "가중치", "편향", "선형 분리"]
          }
        ]
      },
      {
        no: 2, title: "여기에선 모두가 숫자에 불과하다", page: 34,
        programs: [
          {
            id: "quaternion-lab", title: "사원수 실험실",
            file: "programs/사원수 실험실.html",
            type: "실험", session: "", pages: "34~36쪽",
            summary: "해밀턴이 다리에 새긴 수식에서 출발해, i를 곱하면 90° 도는 복소수부터 i·j·k 세 허수의 곱셈표, 교환법칙이 깨지는 p×q와 q×p, 공간 회전까지 5단계로 따라가기",
            concepts: ["해밀턴", "복소수", "회전", "사원수", "허수 i·j·k", "교환법칙", "3차원 회전"]
          },
          {
            id: "vector-lab", title: "벡터 실험실",
            file: "programs/벡터 실험실.html",
            type: "실험", session: "", pages: "37~53쪽",
            summary: "크기와 방향을 가진 화살표로 벡터의 덧셈·스칼라 곱·정사영을 만져 보고, 퍼셉트론의 가중합이 점곱이며 y = f(wᵀx) 한 줄로 쓰인다는 것까지 8단계로 따라가기",
            concepts: ["벡터", "크기", "방향", "벡터 덧셈", "스칼라 곱", "단위벡터", "정사영", "점곱", "행렬", "퍼셉트론"]
          },
          {
            id: "perceptron-training-lab", title: "퍼셉트론 훈련 실험실",
            file: "programs/퍼셉트론 훈련 실험실.html",
            type: "실험", session: "", pages: "58~61쪽",
            summary: "y·wᵀx의 부호로 맞고 틀림을 한 번에 검사하고, w = 0에서 출발해 틀릴 때마다 y·x를 더하며 초평면이 돌아가는 과정과 훈련이 반드시 끝나는 이유까지 5단계로 따라가기",
            concepts: ["퍼셉트론", "훈련 알고리즘", "가중치 갱신", "초평면", "점곱", "선형 분리", "수렴"]
          },
          {
            id: "convergence-proof-lab", title: "수렴 증명 실험실",
            file: "programs/수렴 증명 실험실.html",
            type: "실험", session: "", pages: "64~70쪽",
            summary: "선형 분리 가능하다는 가정에서 출발해, wᵀw*는 고칠 때마다 γ 이상 커지고 wᵀw는 많아야 1 커진다는 두 중간 결과로 M ≤ 1/γ²(고치는 횟수의 한계)를 5단계로 증명하기",
            concepts: ["퍼셉트론", "수렴 정리", "증명", "γ 띠", "점곱", "부등식", "선형 분리"]
          }
        ]
      },
      {
        no: 3, title: "그릇의 바닥", page: 72,
        programs: [
          {
            id: "gradient-descent-lab", title: "경사 하강법 실험실",
            file: "programs/경사 하강법 실험실.html",
            type: "실험", session: "", pages: "72~85쪽",
            summary: "눈을 가리고 그릇 바닥을 찾듯, y = x²에서 기울기를 거슬러 한 걸음씩 내려가 보고, 변수가 둘인 그릇과 안장점을 3차원으로 살펴본 뒤 공식에 직접 넣어 보는 과정을 6단계로 따라가기",
            concepts: ["경사 하강법", "기울기", "미분", "접선", "걸음 크기(η)", "편미분", "최솟값", "볼록 함수", "안장점"]
          }
        ]
      },
      { no: 4,  title: "십중팔구", page: 103, programs: [] },
      { no: 5,  title: "유유상종", page: 152, programs: [] },
      { no: 6,  title: "행렬에는 마법이 있다", page: 184, programs: [] },
      { no: 7,  title: "커널 밧줄 탈출쇼", page: 213, programs: [] },
      { no: 8,  title: "물리학의 소소한 도움으로", page: 249, programs: [] },
      { no: 9,  title: "심층 학습의 발목을 잡은 사람(실은 아님)", page: 285, programs: [] },
      { no: 10, title: "오래된 신화를 깨뜨린 알고리즘", page: 310, programs: [] },
      { no: 11, title: "기계의 눈", page: 354, programs: [] },
      { no: 12, title: "미지의 땅", page: 391, programs: [] }
    ]
  }
];
