export interface Episode {
  title: string;
  id: number;
  season: number;
  episode: number;
  src: string;
  length: string;
  rate: string;
}

export interface Pager {
  total: number;
  current: number;
}

export interface Episodes {
  items: Episode[];
  pager: Pager;
}
