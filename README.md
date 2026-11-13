# 책 개념 지도

책 표지를 가운데 두고, 목차(장)마다 연결된 수업 프로그램(HTML)을 눌러 여는 페이지입니다.
`index.html`을 더블클릭하면 브라우저에서 바로 열립니다(서버 필요 없음).

## 들어 있는 책

| 책 폴더 | 책 | 연결된 프로그램 |
|---|---|---|
| `books/how-to-lie-with-statistics/` | 『새빨간 거짓말, 통계』 (대럴 허프) | 10개 (1~8장) |
| `books/why-machines-learn/` | 『기계는 왜 학습하는가』 (아닐 아난타스와미) | 10개 (1~4장) |

## 폴더 구조

```
책 개념 지도/
├─ index.html        ← 이 파일을 연다
├─ app.css, app.js   ← 화면과 동작 (보통 고칠 필요 없음)
├─ data/books.js     ← 책 목록·목차·프로그램 목록 (여기만 고치면 됨)
├─ books/
│  ├─ how-to-lie-with-statistics/
│  │  ├─ cover.jpg
│  │  └─ programs/   ← 수업 프로그램 HTML들
│  └─ why-machines-learn/
│     ├─ cover.webp
│     └─ programs/
└─ 새로운 책 html/    ← (git에는 올리지 않음) 아직 정리 안 한 HTML을 잠시 두는 곳
```

## 프로그램 하나 추가하기

1. HTML 파일을 `books/<책 폴더>/programs/`에 넣는다.
2. `data/books.js`에서 해당 장의 `programs` 배열에 항목을 추가한다.

```js
{
  id: "gee-whiz-graph",                 // 영문·숫자·하이픈, 책 안에서 겹치지 않게
  title: "깜짝 놀랄 그래프",
  file: "programs/5차시 깜짝 그래프.html",
  type: "실험",                          // 카드뉴스 / 단계 활동 / 읽기 자료 / 실험 / 시뮬레이터 …
  session: "5차시",                      // 없으면 "" 로 둔다
  pages: "100~110쪽",
  summary: "한 줄 소개",
  concepts: ["그래프", "축의 눈금"]       // '개념으로 찾기'에 자동으로 나타남
}
```

HTML 안의 `책 이름 + 쪽수` 줄(예: `<p class="book">…104~105쪽…</p>`)을 보면 어느 장에 넣을지 알 수 있다.
장 시작 쪽(`page`)보다 크고 다음 장 시작 쪽보다 작으면 그 장이다.

## 새 책 추가하기

1. `books/` 안에 새 폴더(예: `books/flatland/`)를 만들고 표지 이미지(`cover.jpg`·`cover.webp` 등)와 `programs/` 폴더를 넣는다.
2. `data/books.js`의 `window.BOOKS` 배열에 책을 하나 더 추가한다. 형식은 기존 책을 그대로 복사해서 고치면 된다.
   - `cover`에 표지 파일 이름을 적는다.
   - `chapters`에 **그 책의 실제 목차**를 적고, 프로그램이 아직 없는 장은 `programs: []`로 두면 지도에 '준비 중'으로 표시된다.
   - 프롤로그·에필로그처럼 장이 아닌 항목은 넣지 않는다(장 수 계산에 섞이지 않게).

## GitHub에 올리기

이 폴더는 `SewoongYun/book` 저장소(main)와 연결되어 있고, 공개 주소는 https://sewoongyun.github.io/book/ 입니다.
포트폴리오 사이트는 이 주소로 연결만 합니다.

```
git add -A
git commit -m "무엇을 바꿨는지"
git push origin main
```

반영까지 1~2분, 브라우저 캐시는 `Ctrl+F5`로 새로고침하면 됩니다.

## 참고

- 『새빨간 거짓말, 통계』 1~7장은 번역본 목차(제목·시작 쪽·소제목) 그대로입니다. 8~10장은 아직 원서 기준 임시 제목이니 목차 다음 쪽을 보고 `data/books.js`에서 고쳐 주세요.
- 『기계는 왜 학습하는가』는 번역본(까치) 목차 사진 기준으로 12개 장의 제목과 시작 쪽을 적었습니다. 소제목은 아직 없습니다.
- 장마다 `page`(시작 쪽)와 `sections`(소제목 목록)를 적으면 말풍선 안에 작게 표시됩니다. 둘 다 생략해도 됩니다.
- 화면이 좁으면(태블릿 세로·휴대폰) 표지가 위로 가고 장 목록이 세로로 나열됩니다.
