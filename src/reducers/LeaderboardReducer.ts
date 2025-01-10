import { LeaderboardActionTypes } from "@src/actions/types";
import { getLeaderboardData } from "@src/service/data";
import { LeaderboardList } from "@src/types/leaderboard";

interface LeaderboardState {
  data: LeaderboardList;
}

const initialState: LeaderboardState = {
  data: getLeaderboardData(),
};

const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActionTypes
): LeaderboardState => {
  switch (action) {
    default:
      return state;
  }
};

export default leaderboardReducer;
