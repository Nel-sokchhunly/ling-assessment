import { LeaderboardActionTypes } from "@src/actions/leaderboardActions";
import { UPDATE_SEARCHED_USER } from "@src/actions/leaderboardActions";
import { getLeaderboardData } from "@src/service/data";
import {
  LeaderboardHash,
  LeaderboardItem,
  LeaderboardList,
} from "@src/types/leaderboard";

interface LeaderboardState {
  data: LeaderboardList;
  hashmap: LeaderboardHash;
  searchedUser: LeaderboardItem | null;
  fuzzySearchedResult: LeaderboardList;
}

const leaderboardData = getLeaderboardData();

const initialState: LeaderboardState = {
  data: leaderboardData.arr, // for rendering
  hashmap: leaderboardData.hash, // for instant searching, case insensitive
  searchedUser: null,
  fuzzySearchedResult: [],
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
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
