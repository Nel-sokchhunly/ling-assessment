import { RootState } from "@src/store";

export const leaderboardArraySelector = (state: RootState) =>
  state.leaderboard.data;

export const leaderboardHashMapSelector = (state: RootState) =>
  state.leaderboard.hashmap;

export const searchedUserSelector = (state: RootState) =>
  state.leaderboard.searchedUser;

export const filteredLeaderboardListSelector = (state: RootState) =>
  state.leaderboard.filteredLeaderboardList;

// header sort selectors
export const headerSortSelector = (state: RootState) =>
  state.leaderboard.headerSort;
