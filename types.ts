export interface PlayerStats {
  name: string;
  tag: string;
  iconUrl: string;
  trophies: number;
  level: number;
}

export interface Victories {
  threeVthree: number;
  solo: number;
  duo: number;
  experience: number;
}

export interface ClubInfo {
  name: string;
  tag: string;
  badgeUrl: string;
}

export interface GemPack {
  amount: number;
  imageUrl: string;
  price: string;
}

export interface BrawlerAbility {
  name: string;
  imageUrl: string;
}

export interface BrawlerGear extends BrawlerAbility {
  level: number;
}

export interface Brawler {
  name: string;
  power: number;
  trophies: number;
  rank: number;
  bestTrophies: number;
  imageUrl: string;
  streaks?: {
    current?: number;
    max: number;
  };
  abilities: {
    starPowers: BrawlerAbility[];
    gadgets: BrawlerAbility[];
    gears: BrawlerGear[];
  };
}