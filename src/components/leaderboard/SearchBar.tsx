import { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Input, InputField } from "@components/ui/input";
import { Button, ButtonText } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { leaderboardHashMapSelector } from "@src/selectors/leaderboardSelector";
import { updateSearchedUser } from "@src/actions/leaderboardActions";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const leaderboardHashMap = useSelector(leaderboardHashMapSelector);

  const dispatch = useDispatch();

  const handleSearch = () => {
    // dismiss keyboard
    Keyboard.dismiss();

    // Search logic
    const searchName = inputValue.toLowerCase();

    // Search in hashmap
    const searchResult = leaderboardHashMap[searchName];

    // if found, update the state
    if (searchResult) {
      console.log("searchResult:", searchResult);
      dispatch(updateSearchedUser(searchResult));
      return;
    } else {
      // show toast or alert
      // TODO: show toast or alert
      console.log("User not found");
    }
  };

  return (
    <View style={styles.container}>
      <Input variant="outline" size="lg" style={styles.input}>
        <InputField
          placeholder="Search"
          value={inputValue}
          onChange={(event) => setInputValue(event.nativeEvent.text)}
        />
      </Input>
      <Button size="lg" onPress={handleSearch}>
        <ButtonText>Search</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flex: 1,
  },
});
