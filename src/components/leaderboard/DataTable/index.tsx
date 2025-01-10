import { FlatList, StyleSheet, View } from "react-native";

import { LeaderboardItem } from "@src/types/leaderboard";
import { Heading } from "../../ui/heading";
import TRow from "./TRow";
import TCol from "./TCol";
import DataRow from "./DataRow";

export default function DataTable({
  data: tableData = [],
  activeItem,
}: {
  data: LeaderboardItem[];
  activeItem?: LeaderboardItem | null;
}) {
  return (
    <View style={styles.table}>
      <TRow style={[styles.topBorderRadius]}>
        <TCol style={styles.usernameCol}>
          <Heading>Name</Heading>
        </TCol>
        <TCol style={styles.rankCol}>
          <Heading>Rank</Heading>
        </TCol>

        <TCol style={styles.bananaCol}>
          <Heading>Bananas</Heading>
        </TCol>
      </TRow>

      <View>
        <FlatList
          data={tableData}
          keyExtractor={(row) => row.uid}
          renderItem={({ item: row, index }) => {
            return (
              <DataRow
                item={row}
                isActive={activeItem?.uid === row.uid}
                isLastRow={index === tableData.length - 1}
              />
            );
          }}
        />
      </View>
    </View>
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

  // radius styles
  topBorderRadius: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
