import leaderboardData from "@assets/data/leaderboard.json";
import { LeaderboardList } from "@src/types/leaderboard";

export const getLeaderboardData = (): LeaderboardList => {
  // convert the object to an array
  const data = Object.entries(leaderboardData).map(([_, item]) => ({
    ...item,
    rank: -1,
  }));

  // Sort the leaderboard data by bananas,
  // if bananas are equal, sort by name
  data.sort((a, b) => {
    if (a.bananas === b.bananas) {
      return a.name.localeCompare(b.name);
    }
    return b.bananas - a.bananas;
  });

  // add a rank to each item
  let rank = 1;
  let prevBanana: number | null = null;

  data.forEach((item, index) => {
    if (item.bananas !== prevBanana) {
      rank = index + 1;
    }
    item.rank = rank;
    prevBanana = item.bananas;
  });

  return data satisfies LeaderboardList;
};
