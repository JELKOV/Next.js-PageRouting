# Next.js Page Routing 학습 프로젝트 개요

이 프로젝트는 Next.js의 다양한 기능과 개념을 단계적으로 실습하고 정리한 학습 프로젝트입니다. 각 폴더는 실습 주제에 따라 나뉘며, 개념 설명과 함께 관련 실습 코드 및 정리된 Notion 링크가 포함되어 있습니다. 아래는 각 폴더별 핵심 내용 및 정리 링크입니다.

---

## 📁 프로젝트 폴더 구조

| 폴더명 | 설명 |
|--------|------|
| `Next.js PageRouting 1` | 📌 라우팅 개념 및 기초, React Router와의 차이점 |
| `Next.js PageRouting 2` | 📁 파일 기반 라우팅 실습 정리, 이벤트 리스트/상세 페이지 프로젝트 실습 |
| `Next.js PageRouting 3` | 🧭 SSG, SSR, SWR 개념 학습, 페이지 사전 렌더링 & 데이터 패칭 |
| `Next.js PageRouting 4` | 🛤️ SEO 실습, 데이터 최적화 연습, 사전 렌더링 & 데이터 패칭 실습편 |
| `Next.js PageRouting 5` | 🔁 메타데이터 & 이미지 최적화, Next.js 앱 최적화 하기 |
| `Next.js PageRouting 6` | 🔗 API 라우트 구조 및 응답 처리, API 라우트 개념 |
| `Next.js PageRouting 7` | ⚠️ API 실습 + MongoDB 연동, Notification 시스템 구축 |

> 각 프로젝트 폴더에는 실습용 컴포넌트 및 정리된 개념이 함께 포함되어 있습니다.

---

👉 [정리된 전체 링크 모음 보기](https://jelkov-developer.notion.site/Page-routing-1bbc23f3073480caa7c3f86024445a11?pvs=4)

## 📁 Next.js PageRouting 1
### 1. 페이지 라우팅 기본 개념 설명
- Next.js 라우팅 vs React Router
- 파일 기반 라우팅
- 중첩 라우트와 동적 라우트
- URL 파라미터 액세스
- Catch-All 라우트
- Link 컴포넌트와 프로그래밍 내비게이션
- 404 페이지 커스터마이징
- 라우팅 총정리

---

## 📁 Next.js PageRouting 2
### 2. 페이지 라우팅 첫 번째 프로젝트
- 프로젝트 기초 세팅부터 이벤트 데이터 구조 설정
- 주요 이벤트 리스트 및 디테일 페이지 구성
- 동적 라우트, Slug 기반 페이지 구성
- 필터링 검색 기능 구현
- 최종 마무리까지 실습 진행


---

## 📁 Next.js PageRouting 3
### 3. 페이지 사전 렌더링 & 데이터 패칭 (이론 + 실습)
- SSG, ISR, SSR 개념 및 차이점
- getStaticProps / getStaticPaths / getServerSideProps
- fallback 처리
- 클라이언트 사이드 데이터 패칭(useEffect + SWR)
- Firebase와의 연동까지 정리


---

## 📁 Next.js PageRouting 4
### 4. 사전 렌더링 & 데이터 패칭 실습편
- Firebase로 SEO 최적화 시작페이지 구성
- Slug 페이지 생성
- getServerSideProps로 필터 페이지 구현
- SSG/SSR/SWR 전략을 실전 예제와 함께 정리


---

## 📁 Next.js PageRouting 5
### 5. Next.js 앱 최적화 하기
- Head 태그 최적화 및 페이지별 메타데이터 구성
- `_document.js` 활용법
- 이미지 최적화
- 모든 페이지 공통 Head 처리 방식


---

## 📁 Next.js PageRouting 6
### 6. API 라우트 개념 정복
- API 라우트 정의 및 구조 이해
- JSON 파일과 함께 POST/GET 테스트
- 동적 API 라우트
- `/feedback` 페이지와 getStaticProps 결합


---

## 📁 Next.js PageRouting 7
### 7. API 라우트 실습편
- 뉴스레터 구독 구현
- 댓글 등록 + 불러오기 기능 구현
- MongoDB Atlas 연동 (뉴스레터 + 댓글)
- 에러 핸들링 및 동적 API 테스트


### 8. 전역 Notification 시스템 구현
- Context API를 사용한 알림 시스템 구축
- 알림 클릭 시 사라지기 / 자동 3초 후 사라짐 처리
- Newsletter 및 댓글 등록 시 알림 연동
- Notification + Loading 메시지 동시 처리


---

## 📁 Next.js PageRouting Auth
### 9. 인증 기능 통합 프로젝트 (NextAuth.js 기반)
- Credentials 기반 로그인 / 회원가입 구현
- MongoDB와 연동된 사용자 인증 처리
- JWT 기반 세션 전략 적용
- 로그인 후 인증 상태 유지 및 리디렉션 처리
- 인증된 사용자만 접근 가능한 보호 라우트 구현
- 프로필 페이지에서 비밀번호 변경 기능 구현 (서버/API 보호)

---

## ✨ 학습 방식

> 개념 강의 → 2. 실습 프로젝트 → 3. 응용 과제 → 4. 블로그 정리

- 모든 주요 개념은 직접 실습을 통해 반복 학습
- 복잡한 개념은 블로그 형식으로 한글 정리
- Notification, API 연결, MongoDB, SSR/SSG 등 실전 적용 능력 향상

> ⛳ 이 프로젝트는 Next.js 핵심 기능을 체계적으로 학습하고자 하는 분들을 위한 단계별 실습 모음입니다. 
> 각 폴더에는 실습 코드와 함께 Notion 링크를 통해 정리된 개념 자료가 포함되어 있어, 복습하거나 블로그 글로 정리하였습니다.

---

_감사합니다._ 더 추가할 내용이나 맞춤 정리 요청은 언제든지 말씀 주세요! 😊

---





