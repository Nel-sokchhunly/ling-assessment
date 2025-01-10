import { LeaderboardItem } from "@src/types/leaderboard";
import TRow from "./TRow";
import TCol from "./TCol";
import { StyleSheet } from "react-native";

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
      <TCol style={[styles.usernameCol, isActive && styles.activeCol]}>
        {item.name}
      </TCol>
      <TCol style={[styles.rankCol, isActive && styles.activeCol]}>
        {item.rank}
      </TCol>
      <TCol style={[styles.bananaCol, isActive && styles.activeCol]}>
        {item.bananas}
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

  // radius styles
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
