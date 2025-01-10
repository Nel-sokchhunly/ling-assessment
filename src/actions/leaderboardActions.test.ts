import { leaderItemFactory } from "@src/__mocks__/mockLeaderboardState";
import { clearSearchedUser, updateSearchedUser } from "./leaderboardActions";
import { CLEAR_SEARCHED_USER, UPDATE_SEARCHED_USER } from "./types";

describe("leaderboard actions", () => {
  it("should create an action to update the searched user", () => {
    const expectedAction = {
      type: UPDATE_SEARCHED_USER,
    };
    const user = leaderItemFactory(1); // example user object
    expect(updateSearchedUser(user)).toEqual({
      ...expectedAction,
      payload: user,
    });
  });

  it("should create an action to clear the searched user", () => {
    const expectedAction = {
      type: CLEAR_SEARCHED_USER,
    };
    expect(clearSearchedUser()).toEqual({
      ...expectedAction,
    });
  });
});
