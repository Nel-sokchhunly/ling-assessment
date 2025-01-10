import { mockLeaderboardState } from "@src/__mocks__/mockLeaderboardState";
import leaderboardReducer from "./leaderboardReducer";
import {
  CLEAR_SEARCHED_USER,
  ClearSearchUserAction,
  UPDATE_SEARCHED_USER,
  UpdateSearchUserAction,
} from "../actions/leaderboardActions";
import { LeaderboardItem } from "../types/leaderboard";

describe("leaderboardReducer", () => {
  it("should update the searchedUser when UPDATE_SEARCHED_USER action is dispatched", () => {
    const searchedUser: LeaderboardItem =
      mockLeaderboardState.leaderboard.data[0];

    const action: UpdateSearchUserAction = {
      type: UPDATE_SEARCHED_USER,
      payload: searchedUser,
    };

    const state = leaderboardReducer(undefined, action);

    expect(state.searchedUser).toEqual(searchedUser);
  });

  it("should clear the searchedUser when CLEAR_SEARCHED_USER action is dispatched", () => {
    const updateAction: UpdateSearchUserAction = {
      type: UPDATE_SEARCHED_USER,
      payload: mockLeaderboardState.leaderboard.data[0],
    };

    const state = leaderboardReducer(undefined, updateAction); // set searchedUser

    const clearAction: ClearSearchUserAction = {
      type: CLEAR_SEARCHED_USER,
    };

    const clearedState = leaderboardReducer(state, clearAction);

    expect(clearedState.searchedUser).toEqual(null);
  });
});
