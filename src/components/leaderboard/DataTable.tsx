import { Text, View, FlatList, StyleSheet } from "react-native";
import {
  Table,
  TableHeader as Header,
  TableBody as Body,
  TableRow as Row,
  TableHead as Head,
  TableData as Data,
} from "@components/ui/table";

const mockData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function DataTable() {
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
          data={mockData}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Row
              style={[
                styles.row,
                item === mockData.length - 1 && styles.bottomBorderRadius,
              ]}
            >
              <Data style={styles.usernameCol}>John Smith</Data>
              <Data style={styles.rankCol}>3</Data>
              <Data style={styles.bananaCol}>80</Data>
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
