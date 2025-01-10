import { View, StyleSheet, FlatList } from "react-native";
import { Heading } from "../ui/heading";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "../ui/select";
import { ChevronDownIcon } from "../ui/icon";
import { useSelector } from "react-redux";
import { leaderboardFilterSelector } from "@src/selectors/leaderboardSelector";
import { useDispatch } from "react-redux";
import {
  LeaderboardFilters,
  LeaderboardFilterTypes,
} from "@src/types/leaderboard";
import { updateTableFilter } from "@src/actions/leaderboardActions";

export default function TableFilter() {
  const filter = useSelector(leaderboardFilterSelector);
  const dispatch = useDispatch();

  const handleFilterChange = (value: LeaderboardFilterTypes) => {
    dispatch(updateTableFilter(value));
  };

  return (
    <View style={styles.container}>
      <Heading>Sort:</Heading>

      <Select
        style={{ flex: 1 }}
        selectedValue={filter}
        onValueChange={(value) =>
          handleFilterChange(value as LeaderboardFilterTypes)
        }
      >
        <SelectTrigger variant="outline" size="md">
          <SelectInput
            placeholder="Select a filter"
            value={filter}
            style={{
              flex: 1,
            }}
          />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            <FlatList
              data={Object.values(LeaderboardFilters).map((value) => value)}
              style={{ width: "100%" }}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <SelectItem label={item} value={item} />
              )}
            />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
