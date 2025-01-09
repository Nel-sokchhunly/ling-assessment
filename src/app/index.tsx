import DataTable from "@src/components/leaderboard/DataTable";
import SearchBar from "@src/components/leaderboard/SearchBar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <DataTable />
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
