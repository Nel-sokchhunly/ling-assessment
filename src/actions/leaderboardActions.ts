import {
  LeaderboardFilterTypes,
  LeaderboardItem,
} from "@src/types/leaderboard";
import {
  CLEAR_SEARCHED_USER,
  UPDATE_SEARCHED_USER,
  UPDATE_TABLE_FILTER,
} from "./types";

// action types
export type UpdateSearchUserAction = {
  type: typeof UPDATE_SEARCHED_USER;
  payload: LeaderboardItem;
};
export type ClearSearchUserAction = {
  type: typeof CLEAR_SEARCHED_USER;
};

export type UpdateTableFilterAction = {
  type: typeof UPDATE_TABLE_FILTER;
  payload: LeaderboardFilterTypes;
};

export type LeaderboardActionTypes =
  | UpdateSearchUserAction
  | ClearSearchUserAction
  | UpdateTableFilterAction;

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

export const updateTableFilter = (
  data: LeaderboardFilterTypes
): UpdateTableFilterAction => {
  return {
    type: UPDATE_TABLE_FILTER,
    payload: data,
  };
};
