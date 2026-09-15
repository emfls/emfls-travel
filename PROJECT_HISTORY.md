# 프로젝트 이력

## 2026-09-14 — P0 기반 구축

- 빈 GitHub 저장소에 Astro + TypeScript 정적 사이트 기반을 만들었다.
- 공통 `BaseLayout`, `PageIntro`, `GuideCard`를 분리하고 카테고리 데이터는 `src/data/content.ts`에 typed object로 관리했다.
- 홈은 최신글 목록이 아니라 히어로 → Trip Finder 프로토타입 → 목적별 탐색 → 편집 가이드 순서로 구성했다.
- P0 카테고리는 동적 `[...section].astro`가 정적 경로를 생성하도록 해 반복 레이아웃을 줄였고, 콘텐츠 확장 시 지역·목적·조건 필드를 추가할 수 있게 했다.
- 외부 이미지 URL 없이 CSS 아트 플레이스홀더를 사용했다. 실제 사진은 P1에서 출처와 alt 정책을 포함해 추가한다.
- 로그인, DB, 예약, 실시간 API, 지도, AI, 대량 SEO 페이지는 P0 범위에서 제외했다.
- SEO 기본 요소로 canonical, description, Open Graph, WebSite JSON-LD, sitemap, robots, favicon을 추가했다.
- 다음 작업자는 구현 전 이 문서와 `TASKS.md`를 확인한다.
- `npm run check`는 오류 0건으로 통과했고, `npm run build`는 15개 정적 페이지를 생성하며 통과했다.

## 2026-09-14 — P1 목적지 콘텐츠 모델

- `src/data/destinations.ts`에 `Destination` 타입과 충주·단양 두 개의 목적지 레코드를 만들었다. 배열·객체 필드를 사용해 지역이 늘어도 동일한 상세 템플릿을 재사용할 수 있다.
- 각 목적지는 지역, 여행 적합 대상, 여행 스타일, 실내/야외, 아이와 여행, 체류 시간, 계절, 이동·주차 관점, 비 오는 날, 하이라이트, 일정, 체크리스트, 관련 가이드를 분리해 표현한다.
- 목적지 URL은 `/destinations/chungju/`, `/destinations/danyang/`으로 고정하고 `src/pages/destinations/[slug].astro`에서 정적 경로를 생성한다. P1에서는 정확히 두 경로만 만든다.
- 상세 페이지는 Hero → 기본 감각 요약 → 여행 방식 → 추천 일정 → 아이와/비 오는 날 → 출발 전 체크 → 관련 가이드 순서다.
- `DestinationCard.astro`를 추가해 홈에서 두 목적지로 진입하게 했으며, 각 카드의 태그와 여행 성격은 목적지 데이터에서 직접 파생한다.
- 실시간 운영시간·요금·주차 가능 여부·예약 정보는 단정하지 않고, 공식 안내 확인과 이동 특성 중심으로 서술했다. 외부 이미지 URL은 추가하지 않았다.
- 상세 페이지마다 목적지명 기반 title, description, canonical, Open Graph를 공통 레이아웃을 통해 적용했다. 리뷰·평점 스키마는 사용하지 않았다.
- Trip Finder 로직, 검색, 지도, DB, 대량 지역 생성은 P1 범위에서 제외했다.

## 2026-09-14 — P2 Trip Finder 추천 로직

