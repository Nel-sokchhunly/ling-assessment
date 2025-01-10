import { createSelector } from "reselect";
import { RootState } from "@src/store";

export const leaderboardArraySelector = (state: RootState) =>
  state.leaderboard.data;

export const leaderboardHashMapSelector = (state: RootState) =>
  state.leaderboard.hashmap;

export const searchedUserSelector = (state: RootState) =>
  state.leaderboard.searchedUser;

// derived data selectors
export const selectTop10Leaderboard = createSelector(
  leaderboardArraySelector,
  (leaderboard) => leaderboard.slice(0, 10)
);

export const selectBottom10Leaderboard = createSelector(
  leaderboardArraySelector,
  (leaderboard) => leaderboard.slice(-10)
);

// filters
export const leaderboardFilterSelector = (state: RootState) =>
  state.leaderboard.selectedFilter;
