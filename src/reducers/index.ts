import { combineReducers } from "redux";
import leaderboardReducer from "./LeaderboardReducer";

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});

export default rootReducer;
