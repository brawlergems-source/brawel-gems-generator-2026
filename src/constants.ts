import { PlayerStats, GemPack, Victories, ClubInfo, Brawler } from './types';

export const PLAYER_DATA: PlayerStats = {
  name: "Juko",
  tag: "#9Y8UYRYY",
  iconUrl: "https://cdn.brawlify.com/profile-icons/regular/28000738.png",
  trophies: 92978,
  level: 307,
};

export const VICTORIES_DATA: Victories = {
  threeVthree: 22182,
  solo: 3987,
  duo: 3044,
  experience: 479602,
};

export const CLUB_DATA: ClubInfo = {
  name: "NL Leaders",
  tag: "#2009GPY9V",
  badgeUrl: "https://cdn.brawlify.com/club-badges/regular/8000000.png",
};

export const GEM_PACKS: GemPack[] = [
  { amount: 30, imageUrl: "https://i.postimg.cc/v8JVW6wS/30.png", price: "2,29 €" },
  { amount: 80, imageUrl: "https://i.postimg.cc/fRZSPnLb/80.png", price: "5,49 €" },
  { amount: 170, imageUrl: "https://i.postimg.cc/8zHfQKJJ/170.png", price: "10,99 €" },
  { amount: 360, imageUrl: "https://i.postimg.cc/Hk28DZcP/360.png", price: "21,99 €" },
  { amount: 950, imageUrl: "https://i.postimg.cc/s2gQVY5z/950.png", price: "54,99 €" },
  { amount: 2000, imageUrl: "https://i.postimg.cc/CKrZdR4b/2000.png", price: "109,99 €" },
];

