import { mockLeaderboardState } from "@src/__mocks__/mockLeaderboardState";
import {
  filteredLeaderboardListSelector,
  headerSortSelector,
  leaderboardArraySelector,
  leaderboardHashMapSelector,
  searchedUserSelector,
} from "./leaderboardSelector";

describe("leaderboard selectors", () => {
  // leaderboardArraySelector
  it("should return the leaderboard array", () => {
    const leaderboardArray = mockLeaderboardState.leaderboard.data;
    expect(leaderboardArraySelector(mockLeaderboardState)).toEqual(
      leaderboardArray
    );
  });

  // leaderboardHashMapSelector
  it("should return the leaderboard hashmap", () => {
    const leaderboardHashMap = mockLeaderboardState.leaderboard.hashmap;
    expect(leaderboardHashMapSelector(mockLeaderboardState)).toEqual(
      leaderboardHashMap
    );
  });

  // searchedUserSelector
  it("should return the searched user", () => {
    const searchedUser = mockLeaderboardState.leaderboard.data[0];
    expect(searchedUserSelector(mockLeaderboardState)).toEqual(searchedUser);
  });

  it("should return null if searched user is not found", () => {
    const mocks = {
      leaderboard: {
        ...mockLeaderboardState.leaderboard,
        searchedUser: null,
      },
    };

    expect(searchedUserSelector(mocks)).toEqual(null);
  });

  // filteredLeaderboardListSelector
  it("should return the filtered leaderboard list", () => {
    const filteredLeaderboardList =
      mockLeaderboardState.leaderboard.filteredLeaderboardList;
    expect(filteredLeaderboardListSelector(mockLeaderboardState)).toEqual(
      filteredLeaderboardList
    );
  });

  it("should return an empty array if filtered leaderboard list is empty", () => {
    const mocks = {
      leaderboard: {
        ...mockLeaderboardState.leaderboard,
        filteredLeaderboardList: [],
      },
    };

    expect(filteredLeaderboardListSelector(mocks)).toEqual([]);
  });

  // headerSortSelector
  it("should return the header sort", () => {
    const headerSort = mockLeaderboardState.leaderboard.headerSort;
    expect(headerSortSelector(mockLeaderboardState)).toEqual(headerSort);
  });
});
