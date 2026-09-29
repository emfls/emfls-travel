# EMFLS Travel Production 체크리스트

- [x] `npm run check`
- [x] `npm run build`
- [x] Cloudflare Pages Production 배포
- [x] HTTPS 및 `travel.emfls.com`
- [x] `robots.txt` 및 단일 `sitemap.xml`
- [x] production canonical과 trailing slash
- [x] favicon 및 Travel OG image
- [x] GA4 production custom-domain 조건
- [x] About / Contact / Privacy / Editorial Policy
- [x] 404와 내부 링크
- [x] 모바일 CSS 및 Trip Finder
- [x] CSS visual placeholder 정책

## 사용자 운영 확인

- [ ] Google Analytics 관리자에서 실시간 수집 확인
- [ ] Search Console 소유권 및 sitemap 운영
- [ ] AdSense 적용 승인 후 별도 검토

## Foundation/Search Launch · 2026-09-30 · Site 8 horizontal pass

### Production baseline rechecked
- [x] Cloudflare Pages Production active at https://travel.emfls.com/ (deployment 2071fea5 from main ce2d4c8).
- [x] Home, robots.txt, sitemap.xml, Naver verification, About, Contact, Privacy, Editorial Policy return HTTP 200; unique unknown route returns real 404.
- [x] Canonical/description/title verified on Home and Trust routes. Sitemap has 36 unique URLs, all canonical to travel.emfls.com with trailing slashes.
- [x] Naver verification file and its extensionless rewrite both return HTTP 200 with the expected marker. This proves technical availability only, not Search Advisor account ownership or sitemap submission.
- [x] About / Contact / Privacy / Editorial Policy provide minimum Trust routes.

### External Search Launch status
- [ ] Google Search Console ownership: Registry NOT_SET; owner account action required.
- [ ] Google sitemap submission/current processing: Registry NOT_SET; owner account action required.
- [ ] Naver Search Advisor ownership and sitemap submission: Registry NOT_SET; verifier endpoint is live; owner account action required.
- [ ] Daum Search registration: official public lookup returned “미등록 사이트” for http://travel.emfls.com; no application submitted; owner details/privacy consent required (Registry remains NOT_SET).
- [ ] Daum Sitemap: Registry NOT_SET; reviewed public Daum guides do not establish a sitemap-submission flow. Keep NOT_SET until a supported flow or authoritative N/A evidence is available.
- [ ] IndexNow production setup and actual URL submission: root key is currently on codex/site8-foundation-search only. Do not submit until the same key is served from the canonical Production host.

### Branch-only implementation checkpoint
- [x] Add one lowercase 32-hex IndexNow root key file under public/ and a regression test that checks unique filename/body match.
- [ ] Production key URL and actual IndexNow submission remain pending; no POST has been sent.
- [ ] Keep Search Launch NOT_READY until current owner registrations/submissions and production IndexNow result are evidenced.
