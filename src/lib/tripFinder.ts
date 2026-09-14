import type { Destination } from '../data/destinations';

export type TripFilters = {
  companions: string;
  duration: string;
  environment: string;
  transport: string;
  purpose: string;
};

export type TripRecommendation = {
  destination: Destination;
  score: number;
  matched: string[];
  reason: string;
};

const labels: Record<keyof TripFilters, string> = {
  companions: '동행', duration: '여행 시간', environment: '여행 스타일', transport: '이동 방식', purpose: '여행 목적',
};

export const emptyTripFilters = (): TripFilters => ({ companions: '', duration: '', environment: '', transport: '', purpose: '' });

export function getTripRecommendations(destinations: Destination[], filters: TripFilters): TripRecommendation[] {
  return destinations.map((destination) => {
    const matched = (Object.keys(filters) as (keyof TripFilters)[]).filter((key) => filters[key] && filters[key] !== 'any' && destination.tripFinder[key].includes(filters[key]));
    const score = matched.reduce((total, key) => total + (key === 'companions' || key === 'purpose' ? 3 : 2), 0);
    const reason = matched.length ? `${matched.map((key) => labels[key]).join(' · ')} 조건이 잘 맞는 여행지입니다.` : '현재 조건에서 가장 가까운 여행 방식으로 살펴볼 수 있는 여행지입니다.';
    return { destination, score, matched, reason };
  }).sort((a, b) => b.score - a.score || a.destination.name.localeCompare(b.destination.name, 'ko'));
}
