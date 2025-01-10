import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import { LeaderboardItem } from "@src/types/leaderboard";
import { Heading } from "../../ui/heading";
import TRow from "./TRow";
import TCol from "./TCol";
import DataRow from "./DataRow";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, Icon } from "@src/components/ui/icon";
import { headerSortSelector } from "@src/selectors/leaderboardSelector";
import { useDispatch, useSelector } from "react-redux";
import { updateHeaderSort } from "@src/actions/leaderboardActions";

export default function DataTable({
  data: tableData = [],
  activeItem,
}: {
  data: LeaderboardItem[];
  activeItem?: LeaderboardItem | null;
}) {
  const headerSort = useSelector(headerSortSelector);
  const dispatch = useDispatch();

  const handleUpdateNameSort = () => {
    // if still the same column, toggle order
    if (headerSort.col === "name") {
      dispatch(
        updateHeaderSort("name", headerSort.order === "asc" ? "desc" : "asc")
      );
      return;
    } else {
      dispatch(updateHeaderSort("name", "asc"));
    }
  };

  const handleUpdateRankSort = () => {
    // if still the same column, toggle order
    if (headerSort.col === "rank") {
      dispatch(
        updateHeaderSort("rank", headerSort.order === "asc" ? "desc" : "asc")
      );
      return;
    } else {
      dispatch(updateHeaderSort("rank", "asc"));
    }
  };

  return (
    <View style={styles.table}>
      <TRow style={[styles.topBorderRadius]}>
        <TCol style={styles.usernameCol}>
          <TouchableOpacity
            onPress={handleUpdateNameSort}
            style={{ width: "100%" }}
          >
            <View style={styles.headerButton}>
              <Heading>Name</Heading>
              {headerSort.col === "name" && headerSort.order === "asc" && (
                <Icon as={ChevronDownIcon} size="lg" />
              )}
              {headerSort.col === "name" && headerSort.order === "desc" && (
                <Icon as={ChevronUpIcon} size="lg" />
              )}
            </View>
          </TouchableOpacity>
        </TCol>
        <TCol style={styles.rankCol}>
          <TouchableOpacity
            onPress={handleUpdateRankSort}
            style={{ width: "100%" }}
          >
            <View style={styles.headerButton}>
              <Heading>Rank</Heading>
              {headerSort.col === "rank" && headerSort.order === "asc" && (
                <Icon as={ChevronDownIcon} size="lg" />
              )}
              {headerSort.col === "rank" && headerSort.order === "desc" && (
                <Icon as={ChevronUpIcon} size="lg" />
              )}
            </View>
          </TouchableOpacity>
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
  // header button
  headerButton: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },

  // radius styles
  topBorderRadius: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
