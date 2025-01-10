import { Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
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
  activeItem,
}: {
  data: LeaderboardItem[];
  activeItem?: LeaderboardItem | null;
}) {
  const isActiveItemInList = tableData.some(
    (item) => item.uid === activeItem?.uid
  );

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
          renderItem={({ item: row, index }) => {
            if (!isActiveItemInList && index === 9 && activeItem) {
              return (
                <DataRow item={activeItem} isActive={true} isLastRow={true} />
              );
            }
            return (
              <DataRow
                item={row}
                isActive={activeItem?.uid === row.uid}
                isLastRow={index === tableData.length - 1}
              />
            );
          }}
        />
      </Body>
    </Table>
  );
}

const DataRow = ({
  item,
  isActive,
  isLastRow,
}: {
  item: LeaderboardItem;
  isActive: boolean;
  isLastRow: boolean;
}) => {
  return (
    <Row
      style={[
        styles.row,
        isLastRow && styles.bottomBorderRadius,
        isActive && styles.activeRow,
      ]}
    >
      <Data style={[styles.usernameCol, isActive && styles.activeCol]}>
        {item.name}
      </Data>
      <Data style={[styles.rankCol, isActive && styles.activeCol]}>
        {item.rank}
      </Data>
      <Data style={[styles.bananaCol, isActive && styles.activeCol]}>
        {item.bananas}
      </Data>
    </Row>
  );
};

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

  // active item styles
  activeRow: {
    backgroundColor: "rgb(255, 153, 0)",
  },
  activeCol: {
    color: "white",
    fontWeight: "bold",
  },
});
