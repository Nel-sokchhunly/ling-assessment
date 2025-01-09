import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, InputField } from "@components/ui/input";
import { Button, ButtonText } from "../ui/button";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <Input variant="outline" size="lg" style={styles.input}>
        <InputField
          placeholder="Search"
          value={inputValue}
          onChange={(event) => setInputValue(event.nativeEvent.text)}
        />
      </Input>
      <Button size="lg">
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
