export type Guide = { slug: string; title: string; eyebrow: string; description: string; route: string; tone: string };
export const nav = [
  { label: '국내', href: '/domestic/' }, { label: '해외', href: '/overseas/' },
  { label: '가족여행', href: '/family/' }, { label: '아이와 여행', href: '/with-kids/' },
  { label: '자동차 여행', href: '/road-trip/' }, { label: '숙소', href: '/stays/' },
  { label: '여행 준비', href: '/packing/' }, { label: '여행 팁', href: '/tips/' },
];
export const finderOptions = [
  { id: 'companions', label: '누구와 가나요?', value: '혼자 · 둘 · 가족' },
  { id: 'pace', label: '얼마나 이동하나요?', value: '가까운 곳 · 천천히' },
  { id: 'weather', label: '어떤 하루인가요?', value: '실내 · 야외' },
  { id: 'purpose', label: '무엇을 원하나요?', value: '휴식 · 발견 · 놀이' },
];
export const guides: Guide[] = [
  { slug: 'slow-city-weekend', title: '느린 도시에서 보내는 주말', eyebrow: '국내 · 휴식', description: '한 장소에 오래 머무는 여행을 위한 동선과 하루의 리듬을 살펴봅니다.', route: '/domestic/', tone: 'ochre' },
  { slug: 'rainy-day-with-kids', title: '비 오는 날에도 괜찮은 여행', eyebrow: '아이와 여행 · 실내', description: '날씨가 바뀌어도 계획을 이어갈 수 있는 실내 중심 여행의 기준.', route: '/with-kids/', tone: 'blue' },
  { slug: 'roadside-stops', title: '목적지보다 길이 기억나는 날', eyebrow: '자동차 여행 · 발견', description: '출발 전부터 돌아오는 길까지, 자동차 여행을 편하게 만드는 작은 준비.', route: '/road-trip/', tone: 'green' },
  { slug: 'seasonal-stays', title: '계절을 머무는 숙소 고르기', eyebrow: '숙소 · 계절여행', description: '전망과 위치, 머무는 시간으로 나에게 맞는 숙소를 생각해봅니다.', route: '/stays/', tone: 'rose' },
];
export const categoryPages = {
  domestic: { title: '국내', kicker: '가까운 곳의 새로운 표정', description: '짧은 이동으로도 여행의 밀도를 바꿀 수 있는 국내 목적지를 목적과 조건별로 살펴봅니다.', accent: '국내 여행은 장소보다 하루를 어떻게 보낼지에서 시작됩니다.', links: ['주말에 다녀오기 좋은 리듬', '비 오는 날의 실내 동선', '자동차로 이어지는 작은 도시들'] },
  overseas: { title: '해외', kicker: '다음 장면을 상상하는 법', description: '먼 거리의 여행을 준비할 때 필요한 영감과 기준을 지역, 계절, 여행 방식으로 정리합니다.', accent: '가고 싶은 장면을 먼저 고르면 준비해야 할 것이 선명해집니다.', links: ['첫 해외여행의 속도 정하기', '도시와 자연을 함께 보는 방법', '출발 전 확인할 이동 감각'] },
  family: { title: '가족여행', kicker: '모두의 하루가 편안하도록', description: '세대와 취향이 다른 가족이 함께 움직일 때 여행지를 고르는 기준을 이야기합니다.', accent: '좋은 가족여행은 모두가 좋아하는 장소보다 모두가 쉬어갈 틈이 있는 일정입니다.', links: ['무리 없는 하루의 길이', '식사와 휴식 사이의 간격', '가족의 취향을 섞는 방법'] },
  'with-kids': { title: '아이와 여행', kicker: '아이의 호기심을 따라가는 여행', description: '아이와 함께라서 달라지는 이동, 준비, 날씨 변수를 여행 설계의 일부로 생각합니다.', accent: '아이의 질문이 많아지는 곳이라면, 이미 좋은 여행의 시작입니다.', links: ['짧은 동선으로 큰 발견', '비 오는 날의 대안 만들기', '차 안과 가방에 준비할 것'] },
  'road-trip': { title: '자동차 여행', kicker: '길 위에서 생기는 여백', description: '운전 시간과 정차 지점, 주차와 주변 이동을 함께 살피는 자동차 여행 가이드입니다.', accent: '목적지만 저장하지 말고, 그 사이에 쉬어갈 장면도 함께 표시해두세요.', links: ['출발 전 경로를 가볍게', '아이와 함께 쉬어가는 정차', '주차가 여행을 바꾸는 순간'] },
  stays: { title: '숙소', kicker: '머무는 시간까지 여행으로', description: '숙소를 가격이나 사진만으로 고르지 않고, 여행의 목적과 하루의 사용 방식으로 바라봅니다.', accent: '숙소 선택은 잠자리보다 여행 중 가장 오래 머물 장면을 고르는 일입니다.', links: ['전망보다 중요한 위치', '하루를 회복시키는 방', '숙소 주변을 함께 읽기'] },
  airports: { title: '공항', kicker: '여행은 출발 전부터 시작됩니다', description: '공항 이동, 대기, 환승처럼 여행의 앞뒤를 매끄럽게 만드는 준비의 관점을 모읍니다.', accent: '공항에서의 여유는 여행 전체의 피로도를 낮춰주는 첫 번째 선택입니다.', links: ['공항까지의 시간을 계산하기', '환승이 있는 날의 짐 구성', '늦은 도착을 위한 첫날 계획'] },
  packing: { title: '준비물', kicker: '가볍게 준비하고 오래 즐기기', description: '무엇을 더 챙길지보다 어떤 상황을 편하게 만들지 생각하는 여행 준비 노트입니다.', accent: '준비물 목록은 물건의 목록이 아니라 여행 중 마주칠 상황의 목록입니다.', links: ['날씨 변화에 대응하기', '아이와 함께 챙기는 순서', '가방을 다시 여는 순간을 줄이기'] },
  seasonal: { title: '계절여행', kicker: '같은 장소의 다른 계절', description: '계절이 바꾸는 빛, 이동감, 체류 시간을 기준으로 여행의 타이밍을 찾아봅니다.', accent: '계절을 고르면 여행의 색과 속도도 자연스럽게 정해집니다.', links: ['봄의 첫 산책', '여름의 느린 물가', '가을과 겨울의 실내 풍경'] },
  tips: { title: '여행 팁', kicker: '계획을 덜 복잡하게 만드는 기준', description: '검색 결과를 모으는 데서 끝나지 않고, 나에게 맞는 여행으로 좁혀가는 방법을 정리합니다.', accent: '여행의 정답보다 지금의 나에게 맞는 조건을 먼저 찾습니다.', links: ['일정표를 비우는 기술', '검색어를 목적어로 바꾸기', '여행 뒤에 남는 기록'] },
} as const;
