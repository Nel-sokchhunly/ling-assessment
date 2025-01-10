import DataTable from "@src/components/leaderboard/DataTable";
import SearchBar from "@src/components/leaderboard/SearchBar";
import TableFilter from "@src/components/leaderboard/TableFilter";
import {
  leaderboardFilterSelector,
  searchedUserSelector,
  selectBottom10Leaderboard,
  selectTop10Leaderboard,
} from "@src/selectors/leaderboardSelector";
import { LeaderboardFilters } from "@src/types/leaderboard";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Index() {
  const top10leaderboard = useSelector(selectTop10Leaderboard);
  const bottom10leaderboard = useSelector(selectBottom10Leaderboard);
  const searchedUser = useSelector(searchedUserSelector);
  const selectedFilter = useSelector(leaderboardFilterSelector);

  const tableData =
    selectedFilter === LeaderboardFilters.highestRank
      ? top10leaderboard
      : bottom10leaderboard;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <TableFilter />
      <DataTable data={tableData} activeItem={searchedUser} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
