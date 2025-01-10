import { RootState } from "@src/store";
import { LeaderboardFilters } from "@src/types/leaderboard";

export const leaderItemFactory = (i: number) => ({
  uid: i.toString(),
  name: `Player ${i}`,
  rank: i + 1,
  bananas: i * 100,
  stars: i,
  longestStreak: i,
  lastDayPlayed: "2021-01-01",
  subscribed: true,
});

export const mockInitialLeaderboardState: RootState = {
  leaderboard: {
    data: [],
    hashmap: {},
    searchedUser: null,
    fuzzySearchedResult: [],
    selectedFilter: LeaderboardFilters.highestRank,
  },
};

export const mockLeaderboardState: RootState = {
  leaderboard: {
    ...mockInitialLeaderboardState.leaderboard,
    data: Array.from({ length: 100 }, (_, i) => leaderItemFactory(i)),
  },
};

export const lessThan10LeaderboardState = {
  leaderboard: {
    ...mockInitialLeaderboardState.leaderboard,
    data: Array.from({ length: 3 }, (_, i) => leaderItemFactory(i)),
  },
};
