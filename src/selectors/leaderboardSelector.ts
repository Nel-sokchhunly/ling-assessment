import { createSelector } from "reselect";
import { RootState } from "@src/store";

export const leaderboardSelector = (state: RootState) => state.leaderboard;

export const selectTop10Leaderboard = createSelector(
  leaderboardSelector,
  (leaderboard) => leaderboard.data.slice(0, 10)
);

export const selectBottom10Leaderboard = createSelector(
  leaderboardSelector,
  (leaderboard) => leaderboard.data.slice(-10)
);