export const BRAWLERS_DATA: Brawler[] = [
  {
    name: 'GUS',
    power: 11,
    trophies: 1034,
    rank: 53,
    bestTrophies: 1753,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000061.png',
    streaks: { max: 22 },
    abilities: {
      starPowers: [
        { name: 'HEALTH BONANZA', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000511.png' },
        { name: 'SPIRIT ANIMAL', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000512.png' }
      ],
      gadgets: [
        { name: 'KOOKY POPPER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000513.png' },
        { name: 'SOUL SWITCHER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000514.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'VISION', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000003.png' },
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' },
      ]
    }
  },
  {
    name: 'MORTIS',
    power: 11,
    trophies: 1022,
    rank: 52,
    bestTrophies: 1289,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000011.png',
    streaks: { max: 10 },
    abilities: {
      starPowers: [
        { name: 'CREEPY HARVEST', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000087.png' },
        { name: 'COILED SNAKE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000154.png' }
      ],
      gadgets: [
        { name: 'COMBO SPINNER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000265.png' },
        { name: 'SURVIVAL SHOVEL', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000290.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' },
      ]
    }
  },
  {
    name: 'BIBI',
    power: 11,
    trophies: 1013,
    rank: 52,
    bestTrophies: 1228,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000026.png',
    streaks: { max: 10 },
    abilities: {
      starPowers: [
        { name: 'HOME RUN', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000134.png' },
        { name: 'BATTING STANCE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000146.png' }
      ],
      gadgets: [
        { name: 'VITAMIN BOOSTER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000275.png' },
      ],
      gears: [
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' },
      ]
    }
  },
  {
    name: 'MELODIE',
    power: 11,
    trophies: 1011,
    rank: 52,
    bestTrophies: 1235,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000078.png',
    streaks: { current: 2, max: 10 },
    abilities: {
      starPowers: [
        { name: 'FAST BEATS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000667.png' },
        { name: 'EXTENDED MIX', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000668.png' }
      ],
      gadgets: [
        { name: 'PERFECT PITCH', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000669.png' },
        { name: 'INTERLUDE', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000670.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' },
      ]
    }
  },
  {
    name: 'MANDY',
    power: 11,
    trophies: 1008,
    rank: 52,
    bestTrophies: 1341,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000065.png',
    streaks: { current: 1, max: 13 },
    abilities: {
      starPowers: [
        { name: 'IN MY SIGHTS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000543.png' },
        { name: 'HARD CANDY', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000544.png' }
      ],
      gadgets: [
        { name: 'CARAMELIZE', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000545.png' },
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' },
      ]
    }
  },
  {
    name: 'SHELLY',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1203,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000000.png',
    streaks: { current: 1, max: 9 },
    abilities: {
      starPowers: [
        { name: 'SHELL SHOCK', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000076.png' },
        { name: 'BAND-AID', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000135.png' }
      ],
      gadgets: [
        { name: 'FAST FORWARD', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000255.png' },
        { name: 'CLAY PIGEONS', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000288.png' }
      ],
      gears: [
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' },
      ]
    }
  },
  {
    name: 'JUJU',
    power: 11,
    trophies: 1009,
    rank: 52,
    bestTrophies: 1206,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000087.png',
    streaks: { max: 21 },
    abilities: {
      starPowers: [
        { name: 'NUMBING NEEDLES', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000849.png' }
      ],
      gadgets: [
        { name: 'VOODOO CHILE', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000850.png' },
        { name: 'ELEMENTALIST', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000851.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' }
      ]
    }
  },
  {
    name: 'KENJI',
    power: 11,
    trophies: 1007,
    rank: 51,
    bestTrophies: 1140,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000085.png',
    streaks: { current: 1, max: 31 },
    abilities: {
      starPowers: [
        { name: 'NIGIRI NEMESIS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000816.png' }
      ],
      gadgets: [
        { name: 'DASHI DASH', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000817.png' },
        { name: 'HOSOMAKI HEALING', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000818.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' }
      ]
    }
  },
  {
    name: 'PAM',
    power: 11,
    trophies: 1000,
    rank: 53,
    bestTrophies: 1655,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000016.png',
    streaks: { current: 2, max: 24 },
    abilities: {
      starPowers: [
        { name: "MAMA'S HUG", imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000092.png' },
        { name: "MAMA'S SQUEEZE", imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000139.png' }
      ],
      gadgets: [
        { name: 'PULSE MODULATOR', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000257.png' },
        { name: 'SCRAPSUCKER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000404.png' }
      ],
      gears: [
        { name: 'SUPER TURRET', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000016.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' }
      ]
    }
  },
  {
    name: 'COLT',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1214,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000001.png',
    streaks: { current: 8, max: 10 },
    abilities: {
      starPowers: [
        { name: 'SLICK BOOTS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000077.png' },
        { name: 'MAGNUM SPECIAL', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000138.png' }
      ],
      gadgets: [
        { name: 'SPEEDLOADER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000273.png' },
        { name: 'SILVER BULLET', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000319.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'GADGET COOLDOWN', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000017.png' }
      ]
    }
  },
  {
    name: 'RICO',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1295,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000004.png',
    streaks: { current: 2, max: 14 },
    abilities: {
      starPowers: [
        { name: 'SUPER BOUNCY', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000080.png' },
        { name: 'ROBO RETREAT', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000156.png' }
      ],
      gadgets: [
        { name: 'MULTIBALL LAUNCHER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000246.png' },
        { name: 'BOUNCY CASTLE', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000409.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'GADGET COOLDOWN', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000017.png' }
      ]
    }
  },
  {
    name: 'SPIKE',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1212,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000005.png',
    streaks: { current: 7, max: 10 },
    abilities: {
      starPowers: [
        { name: 'FERTILIZE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000081.png' },
        { name: 'CURVEBALL', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000151.png' }
      ],
      gadgets: [
        { name: 'POPPING PINCUSHION', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000247.png' },
        { name: 'LIFE PLANT', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000406.png' }
      ],
      gears: [
        { name: 'GADGET COOLDOWN', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000017.png' },
        { name: 'STICKY SPIKES', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000010.png' }
      ]
    }
  },
  {
    name: 'JESSIE',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1212,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000007.png',
    streaks: { current: 1, max: 11 },
    abilities: {
      starPowers: [
        { name: 'ENERGIZE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000083.png' },
        { name: 'SHOCKY', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000149.png' }
      ],
      gadgets: [
        { name: 'SPARK PLUG', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000251.png' },
        { name: 'RECOIL SPRING', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000295.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' }
      ]
    }
  },
  {
    name: 'EL PRIMO',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1340,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000010.png',
    streaks: { max: 12 },
    abilities: {
      starPowers: [
        { name: 'EL FUEGO', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000086.png' },
        { name: 'METEOR RUSH', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000140.png' }
      ],
      gadgets: [
        { name: 'SUPLEX SUPPLEMENT', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000264.png' },
        { name: 'ASTEROID BELT', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000292.png' }
      ],
      gears: [
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' },
        { name: 'GADGET COOLDOWN', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000017.png' }
      ]
    }
  },
  {
    name: 'PIPER',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1407,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000015.png',
    streaks: { max: 10 },
    abilities: {
      starPowers: [
        { name: 'AMBUSH', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000091.png' },
        { name: 'SNAPPY SNIPING', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000152.png' }
      ],
      gadgets: [
        { name: 'AUTO AIMER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000268.png' },
        { name: 'HOMEMADE RECIPE', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000291.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' }
      ]
    }
  },
  {
    name: 'TARA',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1238,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000017.png',
    streaks: { current: 2, max: 7 },
    abilities: {
      starPowers: [
        { name: 'BLACK PORTAL', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000093.png' },
        { name: 'HEALING SHADE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000160.png' }
      ],
      gadgets: [
        { name: 'PSYCHIC ENHANCER', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000266.png' },
        { name: 'SUPPORT FROM BEYOND', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000356.png' }
      ],
      gears: [
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' },
        { name: 'PET POWER', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000014.png' }
      ]
    }
  },
  {
    name: 'DARRYL',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1203,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000018.png',
    streaks: { current: 2, max: 9 },
    abilities: {
      starPowers: [
        { name: 'STEEL HOOPS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000094.png' },
        { name: 'ROLLING RELOAD', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000157.png' }
      ],
      gadgets: [
        { name: 'RECOILING ROTATOR', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000260.png' },
        { name: 'TAR BARREL', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000313.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'SPEED', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000000.png' }
      ]
    }
  },
  {
    name: 'FRANK',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1265,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000020.png',
    streaks: { current: 1, max: 10 },
    abilities: {
      starPowers: [
        { name: 'POWER GRAB', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000104.png' },
        { name: 'SPONGE', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000153.png' }
      ],
      gadgets: [
        { name: 'ACTIVE NOISE CANCELING', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000261.png' },
        { name: 'IRRESISTIBLE ATTRACTION', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000351.png' }
      ],
      gears: [
        { name: 'HEALTH', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000001.png' },
        { name: 'SHIELD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000004.png' }
      ]
    }
  },
  {
    name: 'GENE',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1214,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000021.png',
    streaks: { current: 1, max: 12 },
    abilities: {
      starPowers: [
        { name: 'MAGIC PUFFS', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000109.png' },
        { name: 'SPIRIT SLAP', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000159.png' }
      ],
      gadgets: [
        { name: 'LAMP BLOWOUT', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000252.png' },
        { name: 'VENGEFUL SPIRITS', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000352.png' }
      ],
      gears: [
        { name: 'DAMAGE', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000002.png' },
        { name: 'TALK TO THE HAND', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000008.png' }
      ]
    }
  },
  {
    name: 'TICK',
    power: 11,
    trophies: 1000,
    rank: 52,
    bestTrophies: 1385,
    imageUrl: 'https://cdn.brawlify.com/brawlers/borderless/16000022.png',
    streaks: { current: 7, max: 11 },
    abilities: {
      starPowers: [
        { name: 'WELL OILED', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000114.png' },
        { name: 'AUTOMA-TICK RELOAD', imageUrl: 'https://cdn.brawlify.com/star-powers/borderless/23000161.png' }
      ],
      gadgets: [
        { name: 'MINE MANIA', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000253.png' },
        { name: 'LAST HURRAH', imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000355.png' }
      ],
      gears: [
        { name: 'HEALTH', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000001.png' },
        { name: 'THICC HEAD', level: 3, imageUrl: 'https://cdn.brawlify.com/gears/regular/62000007.png' }
      ]
    }
  }
];