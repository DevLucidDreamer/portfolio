# 포트폴리오 사이트

빌드 과정이 없는 정적 사이트. `index.html`을 브라우저로 열면 바로 동작하고,
GitHub Pages에 그대로 올리면 배포 끝.

## 1. 폴더 구조

```
index.html        ← 페이지 마크업 (소개·기술·활동·연락 텍스트는 여기서 수정)
css/style.css     ← 디자인 전체 (색은 맨 위 :root 변수만 고치면 됨)
js/main.js        ← 동작 로직 (프로젝트 렌더링·테마 토글·지연 로드) — 보통 손댈 일 없음
data/projects.js  ← 프로젝트 데이터 (가장 자주 고칠 파일)
images/           ← 프로젝트 배경 이미지
README.md         ← 이 문서
```

## 2. 프로젝트 추가/수정/삭제

`data/projects.js` 한 파일만 고치면 된다. 배열 순서 = 화면 순서.

```js
{
  title: "프로젝트 이름",
  desc:  "한 줄 설명",
  award: "수상/출시 뱃지",          // 없으면 "" (뱃지가 아예 안 보임)
  tech:  ["Unity", "C#"],           // 기술 목록
  align: "left",                    // "left"/"right" 번갈아 쓰면 좌우 교차 배치
  image: "images/myproject.webp"    // 배경 이미지. 없으면 "" (검은 배경)
},
```

## 3. 이미지 넣는 방법

1. `images/` 폴더에 파일을 넣는다. 파일명은 **영문 소문자** (예: `prep.webp`).
2. `data/projects.js`의 해당 프로젝트 `image`에 `"images/prep.webp"` 처럼 경로를 적는다.

**규격 (모든 프로젝트 공통 — 통일감을 위해 꼭 지키기):**

| 항목 | 값 |
|---|---|
| 비율 | 16:9 가로형 |
| 해상도 | 권장 2560×1440 (최소 1920×1080) |
| 포맷 | WebP 권장, 품질 80% |
| 용량 | 파일당 약 500KB 이하 |

- 어떤 화면에서든 `cover + center`로 채워지므로 **핵심 피사체는 화면 중앙~약간 위**에 오게 찍거나 잘라두면 모바일에서도 안 잘린다.
- 변환은 [Squoosh](https://squoosh.app) 같은 무료 웹 도구에서 WebP / 품질 80으로 내보내면 된다.
- 이미지는 스크롤 시 지연 로드되므로 첫 화면 로딩에 영향 없음.

## 4. 텍스트 수정 위치

전부 `index.html` 안에 있고, `<!-- ▼ ... -->` 주석으로 표시해 둠.

| 내용 | 위치 (index.html) |
|---|---|
| 첫 화면 큰 문구·한 줄 소개·역할 뱃지 | `<!-- 히어로 -->` 섹션 |
| 자기소개 문단·우측 요약(Education 등) | `<!-- About -->` 섹션 |
| 기술 스택 카드 | `<!-- 기술 스택 -->` 섹션 (카드 블록 복사해서 추가) |
| 수상·활동 | `<!-- 수상 · 활동 -->` 섹션 (`activity` 블록 복사) |
| 이메일·GitHub·LinkedIn 링크 | 히어로 + Contact 섹션의 `href` (TODO 주석 표시) |
| 브라우저 탭 제목 | `<title>` |
| 색상 테마 | `css/style.css` 맨 위 `:root` 변수 |

## 5. GitHub Pages 배포

빌드가 없으므로 GitHub Actions 불필요. main 브랜치 루트에서 바로 서빙.

1. GitHub에서 새 저장소 생성 (예: `portfolio`)
2. 이 폴더에서:
   ```
   git init
   git add .
   git commit -m "포트폴리오 사이트"
   git branch -M main
   git remote add origin https://github.com/<아이디>/portfolio.git
   git push -u origin main
   ```
3. 저장소 페이지 → **Settings** → 왼쪽 메뉴 **Pages**
4. **Source**: `Deploy from a branch` 선택
5. **Branch**: `main`, 폴더 `/ (root)` 선택 후 **Save**
6. 1~2분 뒤 `https://<아이디>.github.io/portfolio/` 에서 확인

> 저장소 이름을 `<아이디>.github.io` 로 만들면 `https://<아이디>.github.io/` 루트 주소로 서빙된다.

**커스텀 도메인:** 루트에 `CNAME` 파일을 만들고 도메인 한 줄(예: `bang6bin.com`)만 적어 커밋하면 됨 (DNS는 도메인 업체에서 GitHub Pages로 연결).

이후 수정사항은 `git add . && git commit -m "수정" && git push` 만 하면 자동 반영.

## 6. 로컬 미리보기

- 그냥 `index.html` 더블클릭 → 브라우저에서 열림 (그대로 동작)
- 또는 폴더에서 `python -m http.server 8000` 실행 후 `http://localhost:8000` 접속
