import { Text, View, FlatList, StyleSheet } from "react-native";
import {
  Table,
  TableHeader as Header,
  TableBody as Body,
  TableRow as Row,
  TableHead as Head,
  TableData as Data,
} from "@components/ui/table";
import { LeaderboardItem } from "@src/types/leaderboard";

export default function DataTable({
  data: tableData = [],
}: {
  data: LeaderboardItem[];
}) {
  return (
    <Table style={styles.table}>
      <Header>
        <Row style={[styles.row, styles.topBorderRadius]}>
          <Head style={styles.usernameCol}>Name</Head>
          <Head style={styles.rankCol}>Rank</Head>
          <Head style={styles.bananaCol}>Banana</Head>
        </Row>
      </Header>
      <Body>
        <FlatList
          data={tableData}
          keyExtractor={(row) => row.uid}
          renderItem={({ item: row, index }) => (
            <Row
              style={[
                styles.row,
                index === tableData.length - 1 && styles.bottomBorderRadius,
              ]}
            >
              <Data style={styles.usernameCol}>{row.name}</Data>
              <Data style={styles.rankCol}>{row.rank}</Data>
              <Data style={styles.bananaCol}>{row.bananas}</Data>
            </Row>
          )}
        />
      </Body>
    </Table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: "100%",
  },
  // column styles
  usernameCol: {
    width: "50%",
  },
  rankCol: {
    width: "20%",
  },
  bananaCol: {
    width: "30%",
  },
  // row styles
  row: {
    width: "100%",
  },

  // radius styles
  topBorderRadius: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomBorderRadius: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
