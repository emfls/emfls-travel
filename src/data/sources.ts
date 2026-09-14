export type DestinationSource = {
  label: string;
  url: string;
  type: 'official' | 'public-tourism' | 'institution';
};

/** Verified public or local-government starting points for destination research. */
export const destinationSources: Record<string, DestinationSource[]> = {
  chungju: [{ label: '충주시 문화관광', url: 'https://www.chungju.go.kr/tour/', type: 'official' }],
  danyang: [{ label: '단양군 공식 홈페이지', url: 'https://danyang.go.kr/dy21/1', type: 'official' }],
  jecheon: [{ label: '제천시 문화관광', url: 'https://www.jecheon.go.kr/tour/base/main/view', type: 'official' }],
  wonju: [{ label: '원주관광', url: 'https://www.wonju.go.kr/tour/index.do', type: 'official' }],
  yeongwol: [{ label: '영월군 관광', url: 'https://www.yw.go.kr/tour/index.do', type: 'official' }],
  mungyeong: [{ label: '문경 문화관광', url: 'https://www.gbmg.go.kr/tour/main.do', type: 'official' }],
  goesan: [{ label: '괴산군 문화관광', url: 'https://www.goesan.go.kr/tour/index.do', type: 'official' }],
  andong: [{ label: '안동시 공식 홈페이지', url: 'https://www.andong.go.kr/', type: 'official' }],
};