- `src/lib/tripFinder.ts`에 `TripFilters`, `TripRecommendation`, `getTripRecommendations()`를 추가했다. 입력 목적지 배열과 필터를 받아 점수·일치 조건·추천 이유를 반환하는 순수 함수다.
- 조건은 동행자(혼자/커플/가족/아이와), 여행 시간(당일/1박 2일/2박 이상), 스타일(실내/야외/둘 다), 이동(자동차/대중교통/상관없음), 목적(자연/휴식/아이와 체험/드라이브/가벼운 관광)으로 고정했다.
- 목적지 데이터에는 추천 전용 매칭 필드를 소폭 추가했다. 핵심 조건인 동행자·목적은 3점, 보조 조건은 2점으로 계산하며 `any`는 와일드카드로 처리한다.
- 모든 목적지를 점수순으로 반환하므로 완전 일치가 없어도 가장 가까운 결과를 보여준다. 점수가 같으면 한글 지역명 순으로 안정적으로 정렬한다.
- 홈의 정적 프로토타입을 접근 가능한 form/fieldset/label/radio/button UI로 교체했다. 제출·조건 다시 고르기·전체 초기화는 페이지 새로고침 없이 동작한다.
- 결과에는 목적지명, 지역, 결정론적 추천 이유, 매칭된 조건 태그, 상세 가이드 링크를 표시한다. 결과 영역은 `aria-live`로 갱신된다.
- 결과 전용 페이지나 URL 상태, 검색, 지도, API, 신규 목적지는 추가하지 않았다. 향후 지역 확장은 각 레코드의 `tripFinder` 필드만 채우면 동일 함수가 처리한다.
- `npm run check`는 오류·경고·힌트 0건으로 통과했고, `npm run build`는 기존 P0 15개에 목적지 2개를 포함한 17개 정적 페이지를 생성했다. 빌드 산출물에서 Trip Finder form, 결과 영역, 충주·단양 링크가 확인되었다.
- 로컬 개발 서버는 실행 환경에서 ready 전 종료되어 브라우저 클릭 검증은 수행하지 못했다. 대신 Astro가 클라이언트 스크립트를 번들하고 정적 HTML에 form과 스크립트 참조를 생성하는 것을 확인했다.

## 2026-09-14 — P5 콘텐츠·SEO·신뢰성 감사

- 감사 범위는 목적지 8개, 세부 가이드 12개, 카테고리·홈·신뢰 페이지, 공통 메타데이터, sitemap·robots, 내부 링크, 이미지 정책, 접근성·모바일 CSS였다.
- 목적지 허브와 세부 가이드는 서로 다른 역할과 구조를 갖고 있었고, 지역명만 치환한 thin page·허위 경험담·가짜 평점·무단 이미지 URL은 확인되지 않았다. title·description 중복도 빌드 산출물에서 발견되지 않았다.
- 발견한 실제 문제는 `robots.txt`가 존재하지 않는 `/sitemap-index.xml`을 가리키던 것과 목적지 인덱스·편집 원칙 페이지가 footer/404에서 충분히 연결되지 않던 점이었다. sitemap 경로를 `/sitemap.xml`로 수정하고 `/editorial-policy/`, 목적지 링크, keyboard용 skip link를 추가했다.
- `/editorial-policy/`는 경험·평점·출처를 꾸미지 않는 원칙, 변동 정보의 공식 안내 재확인, 오류 제보·수정 원칙을 명시한다. 광고 코드, GA4 ID, publisher ID는 추가하지 않았다.
- `CONTENT_QA.md`에 PASS/FIXED/NEEDS_FUTURE_WORK 결과를 고정 기록했다. 실제 장소별 공식 출처, 라이선스 확인 사진, production 배포 후 메타·robots 확인, 브라우저 viewport/screenshot 검증은 P6 후보로 남겼다.
- P5 후 정적 산출물은 editorial policy 1페이지가 추가되어 총 37페이지가 된다. 목적지는 8개, 세부 가이드는 12개로 유지한다.

## 2026-09-14 — P6 Cloudflare Production 배포 준비

