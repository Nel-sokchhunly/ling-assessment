import { RootState } from "@src/store";

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
    filteredLeaderboardList: [],
    headerSort: {
      col: "rank",
      order: "asc",
    },
  },
};

export const mockLeaderboardState: RootState = {
  leaderboard: {
    ...mockInitialLeaderboardState.leaderboard,
    data: Array.from({ length: 100 }, (_, i) => leaderItemFactory(i)),
    hashmap: Array.from({ length: 100 }, (_, i) => leaderItemFactory(i)).reduce(
      (acc, item) => ({ ...acc, [item.name]: item }),
      {}
    ),
    searchedUser: leaderItemFactory(0),
  },
};
