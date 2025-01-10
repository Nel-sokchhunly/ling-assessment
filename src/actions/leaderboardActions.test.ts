import { leaderItemFactory } from "@src/__mocks__/mockLeaderboardState";
import { UPDATE_SEARCHED_USER, updateSearchedUser } from "./leaderboardActions";

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
});