- `git remote`와 GitHub API로 현재 저장소가 정확히 `emfls/emfls-travel`임을 확인했다. 다른 저장소는 수정하지 않았다.
- 로컬 `npm run check`는 0 errors, 0 warnings, 0 hints로 통과했고 `npm run build`는 37페이지를 생성했다.
- Cloudflare 계정에서 기존 프로젝트를 검색한 뒤 중복 생성이 없는 것을 확인하고, Pages 프로젝트 `emfls-travel`을 생성했다. GitHub source는 `emfls/emfls-travel`, production branch는 `main`, build command는 `npm run build`, output directory는 `dist`로 설정했다.
- 현재 GitHub 연동 승인/웹훅이 완료되지 않아 Pages API의 latest deployment가 아직 null이며 `emfls-travel.pages.dev`는 522를 반환한다. 따라서 production 배포 완료나 실브라우저 동작 PASS를 주장하지 않는다.
- `travel.emfls.com`을 해당 Pages 프로젝트에 추가했고, Cloudflare DNS zone `emfls.com`에 `travel` CNAME → `emfls-travel.pages.dev`를 추가했다. Pages 도메인 검증은 현재 `pending`이며 “CNAME record not set” 상태다.
- P6의 실도메인 URL, 404, Trip Finder, 모바일, production metadata 검증은 deployment가 생성되고 custom domain 인증이 완료된 뒤 수행해야 한다. AdSense 신청, Search Console 등록, 신규 콘텐츠와 P7 작업은 시작하지 않았다.

## 2026-09-14 — P6 Production 배포 및 실도메인 검증 완료

- GitHub에서 `Cloudflare Workers and Pages` 앱의 `emfls/emfls-travel` 접근 권한을 승인한 뒤, Cloudflare Pages가 GitHub source와 `main` production branch를 인식하는 것을 확인했다.
- `584c89e` commit으로 Production deployment를 생성했다. Cloudflare build는 `npm run build`로 실행되어 37페이지를 생성했고, 배포 상태는 active/success였다.
- `emfls-travel.pages.dev`와 `travel.emfls.com`을 HTTPS로 확인했다. 주요 URL 11개는 200, 존재하지 않는 URL은 404였으며 404 화면에서 Home·Destinations 링크를 확인했다.
- `travel.emfls.com`에서 canonical, title, description, OG title, `lang=ko`를 홈·목적지·가이드·신뢰 페이지 기준으로 확인했다. canonical은 모두 `https://travel.emfls.com`을 사용했다.
- Production sitemap은 36개 URL을 포함하고 전부 200으로 응답했으며 다른 프로젝트·localhost·pages.dev URL은 없었다. robots.txt는 Travel sitemap을 가리키고 사이트 접근을 차단하지 않았다.
- Trip Finder 실제 브라우저에서 A(아이와/당일/둘 다/자동차/자연), B(가족/1박 2일/야외/자동차/드라이브), C(혼자/2박 이상/실내/대중교통/휴식)를 실행했다. 결과 카드·추천 이유·상세 링크·점수순 결과·fallback 성격의 가까운 추천·초기화를 확인했다.
- 375px viewport에서 horizontal overflow가 없었고 홈 화면을 screenshot으로 확인했다. 사이트 탭의 console error는 없었으며 대시보드에서 발생한 Cloudflare UI 접근성 로그는 Travel 사이트 로그가 아니었다.
- 이번 P6에서는 다른 프로젝트·도메인, AdSense, Search Console, 신규 콘텐츠를 수정하지 않았다. 판정은 `PRODUCTION READY WITH MINOR ISSUES`다. 남은 이슈는 공식 출처·라이선스 이미지·Search Console과 더 넓은 브라우저 매트릭스이며 P7 후보로 남겼다.

## 2026-09-14 — P3 국내 목적지 클러스터 확장

