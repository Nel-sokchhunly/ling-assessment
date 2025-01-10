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

export const mockLeaderboardState: RootState = {
  leaderboard: {
    data: Array.from({ length: 100 }, (_, i) => leaderItemFactory(i)),
  },
};

export const lessThan10LeaderboardState = {
  leaderboard: {
    data: Array.from({ length: 3 }, (_, i) => leaderItemFactory(i)),
  },
};
