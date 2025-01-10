import DataTable from "@src/components/leaderboard/DataTable";
import SearchBar from "@src/components/leaderboard/SearchBar";
import { selectTop10Leaderboard } from "@src/selectors/leaderboardSelector";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Index() {
  const top10leaderboard = useSelector(selectTop10Leaderboard);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <DataTable data={top10leaderboard} />
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
