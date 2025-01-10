import {
  selectTop10Leaderboard,
  selectBottom10Leaderboard,
} from "./leaderboardSelector";
import {
  lessThan10LeaderboardState,
  mockInitialLeaderboardState,
  mockLeaderboardState,
} from "@src/__mocks__/mockLeaderboardState";

describe("leaderboard selectors", () => {
  // when list is bigger than 10
  it("should select top 10 leaderboard", () => {
    expect(selectTop10Leaderboard(mockLeaderboardState)).toEqual(
      mockLeaderboardState.leaderboard.data.slice(0, 10)
    );
  });

  it("should select bottom 10 leaderboard", () => {
    expect(selectBottom10Leaderboard(mockLeaderboardState)).toEqual(
      mockLeaderboardState.leaderboard.data.slice(-10)
    );
  });

  // when list is empty
  it("should return empty array for top 10 leaderboard when leaderboard is empty", () => {
    expect(
      selectTop10Leaderboard({
        leaderboard: {
          ...mockInitialLeaderboardState.leaderboard,
          data: [], // empty data
        },
      })
    ).toEqual([]);
  });

  it("should return empty array for bottom 10 leaderboard when leaderboard is empty", () => {
    expect(
      selectBottom10Leaderboard({
        leaderboard: {
          ...mockInitialLeaderboardState.leaderboard,
          data: [], // empty data
        },
      })
    ).toEqual([]);
  });

  // when list is smaller than 10
  it("should return the whole list for top 10 leaderboard when leaderboard is smaller than 10", () => {
    expect(selectTop10Leaderboard(lessThan10LeaderboardState)).toEqual(
      lessThan10LeaderboardState.leaderboard.data
    );
  });
});
