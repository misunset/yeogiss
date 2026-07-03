# 여기쓰 Components & Variants

> Figma 파일 `wnFuCttvzSg2bLpQ5ESfez`에서 추출한 컴포넌트 및 Variant 문서입니다.
> Claude가 UI 작업 시 이 문서를 참고하면 정확한 컴포넌트 상태를 사용할 수 있습니다.

---

## 1. Button

앱 전반에 사용되는 버튼 컴포넌트입니다. **타입 × 상태 × 사이즈** 3가지 축으로 variant가 구성됩니다.

### Variant 구조

| 축 | 값 |
|----|----|
| **타입 (Type)** | `default` / `Line` / `Secondary` |
| **상태 (State)** | `normal` / `hover` / `pressed` / `disabled` |
| **사이즈 (Size)** | `28` / `36` / `44` / `52` (px 높이 기준) |

### Variant 목록

| Variant명 | 타입 | 상태 | 사이즈 |
|-----------|------|------|--------|
| `Button=default_normal_36` | default | normal | 36 |
| `Button=default_hover_36` | default | hover | 36 |
| `Button=default_pressed_36` | default | pressed | 36 |
| `Button=default_disabled_36` | default | disabled | 36 |
| `Button=default_normal_44` | default | normal | 44 |
| `Button=default_hover_44` | default | hover | 44 |
| `Button=default_pressed_44` | default | pressed | 44 |
| `Button=default_disabled_44` | default | disabled | 44 |
| `Button=default_normal_52` | default | normal | 52 |
| `Button=default_hover_52` | default | hover | 52 |
| `Button=default_pressed_52` | default | pressed | 52 |
| `Button=default_disabled_52` | default | disabled | 52 |
| `Button=Line_normal_44` | Line | normal | 44 |
| `Button=Line_hover_44` | Line | hover | 44 |
| `Button=Line_pressed_44` | Line | pressed | 44 |
| `Button=Line_disabled_44` | Line | disabled | 44 |
| `Button=Line_normal_52` | Line | normal | 52 |
| `Button=Line_hover_52` | Line | hover | 52 |
| `Button=Line_pressed_52` | Line | pressed | 52 |
| `Button=Line_disabled_52` | Line | disabled | 52 |
| `Button=Secondary_normal_44` | Secondary | normal | 44 |
| `Button=Secondary_hover_44` | Secondary | hover | 44 |
| `Button=Secondary_pressed_44` | Secondary | pressed | 44 |
| `Secondary_disabled_44` | Secondary | disabled | 44 |
| `Button=Secondary_normal_52` | Secondary | normal | 52 |
| `Button=Secondary_hover_52` | Secondary | hover | 52 |
| `Button=Secondary_pressed_52` | Secondary | pressed | 52 |
| `Button=Button28` | default | normal | 28 |

### 사용 가이드
- **default**: 메인 액션 버튼 (주요 CTA, `purple_500` 배경)
- **Line**: 테두리형 버튼 (보조 액션, 아웃라인 스타일)
- **Secondary**: 보조 버튼 (덜 강조된 액션)
- 사이즈는 컨텍스트에 따라 선택: 작은 UI → `36`, 일반 → `44`, 강조 CTA → `52`

---

## 2. Bottom Sheet (Buttom Sheet)

지도에서 쓰레기통 선택 시 하단에 올라오는 시트 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=normal` | 기본 상태 (쓰레기통 정보 표시) |
| `속성 1=distance` | 거리 정보 포함 상태 |
| `속성 1=disabled` | 비활성 상태 |
| `속성 1=nodata` | 데이터 없음 상태 |
| `속성 1=arrived` | 도착 완료 상태 |
| `속성 1=위치정보` | 위치 정보 표시 상태 |

---

## 3. Toast Popup

앱 내 오류/알림 상황에 표시되는 토스트 메시지 컴포넌트입니다.

| Variant | 표시 상황 |
|---------|-----------|
| `속성 1=인터넷통신오류` | 네트워크 연결 실패 시 |
| `속성 1=위치권한` | 위치 권한 미허용 시 |
| `속성 1=쓰레기통 없음` | 주변에 쓰레기통이 없을 때 |
| `속성 1=위치불가` | 위치 파악 불가 시 |
| `속성 1=위치파악실패` | 위치 파악 실패 시 |
| `속성 1=위치권한재요청` | 위치 권한 재요청 시 |

---

## 4. Position (현재 위치 버튼)

지도 위 현재 위치 버튼 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=기본` | 기본 상태 |
| `속성 1=off` | 비활성 상태 |
| `속성 1=hover` | 호버/선택 상태 |

---

## 5. Trash_Type (쓰레기통 타입)

지도 마커에 사용되는 쓰레기통 종류 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `trash=original` | 일반 쓰레기통 |
| `trash=recycle` | 재활용 쓰레기통 |

---

## 6. icon-direction-marker (방향 마커 아이콘)

길안내 시 시작/종료 지점 마커 아이콘입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=icon-start` | 출발 지점 마커 |
| `속성 1=icon-end` | 도착 지점 마커 |

---

## 7. Location (위치 마커)

현재 내 위치를 나타내는 마커 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `속성2=active-default` | 위치 활성 기본 상태 |
| `속성2=active-start` | 길안내 시작 상태 |

---

## 8. Dashboard (알림 배너)

공지/삭제 알림 배너 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `notice=notice` | 공지 표시 상태 |
| `notice=delete` | 삭제 알림 상태 |

---

## 9. icon-target_type (타겟 아이콘)

선택된 쓰레기통 타입을 나타내는 아이콘입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=original` | 일반 쓰레기통 아이콘 |
| `속성 1=recycle` | 재활용 쓰레기통 아이콘 |

---

## 10. tab_container (필터 탭)

지도 상단 쓰레기통 종류 필터 탭 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=all` | 전체 보기 탭 |
| `속성 1=normal` | 일반 쓰레기통 필터 탭 |
| `속성 1=recycle` | 재활용 쓰레기통 필터 탭 |

---

## 11. Clustering (클러스터링 마커)

특정 영역에 쓰레기통이 많을 때 숫자(카운트)로 표시하는 마커 컴포넌트입니다.

| Variant | 설명 |
|---------|------|
| `속성 1=1step` | 가장 적은 밀집도 |
| `속성 1=2step` | 중간 밀집도 |
| `속성 1=3step` | 높은 밀집도 |
| `속성 1=4step` | 가장 높은 밀집도 |

---

## Claude를 위한 사용 가이드

이 문서를 Claude에게 전달할 때 아래 내용을 함께 참고하세요.

```
여기쓰 앱의 컴포넌트를 사용할 때:
- 주요 CTA 버튼 → Button=default_normal_52
- 보조 버튼 → Button=Line_normal_52
- 에러 알림 → Toast Popup (인터넷통신오류 / 위치권한 등)
- 지도 마커 → Trash_Type (original / recycle)
- 쓰레기통 밀집 표시 → Clustering (1step ~ 4step)
- 필터 탭 → tab_container (all / normal / recycle)
- 쓰레기통 정보 → Buttom Sheet (normal / distance / arrived 등)
```
