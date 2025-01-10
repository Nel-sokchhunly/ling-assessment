import leaderboardData from "@assets/data/leaderboard.json";
import { LeaderboardHash, LeaderboardList } from "@src/types/leaderboard";

export const getLeaderboardData = (): {
  arr: LeaderboardList;
  hash: LeaderboardHash;
} => {
  // convert the object to an array and filter empty names
  const data = Object.entries(leaderboardData)
    .map(([_, item]) => ({
      ...item,
      rank: -1,
    }))
    .filter((item) => item.name.trim() !== "") // filter empty names
    .sort((a, b) => {
      if (a.bananas === b.bananas) {
        return a.name.localeCompare(b.name);
      }
      return b.bananas - a.bananas;
    });

  // add a rank to each item
  let rank = 1;
  let prevBanana: number | null = null;

  // result
  const arr: LeaderboardList = []; // use for rendering
  const hash: LeaderboardHash = {}; // use for searching

  data.forEach((item, index) => {
    if (item.bananas !== prevBanana) {
      rank = index + 1;
    }

    // add item to the list
    arr.push({
      ...item,
      rank,
    });

    // add item to the hash
    hash[item.name.toLocaleLowerCase()] = {
      ...item,
      rank,
    };

    prevBanana = item.bananas;
  });

  return { arr, hash };
};
