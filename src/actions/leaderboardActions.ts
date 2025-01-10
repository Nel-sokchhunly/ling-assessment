import { LeaderboardItem } from "@src/types/leaderboard";
import {
  CLEAR_SEARCHED_USER,
  UPDATE_HEADER_SORT,
  UPDATE_SEARCHED_USER,
  FUZZY_SEARCH_USER,
} from "./types";

// action types
export type UpdateSearchUserAction = {
  type: typeof UPDATE_SEARCHED_USER;
  payload: LeaderboardItem;
};
export type ClearSearchUserAction = {
  type: typeof CLEAR_SEARCHED_USER;
};
export type UpdateHeaderSortAction = {
  type: typeof UPDATE_HEADER_SORT;
  payload: {
    col: "name" | "rank";
    order: "asc" | "desc";
  };
};
export type FuzzySearchUserAction = {
  type: typeof FUZZY_SEARCH_USER;
  payload: string;
};

export type LeaderboardActionTypes =
  | UpdateSearchUserAction
  | ClearSearchUserAction
  | UpdateHeaderSortAction
  | FuzzySearchUserAction;

// action creators
export const updateSearchedUser = (
  data: LeaderboardItem
): UpdateSearchUserAction => {
  return {
    type: UPDATE_SEARCHED_USER,
    payload: data,
  };
};

export const clearSearchedUser = (): ClearSearchUserAction => {
  return {
    type: CLEAR_SEARCHED_USER,
  };
};

export const updateHeaderSort = (
  col: "name" | "rank",
  order: "asc" | "desc"
): UpdateHeaderSortAction => {
  return {
    type: UPDATE_HEADER_SORT,
    payload: { col, order },
  };
};

export const fuzzySearchUser = (searchName: string): FuzzySearchUserAction => {
  return {
    type: FUZZY_SEARCH_USER,
    payload: searchName,
  };
};
