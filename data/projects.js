/* =========================================================
   프로젝트 데이터 — 프로젝트 추가/수정/삭제는 이 파일만 고치면 됨.
   배열 순서 = 화면에 보이는 순서.

   각 항목 설명:
   - title : 큰 제목
   - desc  : 한 줄 설명
   - award : 수상/출시 뱃지 (없으면 "" 로 비워두기 → 뱃지 자체가 안 보임)
   - tech  : 기술 목록 (반대편에 세로로 나열됨)
   - align : "left"  → 제목이 왼쪽 아래, 기술이 오른쪽
             "right" → 제목이 오른쪽 아래, 기술이 왼쪽
             (보통 left/right 를 번갈아 쓰면 교차 배치가 됨)
   - image : 배경 이미지 경로. 예: "images/prep.webp"
             비워두면("") 검은 배경으로 표시됨.

   이미지 규격 (모든 프로젝트 공통 — README.md 참고):
   - 비율 16:9 가로형, 권장 2560×1440 (최소 1920×1080)
   - WebP, 품질 80%, 파일당 500KB 이하 목표
   - 파일명은 영문 소문자로: images/prep.webp 처럼
   ========================================================= */
const PROJECTS = [
  {
    title: "PREP",
    desc: "멀티모달 면접 준비 프로그램",
    award: "2025 경기도 고교연합 인공지능 메이커톤 1위",
    tech: ["멀티모달", "AI", "Python", "Speech To Text"],   // TODO: 실제 사용 기술로 교체
    align: "left",
    image: ""                             // TODO: 예) "images/prep.webp"
  },
  {
    title: "오늘부터 갓생",
    desc: "일상 루틴을 기록하는 Android 앱",
    award: "Play Store 출시",
    tech: ["Android", "PWA", "Play Store"],
    align: "right",
    image: ""
  },
  {
    title: "daypick",
    desc: "그룹 일정을 함께 맞추는 PWA",
    award: "",
    tech: ["Flutter Web", "Supabase", "Riverpod", "Cloudflare Pages"],
    align: "left",
    image: ""
  },
  {
    title: "RedVeil",
    desc: "2.5D 픽셀아트 어드벤처 스토리 게임",
    award: "",
    tech: ["Unity", "C#", "픽셀아트"],   // TODO: 강조할 기술로 다듬기
    align: "right",
    image: ""
  }
];
