import { LeaderboardActionTypes } from "./types";

// action types
export type SearchAction = {
  type: typeof LeaderboardActionTypes.SEARCH;
};

export type LeaderboardActions = SearchAction;

// action creators
export const search = (): SearchAction => ({
  type: LeaderboardActionTypes.SEARCH,
});
