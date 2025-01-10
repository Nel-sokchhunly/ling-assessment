import { LeaderboardItem } from "@src/types/leaderboard";

// types
export const UPDATE_SEARCHED_USER = "UPDATE_SEARCHED_USER";

// action types
export type UpdateSearchUserAction = {
  type: typeof UPDATE_SEARCHED_USER;
  payload: LeaderboardItem;
};

export type LeaderboardActionTypes = UpdateSearchUserAction;

// action creators
export const updateSearchedUser = (
  data: LeaderboardItem
): UpdateSearchUserAction => {
  return {
    type: UPDATE_SEARCHED_USER,
    payload: data,
  };
};
