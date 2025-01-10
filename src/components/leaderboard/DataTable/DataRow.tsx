import { LeaderboardItem } from "@src/types/leaderboard";
import TRow from "./TRow";
import TCol from "./TCol";
import { StyleSheet, Text } from "react-native";

export default function DataRow({
  item,
  isActive,
  isLastRow,
}: {
  item: LeaderboardItem;
  isActive: boolean;
  isLastRow: boolean;
}) {
  return (
    <TRow
      style={[
        isLastRow && styles.bottomBorderRadius,
        isActive && styles.activeRow,
      ]}
      isLastRow={isLastRow}
    >
      <TCol style={styles.usernameCol}>
        <Text style={[styles.colText, isActive && styles.activeText]}>
          {item.name}
        </Text>
      </TCol>
      <TCol style={styles.rankCol}>
        <Text style={[styles.colText, isActive && styles.activeText]}>
          {item.rank}
        </Text>
      </TCol>
      <TCol style={styles.bananaCol}>
        <Text style={[styles.colText, isActive && styles.activeText]}>
          {item.bananas}
        </Text>
      </TCol>
    </TRow>
  );
}

const styles = StyleSheet.create({
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
  // col text styles
  colText: {
    fontSize: 16,
    fontWeight: "500",
  },

  // radius styles
  bottomBorderRadius: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  // active item styles
  activeRow: {
    backgroundColor: "rgb(255, 153, 0)",
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
});