- 기존 충주·단양을 유지하고 제천(`jecheon`), 원주(`wonju`), 영월(`yeongwol`), 문경(`mungyeong`), 괴산(`goesan`), 안동(`andong`) 정확히 6개 목적지를 추가했다. 총 목적지는 8개다.
- 기존 `Destination` 모델을 확장하지 않고 주변 목적지를 표현하는 `relatedDestinations` 필드를 추가했다. 각 목적지는 서로 다른 여행 포지션과 체류 방식, 실내·야외 성격, 아이 동반 관점, 이동 특성을 갖는다.
- 목적지 상세 라우트 `/destinations/[slug]/`를 그대로 재사용하고, 전체 탐색용 `/destinations/` 인덱스를 추가했다. 상세 페이지에는 `이 여행과 함께 살펴보기` 섹션을 추가했다.
- 연결 기준은 무작위가 아니라 중부권의 자연스러운 여행 흐름을 따른다: 충주–제천–단양–영월, 충주–괴산–문경–안동, 원주–영월. 모든 8개 목적지에 최소 1개 이상의 주변 목적지 링크가 있다.
- 신규 레코드의 `tripFinder` 필드를 채워 기존 추천 로직을 변경하지 않고 8개 모두 scoring 대상이 되게 했다. `tripFinder.ts`와 필터 조건은 P3에서 수정하지 않았다.
- 홈의 목적지 영역은 기존 디자인을 유지하고, 전체 목적지 탐색은 `/destinations/`로 분리했다. 새 목적지마다 CSS visual placeholder treatment를 사용하며 외부 사진은 추가하지 않았다.
- 사실성 원칙에 따라 운영시간·요금·행사·정확한 소요시간·주차 규모를 단정하지 않고, 공식 안내 확인과 이동 특성 중심으로 작성했다. 허위 경험담·리뷰·평점은 없다.
- `DESIGN_SYSTEM.md`에 직접 제작·보유 또는 라이선스 확인 이미지, 출처 기록, 설명형 alt, hotlink 금지 정책을 명시했다.
- `npm run check`는 오류·경고·힌트 0건으로 통과했고, `npm run build`는 24개 정적 페이지를 생성했다. 이 중 목적지 상세 8개와 인덱스 1개다.

## 2026-09-14 — P4 목적지 × 조건 실전 가이드

- 목적지는 추가하지 않고 기존 8개를 유지했다. 세부 가이드는 정확히 12개만 만들었다: 충주 2, 단양 2, 제천 2, 원주 2, 영월 1, 문경 2, 괴산 1. 안동 세부 가이드는 만들지 않았다.
- `src/data/guides.ts`에 `TravelGuide`와 일정 단계, 상황별 팁, 체크리스트, 관련 가이드·목적지 필드를 정의했다. 목적지별 동적 라우트가 같은 구조를 재사용한다.
- URL은 `/destinations/{destination}/{guide}/` 규칙을 사용한다. 생성된 12개는 `with-kids`, `day-trip`, `road-trip`, `drive`, `one-night`, `rainy-day`, `walking`, `family`, `nature` 조합이다.
- 목적지 허브는 해당 지역의 세부 가이드로 연결되고, 세부 가이드는 목적지 허브·관련 가이드·주변 목적지로 돌아갈 수 있다. `/destinations/` 인덱스에는 8개 허브만 노출해 계층을 단순하게 유지했다.
- 각 가이드는 지역명 치환형 문장을 피하고, 여행 의도별로 체류 방식·이동·실내/야외·난이도·계획·일정·상황별 팁을 다르게 작성했다. 특정 업체, 운영시간, 가격, 주차 규모, 실시간 교통은 단정하지 않았다.
- `sitemap.xml.ts`는 `travelGuides` 데이터에서 12개 세부 URL을 자동으로 추가한다. 각 페이지는 공통 레이아웃을 통해 고유 title, description, canonical, OG metadata를 생성한다.
- 외부 사진은 추가하지 않았고 기존 CSS placeholder 정책을 유지했다. 출처가 확인된 이미지와 설명형 alt를 P5에서 별도 적용한다.
- `AGENTS.md`에 다른 Repo/프로젝트 내용이 혼입되면 실행하지 않는 규칙을 추가했다.
- 최종 `npm run check`는 오류·경고·힌트 0건, `npm run build`는 36개 정적 페이지를 생성했다. 목적지 허브 8개, 세부 가이드 12개, `/destinations/` 인덱스 1개를 포함한다.

## 2026-09-14 — P2.5 Trip Finder 검증

