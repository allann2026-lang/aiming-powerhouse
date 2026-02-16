
export interface SEOStrategy {
  niche: string;
  focus: string;
  roadmap: string[];
}

export interface RankingPoint {
  id: number;
  before: number; // Ranking 1-100
  after: number;  // Ranking 1-3
  label: string;
}
