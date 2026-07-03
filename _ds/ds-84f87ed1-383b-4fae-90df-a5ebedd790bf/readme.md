# 서울시 쓰레기통 찾기 — 디자인 시스템

바깥에서 쓰레기 버릴 곳을 못 찾아 곤란한 사람들을 위한 **모바일 지도 기반 앱**. 현재 위치 중심으로 가장 가까운 쓰레기통을 보여주고, 유형별 필터·도보 거리·길 안내까지 1~2탭으로 연결한다. 딱딱한 공공기관 톤이 아니라, 한글 ‘쓰’를 뒤집은 위트 있는 마크와 어울리는 **모던하고 직관적인** 시스템.

이 디자인 시스템은 **Untitled UI**(무료 Figma 키트)의 토큰·컴포넌트 구조를 기반(brand=퍼플 #7F56D9, gray-blue 중립, 4px 스페이싱, UUI 그림자/타입 스케일)으로, 이 앱에 맞춰 **집중 재구성**한 것이다. 범용 마케팅 컴포넌트(블로그/가격표/이메일 등)는 의도적으로 가져오지 않았다 — 본 앱은 린(lean) MVP이기 때문(아래 *범위* 참고).

## 출처 (Sources)
- **Figma:** “❖ Untitled UI – FREE Figma UI kit and design system v2.0 (Community)” — 본 프로젝트에 가상 파일시스템으로 마운트되어 토큰/컴포넌트 정확값(버튼 패딩, 토글 트랙, 색 램프 등)을 추출. 168개 컴포넌트 패밀리 + ~739 아이콘을 담은 범용 키트.
- **앱 도메인:** 서울시 가로휴지통 설치정보(공개 통계) — 온보딩 데이터 스토리텔링에 사용. 2020–2022 약 1,200개 축소 → 2023–2024 약 1,500개 재설치.
- 별도 코드베이스/브랜드 가이드는 제공되지 않음. 브랜드 방향(퍼플 유지, Noto Sans KR, 입체 물방울 핀)은 사용자 확인을 거쳐 정함.

---

## 콘텐츠 기본 원칙 (CONTENT FUNDAMENTALS)

- **말투: 해요체.** 친근하지만 정중하게. 곁에서 돕는 안내자 톤. 명령조·관공서체 금지.
  - 좋음: “가장 가까운 쓰레기통을 찾아드릴게요”, “길 안내를 시작할까요?”, “도보 2분이면 도착해요”
  - 피함: “위치 정보를 조회하십시오”, “경로 안내 기능 실행”, “120m 이동 요망”
- **인칭:** 사용자를 직접 부르지 않고 행동을 대신 서술(“찾아드릴게요”). 굳이 ‘당신/회원님’ 쓰지 않음.
- **간결함:** 이동 중 1초 안에 읽힌다. 헤드라인은 2줄 이내, 본문은 한 문장.
- **숫자는 구체적으로, 단위는 한글로:** “85m”, “도보 2분”, “내 주변 25곳”, “1,500개”. 거리·시간·개수는 mono(tabular-nums)로 정렬.
- **이모지: 쓰지 않음.** 의미 전달은 라인 아이콘(Lucide)으로. 유형 구분은 색+아이콘.
- **데이터 제시:** 통계는 반드시 출처 캡션과 함께(“서울시 가로휴지통 설치정보 기준”). 과장 없이.
- **바이브:** 가볍고 똑똑하고 도움이 되는. 공공 데이터를 다루되 관공서처럼 굴지 않는다.

---

## 비주얼 파운데이션 (VISUAL FOUNDATIONS)

- **색 (Untitled UI v1 정확값):** 브랜드 = 퍼플 `#7F56D9`(brand-600). 중립 = gray-blue 램프(`#101828`→`#F9FAFB`). 상태색 success/warning/error/blue 풀 램프. `tokens/colors.css` 참고.
- **유형별 마커 색(앱 고유 토큰):** 지도 위 즉시 구분을 위해 4가지 비비드 컬러를 배정 — 일반=퍼플 `--bin-general`, 재활용=그린 `--bin-recycle`, 혼합=블루 `--bin-mixed`, 담배꽁초=앰버 `--bin-cigarette`. 각각 solid/soft/text 3단.
- **타입:** UI는 **Noto Sans KR**(400/500/600/700/800/900). 숫자·거리는 **Roboto Mono**(tabular-nums)로 정렬감. 스케일은 UUI 그대로(display 36/30/24, text 20/18/16/14/12, lh 동반). 헤드라인 -0.02em.
- **스페이싱:** 4px 베이스 명명 스케일(xs 4 → 11xl 160). 모바일 좌우 거터 16px.
- **모서리:** UUI 반경(sm 6, md 8, lg 10, xl 12, 2xl 16). 앱 관례 — 카드 12, 바텀시트 상단 20, 칩=full(pill).
- **그림자/엘리베이션:** UUI gray-blue 틴트 그림자(xs→3xl). 앱 전용 — `--shadow-pin`(입체 핀), `--shadow-sheet`(위로 뜨는 시트), `--shadow-fab`(플로팅 버튼).
- **배경:** 지도(스타일라이즈드 CSS, 차분한 회색+크림 도로+연녹 공원+연파랑 물)를 배경 전면으로. UI 컨트롤은 그 위 **흰 카드 + 그림자**로 떠 있다. 그라데이션 남용·풀블리드 이미지·텍스처 안 씀(맵 위 가독성 최우선).
- **마커(핀):** 둥근 **입체 물방울** 핀 — 유형색 채움 + 흰 아이콘 디스크 + 드롭섀도 + 바닥 그림자. 선택 시 확대 + 컬러 헤일로. 작거나 저대비인 핀 금지.
- **인터랙션/모션:** 바텀시트는 `translateY` + `cubic-bezier(.2,.85,.25,1)` 320ms로 부드럽게 상승. 핀 선택 확대 160ms. 무한 루프 장식 애니메이션 없음.
- **상태:** hover = 한 톤 진하게(브랜드 700) 또는 gray-50/100 배경. press = 800단계. focus = 브랜드 링(`--ring-brand`, 4px 24% 퍼플). 비활성 = opacity 0.45.
- **보더:** 1px, `--border-primary`(gray-300)/`--border-secondary`(gray-200). 카드/인풋은 secondary, 강조 인풋 focus는 brand-300.
- **투명/블러:** scrim `--bg-overlay`(rgba 12,24,40,.5)만. 글래스/블러 효과는 쓰지 않음.
- **카드:** 흰 배경 + 1px secondary 보더 + `--shadow-sm`(elevated는 lg), 반경 12.

---

## 아이코노그래피 (ICONOGRAPHY)

- **세트: Lucide** (CDN, `unpkg.com/lucide@0.460.0`). 2px 스트로크 · 24px 그리드 라인 아이콘으로 Untitled UI 아이콘 언어와 가장 근접. **무료 Figma 키트에는 trash/recycle/navigation/filter 등 대부분의 아이콘이 잠겨 있어**(PRO 전용), Lucide로 대체했다 — *플래그된 치환*. 실제 UUI 아이콘 라이선스가 있으면 교체 권장.
- **사용:** `<Icon name="trash-2" />` (foundations/Icon). `name`은 Lucide kebab id. 페이지에 Lucide UMD 스크립트가 로드돼 있어야 함.
- **주요 아이콘:** trash-2, recycle, cigarette, layers(혼합), navigation, locate-fixed, map-pin, search, sliders-horizontal, footprints, route, clock, calendar-clock, share-2, bookmark, x, chevron-*, plus, minus, info, check, trending-down.
- **이모지/유니코드 아이콘: 사용 안 함.**
- **로고:** 한글 ‘쓰’ 180° 회전 마크(브랜드 퍼플 위 흰 글자). 현재 **글리프 기반 시안** — 실제 로고 파일 준비 시 교체 필요. `guidelines/brand-logo.html` 참고.

---

## 범위 (Scope) — 의도적으로 가져온 것 / 뺀 것
사용자 확인에 따라 **앱에 맞춘 집중형**으로 구성. Untitled UI 168개 패밀리를 전부 임포트하지 않고, MVP에 필요한 핵심만 재구성했다.
- **가져옴(재구성):** Button, IconButton, Input, Toggle, Checkbox, Badge, Tag, Card, Divider, FeaturedIcon, Icon — UUI 정확값 기반.
- **앱 고유로 신규 설계:** FilterChip, FilterBar, BinPin(입체 물방울 핀), SearchField, BottomSheet, PlaceRow, PaginationDots.
- **의도적으로 제외:** 블로그/가격/이메일/대시보드/마케팅 섹션 등 범용 웹 컴포넌트, 리뷰·댓글·프로필·커뮤니티(부가 기능), 차트/캘린더/테이블 등 본 MVP에 불필요한 패밀리.

---

## 인덱스 (Manifest)

루트
- `styles.css` — 글로벌 진입점(@import 매니페스트). 소비자는 이 파일 하나만 링크.
- `readme.md` — 이 문서. / `SKILL.md` — 에이전트 스킬 정의.

`tokens/`
- `colors.css`(램프+시맨틱+마커), `typography.css`(패밀리·스케일·헬퍼 클래스), `spacing.css`, `radii.css`, `shadows.css`, `fonts.css`(Noto Sans KR·Inter·Roboto Mono, Google Fonts), `base.css`(리셋).

`components/` (네임스페이스 `Ds_84f87e`)
- `foundations/` — Icon, FeaturedIcon, Avatar
- `buttons/` — Button, IconButton
- `forms/` — Input, Toggle, Checkbox, RadioButton, Select
- `navigation/` — Tabs (segmented / underline)
- `feedback/` — Badge, Tag, Banner, Toast, Tooltip, EmptyState
- `surfaces/` — Card, Divider
- `app/` — FilterChip, FilterBar, BinPin, SearchField, BottomSheet, PlaceRow, PaginationDots (+ `BIN_TYPES` 데이터)

`templates/map-finder/` — 소비 프로젝트가 복사해 쓰는 **메인 지도 화면 템플릿**(`MapFinder.dc.html`): 검색·유형 필터·입체 핀·바텀시트가 배치된 시작 화면. DS 컴포넌트를 `<x-import>`로 조립.

`ui_kits/trash-finder/` — 인터랙티브 클릭스루(온보딩 → 메인 지도 → 바텀시트). A/B 시트 배치 시안 토글. (`index.html`, `parts.jsx`, `screens.jsx`)

`guidelines/`
- `IA-and-wireframes.md` — 정보구조·화면 흐름도·화면별 UI 위계(텍스트 설계).
- 스펙 카드: 색(brand/gray/status/semantic/bins), 타입(families/display/body), 스페이싱(scale/radii/shadows), 브랜드(logo/voice).

> 디자인 시스템 탭에서 모든 카드가 보입니다. 컴포넌트는 `window.Ds_84f87e`에서 사용.