- 검증 전 `npm run check`와 `npm run build`를 실행했고, 오류·경고·힌트 0건 및 17개 정적 페이지 생성을 확인했다.
- 개발 서버를 별도 포트로 실행하려 했으나 실행 환경의 readiness 감시에서 Astro dev/preview 프로세스가 ready 전에 종료되었다. 기본 포트는 다른 EMFLS 프로젝트가 사용 중이어서 해당 페이지는 검증 대상에서 제외했다.
- 정적 산출물에서 Trip Finder의 5개 fieldset, native radio controls, submit/reset 버튼, `aria-live` 결과 영역, 충주·단양 상세 링크 및 번들된 클라이언트 스크립트를 확인했다.
- 브라우저에서 시나리오 A/B/C 제출, 조건 변경, 초기화, 콘솔 오류, 실제 모바일 viewport 동작은 서버 연결 실패로 수행하지 못했다. 따라서 이번 검증에서는 앱 코드 수정이 없으며, 브라우저 동작을 통과했다고 주장하지 않는다.
- 코드 재검토 결과 추천 규칙은 핵심 동행자·목적 3점, 보조 여행 시간·스타일·이동 2점, `any` wildcard, 점수 내림차순 후 한글 목적지명 tie-break로 유지된다.

## 2026-09-15 — P7 검색엔진·공식 출처·AdSense 신청 직전 QA

- 작업 범위는 현재 `emfls-travel` 저장소와 `travel.emfls.com`으로 한정했다. 다른 Repo, Cloudflare 프로젝트, 도메인, Search Console, AdSense에는 변경을 가하지 않았다.
- 공식 출처 정책에 따라 지방자치단체 공식 관광·시정 안내를 확인해 충주, 단양, 제천, 원주, 영월, 문경, 괴산, 안동 등 8개 목적지에 연결했다. 안동 관광 포털은 자동 검증에서 403이어서 검증된 안동시 공식 홈페이지를 사용했다.
- 출처 데이터는 `src/data/sources.ts`로 목적지 콘텐츠와 분리했다. `/destinations/[slug]/`는 목적지별 공식·공공 출처 섹션을 공통 렌더링하며, 외부 링크는 새 탭과 `noopener noreferrer`를 사용한다. 향후 지역이 늘어날 때도 slug별 배열만 추가하면 된다.
- 사실성 재검토에서 운영시간·요금·주차비·행사 등 변동 수치를 새로 단정하지 않았고, 허위 리뷰·평점·저자·구조화 데이터와 라이선스 미확인 이미지는 추가하지 않았다.
- Production의 주요 URL, 404, canonical, title/description/OG, robots, sitemap, 내부 링크와 37페이지 생성을 재확인했다. robots는 색인을 허용하고 sitemap은 `https://travel.emfls.com/sitemap.xml`을 가리킨다. 현재 목적지 8개와 가이드 12개는 유지한다.
- Search Console 소유권 인증·sitemap 제출, AdSense 사이트 추가·Publisher ID 발급·심사 신청은 실제 수행하지 않았으며 사용자 액션으로 남겼다. P7 판정은 구조적 blocker가 없는 `READY WITH MINOR ISSUES`로 기록한다. 실제 사진 에셋과 더 넓은 브라우저 매트릭스는 P8 후보가 아니라 후속 개선 큐다.
- Production 브라우저에서 Trip Finder 대표 조건을 다시 제출해 결과·추천 이유·충주/단양을 포함한 상세 링크를 확인했고 console error는 0건이었다. 현재 브라우저의 viewport override 부재로 375px 수치는 P6에서 확인한 결과를 재검증 근거로 유지했다.

## 2026-09-15 — Google Analytics 4 연결

- `src/layouts/BaseLayout.astro`의 공통 `<head>`에 Google tag script와 초기화 코드를 1회 추가했다. Measurement ID는 사용자가 제공한 `G-5K42PS7SNT`를 정확히 사용한다.
- `gtag('config', 'G-5K42PS7SNT')`의 기본 page view 수집만 활성화했으며, Trip Finder 입력값·선택 조건 custom event와 Google Tag Manager는 추가하지 않았다.
- Privacy 페이지에 GA4의 페이지 조회 중심 분석 사용 사실과 Measurement ID를 반영했다.
- 실제 Google Analytics 관리자 화면의 실시간 수집 여부는 접근·확인하지 않았으며, 코드 및 Production HTML에서만 검증한다.

