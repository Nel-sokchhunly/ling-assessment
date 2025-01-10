export type LeaderboardItem = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank: number;
};

export type LeaderboardList = LeaderboardItem[];

export type LeaderboardHash = {
  [key: LeaderboardItem["name"]]: LeaderboardItem;
};

// table filter
export const LeaderboardFilters = Object.freeze({
  highestRank: "Highest Rank",
  lowestRank: "Lowest Rank",
});

export type LeaderboardFilterTypes =
  (typeof LeaderboardFilters)[keyof typeof LeaderboardFilters];
