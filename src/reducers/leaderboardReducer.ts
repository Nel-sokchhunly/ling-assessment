import { LeaderboardActionTypes } from "@src/actions/leaderboardActions";
import { CLEAR_SEARCHED_USER, UPDATE_SEARCHED_USER } from "@src/actions/types";
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
  filteredLeaderboardList: LeaderboardList;
  fuzzySearchedResult: LeaderboardList;
}

const leaderboardData = getLeaderboardData();

const initialState: LeaderboardState = {
  data: leaderboardData.arr, // for rendering
  hashmap: leaderboardData.hash, // for instant searching, case insensitive
  searchedUser: null,
  filteredLeaderboardList: leaderboardData.arr.slice(0, 10), // default top 10
  fuzzySearchedResult: [],
};

// reducer functions
const updateSearchedUser = (
  state: LeaderboardState,
  searchedUser: LeaderboardItem
): LeaderboardState => {
  const top10 = state.data.slice(0, 10);

  // if user not in top 10, add user to the 10th position
  if (!top10.some((user) => user.uid === searchedUser.uid)) {
    top10.pop();
    top10.push(searchedUser);
  }

  return {
    ...state,
    searchedUser,
    filteredLeaderboardList: top10, // reset filter to top 10
  };
};

// main reducer
const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActionTypes
): LeaderboardState => {
  switch (action.type) {
    case UPDATE_SEARCHED_USER:
      return updateSearchedUser(state, action.payload);
    case CLEAR_SEARCHED_USER:
      return {
        ...state,
        searchedUser: null,
        filteredLeaderboardList: state.data.slice(0, 10), // reset to top 10
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