## 2026-09-15 — EMFLS Network Baseline v1 정합성 점검

- 이미 충족: Astro static output, Production site URL, 단일 sitemap urlset, robots, trailing-slash 형태의 canonical/internal link, favicon, WebSite JSON-LD, trust pages, skip link, native Trip Finder controls, CSS visual/image policy.
- `astro.config.mjs`에 `trailingSlash: 'always'`를 명시했다. sitemap은 기존처럼 단일 `/sitemap.xml`과 production URL만 생성하며 404/noindex URL을 포함하지 않는다.
- GA4는 `https://travel.emfls.com`의 HTTPS custom domain에서만 실행하도록 공통 레이아웃의 runtime 조건을 바꿨다. localhost, 127.0.0.1, pages.dev, workers.dev, preview 및 개발 환경에서는 Google script를 삽입하지 않는다. Measurement ID와 기본 page_view 방식은 유지하고 custom event/GTM은 추가하지 않았다.
- BaseLayout metadata contract에 `noindex`, `og:image`, Twitter card/title/description/image, `theme-color`, `jsonLd` override를 추가하고 Travel 전용 1200×630 브랜드 SVG OG asset을 `public/og/travel-og.svg`로 만들었다. 기존 WebSite JSON-LD default와 실제 화면에 없는 Review/Rating/Person schema 금지 원칙은 유지한다.
- Editorial Policy에 AI 검토, 이미지 권리·출처, 광고와 콘텐츠 구분 원칙을 보강했다. AdSense loader·slot·신청은 추가하지 않았다.
- 재사용 문서로 `CONTENT_POLICY.md`, `LAUNCH_CHECKLIST.md`, `REPOSITORY_CONNECTION.md`를 추가했다. README.md는 현재 없지만 빈 껍데기로 만들지 않았다.
- 후속 작업은 Network QA 자동화, 라이선스 확인 사진, AdSense 실제 적용 검토로 남겼다. 신규 목적지·가이드·검색·지도·P8 작업은 시작하지 않았다.

## 2026-09-15 — 네이버 사이트 소유권 파일 배치 수정

- 원인: 네이버 인증 파일이 저장소 root에만 있어 Git에는 포함됐지만 Astro의 정적 웹 루트가 아니었다. 따라서 Cloudflare Pages `dist/`에 복사되지 않아 `/naver6dde13e69fe8ec25cd17e085c65c2124.html` 요청이 404가 되었다.
- 해결: 원본 파일명과 인증 문자열을 변경하지 않고 `public/naver6dde13e69fe8ec25cd17e085c65c2124.html`로 이동했다. Astro build 후 `dist/naver6dde13e69fe8ec25cd17e085c65c2124.html` 생성 및 public/dist 내용 byte 비교가 일치했다.
- 정적 `.html` 파일은 `trailingSlash: 'always'`의 일반 페이지 라우팅 대상이 아니므로 정확한 `.html` URL에서 직접 200을 반환해야 한다. root의 기존 파일은 삭제해 중복 경로를 제거했다.
- Cloudflare Pages의 기본 clean URL 동작이 `.html` 요청을 확장자 없는 경로로 308 redirect하는 것을 Production에서 확인했다. 따라서 원본 `public/*.html`과 build 산출물은 보존하면서, 동일 인증 문자열의 확장자 없는 companion asset과 해당 `.html` 요청을 내부 200 proxy하는 `public/_redirects` 예외를 추가했다. 이 예외는 일반 페이지의 trailing-slash 정책을 변경하지 않는다.
- 최종 commit `e279144`의 Cloudflare Pages Production deployment `dc3c4987-09bc-42d9-bfc7-e0b92258ebd7`가 성공했고, `https://travel.emfls.com/naver6dde13e69fe8ec25cd17e085c65c2124.html`은 redirect 없이 HTTP 200을 반환했다. Production 응답 본문은 원본 파일과 byte 단위로 일치했다.
