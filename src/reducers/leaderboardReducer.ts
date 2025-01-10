import Fuse from "fuse.js";
import { LeaderboardActionTypes } from "@src/actions/leaderboardActions";
import {
  CLEAR_SEARCHED_USER,
  UPDATE_HEADER_SORT,
  UPDATE_SEARCHED_USER,
  FUZZY_SEARCH_USER,
} from "@src/actions/types";
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
  headerSort: {
    col: "name" | "rank";
    order: "asc" | "desc";
  };
}

const leaderboardData = getLeaderboardData();

const initialState: LeaderboardState = {
  data: leaderboardData.arr, // for rendering
  hashmap: leaderboardData.hash, // for instant searching, case insensitive
  searchedUser: null,
  filteredLeaderboardList: leaderboardData.arr.slice(0, 10), // default top 10
  headerSort: {
    col: "rank",
    order: "asc",
  },
};

// reducer functions
const updateSearchedUserHandler = (
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
    headerSort: { col: "rank", order: "asc" }, // reset sort to default
  };
};

const updateHeaderSortHandler = (
  state: LeaderboardState,
  payload: { col: "name" | "rank"; order: "asc" | "desc" }
): LeaderboardState => {
  const { col, order } = payload;
  const newList = JSON.parse(JSON.stringify(state.data));

  // sort based on column and order
  const sortedList = newList.sort((a: LeaderboardItem, b: LeaderboardItem) => {
    if (col === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return order === "asc" ? a.rank - b.rank : b.rank - a.rank;
    }
  });

  return {
    ...state,
    filteredLeaderboardList: sortedList.slice(0, 10),
    searchedUser: null,
    headerSort: { col, order },
  };
};

const fuzzySearchUserHandler = (
  state: LeaderboardState,
  search: string
): LeaderboardState => {
  const { data } = state;

  const searchDatabase = new Fuse(data, {
    keys: ["name"],
  });

  const searchResult = searchDatabase
    .search(search)
    .map((result) => result.item);

  return {
    ...state,
    filteredLeaderboardList: searchResult.slice(0, 10),
    searchedUser: null,
    headerSort: { col: "rank", order: "asc" },
  };
};

// main reducer
const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActionTypes
): LeaderboardState => {
  switch (action.type) {
    case UPDATE_SEARCHED_USER:
      return updateSearchedUserHandler(state, action.payload);
    case CLEAR_SEARCHED_USER:
      return {
        ...state,
        searchedUser: null,
        filteredLeaderboardList: state.data.slice(0, 10), // reset to top 10
      };
    case UPDATE_HEADER_SORT:
      return updateHeaderSortHandler(state, action.payload);
    case FUZZY_SEARCH_USER:
      return fuzzySearchUserHandler(state, action.payload);
    default:
      return state;
  }
};

export default leaderboardReducer;
