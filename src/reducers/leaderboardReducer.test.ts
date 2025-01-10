import { mockLeaderboardState } from "@src/__mocks__/mockLeaderboardState";
import leaderboardReducer from "./leaderboardReducer";
import {
  ClearSearchUserAction,
  UpdateHeaderSortAction,
  UpdateSearchUserAction,
} from "../actions/leaderboardActions";
import { CLEAR_SEARCHED_USER, UPDATE_SEARCHED_USER } from "../actions/types";
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

  it("should update the headerSort when UPDATE_HEADER_SORT action is dispatched", () => {
    const action: UpdateHeaderSortAction = {
      type: "UPDATE_HEADER_SORT",
      payload: { col: "name", order: "asc" },
    };

    const state = leaderboardReducer(undefined, action);

    expect(state.headerSort).toEqual({ col: "name", order: "asc" });
  });
});
