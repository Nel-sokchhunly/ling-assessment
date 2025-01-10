import { search } from "./leaderboardActions";
import { LeaderboardActionTypes } from "./types";

describe("leaderboard actions", () => {
  it("should create an action to search", () => {
    const expectedAction = {
      type: LeaderboardActionTypes.SEARCH,
    };
    expect(search()).toEqual(expectedAction);
  });
});
