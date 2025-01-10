import { mockLeaderboardState } from "@src/__mocks__/mockLeaderboardState";
import leaderboardReducer from "./leaderboardReducer";
import {
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
});
