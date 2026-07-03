# 여기쓰 Color Tokens

> Figma 파일: `wnFuCttvzSg2bLpQ5ESfez` 에서 추출한 색상 스타일 문서입니다.
> Claude가 디자인 작업 시 이 문서를 참고하면 정확한 색상을 사용할 수 있습니다.

---

## 브랜드 컬러 (Brand Colors)

### Purple — 메인 브랜드 컬러

앱의 주요 UI, 버튼, 강조 요소에 사용되는 핵심 컬러입니다.

| 토큰명 | Hex | 용도 예시 |
|--------|-----|-----------|
| `purple/purple_50` | `#F5E8FC` | 배경, hover 상태 |
| `purple/purple_100` | `#E8CAFC` | 비활성 배경 |
| `purple/purple_200` | `#D49CF5` | 연한 강조 |
| `purple/purple_300` | `#BC6EE8` | 보조 강조 |
| `purple/purple_400` | `#A84BD9` | 보조 버튼 |
| `purple/purple_500` | `#9B2BD9` | **메인 브랜드 컬러** (Primary) |
| `purple/purple_600` | `#7E1FB7` | 호버 상태, 진한 강조 |
| `purple/purple_700` | `#631897` | 눌림 상태 (Pressed) |
| `purple/purple_800` | `#480F75` | 다크 강조 |
| `purple/purple_900` | `#2D0650` | 가장 어두운 보라 |

### Pink — 보조 브랜드 컬러

포인트 색상 및 특수 UI 요소에 사용됩니다.

| 토큰명 | Hex | 용도 예시 |
|--------|-----|-----------|
| `pink/pink_50` | `#FDE8F5` | 배경, 뱃지 배경 |
| `pink/pink_100` | `#FAC4E8` | 연한 배경 |
| `pink/pink_200` | `#F594D4` | 연한 포인트 |
| `pink/pink_300` | `#EE62BB` | 보조 포인트 |
| `pink/pink_400` | `#DA3CA8` | 핑크 버튼 |
| `pink/pink_500` | `#CD1891` | **메인 핑크** |
| `pink/pink_600` | `#A81279` | 호버 상태 |
| `pink/pink_700` | `#860D60` | 눌림 상태 |
| `pink/pink_800` | `#620846` | 다크 핑크 |
| `pink/pink_900` | `#3F042D` | 가장 어두운 핑크 |

---

## 중립 컬러 (Neutral Colors)

### Gray

텍스트, 배경, 구분선, 비활성 상태 등 전반적인 UI에 사용됩니다.

| 토큰명 | Hex | 용도 예시 |
|--------|-----|-----------|
| `gray/gray_50` | `#F7F7F7` | 페이지 배경 |
| `gray/gray_100` | `#EDEDED` | 카드 배경, 구분선 |
| `gray/gray_200` | `#D9D9D9` | 비활성 보더 |
| `gray/gray_300` | `#BFBFBF` | 플레이스홀더 텍스트 |
| `gray/gray_400` | `#A5A5A5` | 비활성 아이콘 |
| `gray/gray_500` | `#737373` | 보조 텍스트 |
| `gray/gray_600` | `#595959` | 중간 텍스트 |
| `gray/gray_700` | `#444444` | 짙은 보조 텍스트 |
| `gray/gray_800` | `#303030` | 서브 타이틀 |
| `gray/gray_900` | `#262626` | 주요 텍스트 |

### White / Black

| 토큰명 | Hex | 용도 |
|--------|-----|------|
| `white` | `#FFFFFF` | 배경, 카드, 텍스트(다크 배경 위) |
| `black` | `#000000` | 텍스트, 아이콘 |

---

## 시스템 컬러 (System Colors)

상태(오류, 정보, 경고, 성공)를 나타내는 시맨틱 컬러입니다.

| 토큰명 | Hex | 의미 |
|--------|-----|------|
| `system/error_500` | `#FF3B30` | 오류 (Error) |
| `system/Info_500` | `#007AFF` | 정보 (Info) |
| `system/info_550` | `#0054AF` | 정보 진한 버전 |
| `system/warning_500` | `#FF9500` | 경고 (Warning) |
| `system/success_500` | `#00B94E` | 성공 (Success) |

---

## 그라디언트 (Gradients)

### gradient_radial
- **타입**: Radial Gradient
- **용도**: 배경 장식용 방사형 그라디언트
- **CSS**: `radial-gradient(circle, #D55495 25%, rgba(213,84,149,0.20) 65%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 25% | `#D55495` | 59% |
| 65% | `#D55495` | 20% |

---

### gradient_linear
- **타입**: Linear Gradient
- **용도**: 배경 장식용 선형 그라디언트 (퍼플 → 핑크)
- **CSS**: `linear-gradient(90deg, #9B2BD9 0%, #CD1891 100%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 0% | `#9B2BD9` | 100% |
| 100% | `#CD1891` | 100% |

---

### btn_linear
- **타입**: Linear Gradient
- **용도**: 일반(회색) 버튼 그라디언트
- **CSS**: `linear-gradient(90deg, #EDEDED 0%, #FFFFFF 51%, #EDEDED 100%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 0% | `#EDEDED` | 100% |
| 51% | `#FFFFFF` | 100% |
| 100% | `#EDEDED` | 100% |

---

### btn_purple_linear
- **타입**: Linear Gradient
- **용도**: 퍼플 메인 버튼 그라디언트
- **CSS**: `linear-gradient(90deg, #A72FE7 0%, rgba(130,37,180,0.95) 62%, #5D1A81 100%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 0% | `#A72FE7` | 100% |
| 62% | `#8225B4` | 95% |
| 100% | `#5D1A81` | 100% |

---

### btn_linear_white
- **타입**: Linear Gradient
- **용도**: 화이트 버튼 그라디언트
- **CSS**: `linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 71%, #EDEDED 100%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 0% | `#FFFFFF` | 100% |
| 71% | `#FFFFFF` | 100% |
| 100% | `#EDEDED` | 100% |

---

### route_linear
- **타입**: Linear Gradient
- **용도**: 길안내 경로 표시용 그라디언트 (레드 → 핑크 → 퍼플)
- **CSS**: `linear-gradient(90deg, #FF0000 0%, #DB0063 50%, #A84BD9 100%)`

| 위치 | Hex | 불투명도 |
|------|-----|---------|
| 0% | `#FF0000` | 100% |
| 50% | `#DB0063` | 100% |
| 100% | `#A84BD9` | 100% |

---

## Claude를 위한 사용 가이드

이 파일을 Claude에게 제공할 때 아래 지침을 함께 전달하면 더 정확한 디자인 작업이 가능합니다.

```
여기쓰 앱의 디자인 시스템을 사용할 때:
- 주요 액션 버튼 → purple_500 (#9B2BD9)
- 텍스트 기본 → gray_900 (#262626)
- 텍스트 보조 → gray_500 (#737373)
- 배경 기본 → white (#FFFFFF)
- 배경 서브 → gray_50 (#F7F7F7)
- 오류 상태 → system/error_500 (#FF3B30)
- 성공 상태 → system/success_500 (#00B94E)
```
