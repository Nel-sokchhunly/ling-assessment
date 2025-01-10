import { LeaderboardActionTypes } from "@src/actions/leaderboardActions";
import {
  CLEAR_SEARCHED_USER,
  UPDATE_SEARCHED_USER,
  UPDATE_TABLE_FILTER,
} from "@src/actions/types";
import { getLeaderboardData } from "@src/service/data";
import {
  LeaderboardFilters,
  LeaderboardFilterTypes,
  LeaderboardHash,
  LeaderboardItem,
  LeaderboardList,
} from "@src/types/leaderboard";

interface LeaderboardState {
  data: LeaderboardList;
  hashmap: LeaderboardHash;
  searchedUser: LeaderboardItem | null;
  fuzzySearchedResult: LeaderboardList;
  selectedFilter: LeaderboardFilterTypes;
}

const leaderboardData = getLeaderboardData();

const initialState: LeaderboardState = {
  data: leaderboardData.arr, // for rendering
  hashmap: leaderboardData.hash, // for instant searching, case insensitive
  searchedUser: null,
  fuzzySearchedResult: [],
  selectedFilter: LeaderboardFilters.highestRank,
};

const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActionTypes
): LeaderboardState => {
  switch (action.type) {
    case UPDATE_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
        selectedFilter: LeaderboardFilters.highestRank, // reset filter to top 10
      };
    case CLEAR_SEARCHED_USER:
      return {
        ...state,
        searchedUser: null,
      };
    case UPDATE_TABLE_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
        searchedUser: null, // reset searched user when filter changes
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
