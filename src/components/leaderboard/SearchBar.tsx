import { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Input, InputField } from "@components/ui/input";
import { Button, ButtonText } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { leaderboardHashMapSelector } from "@src/selectors/leaderboardSelector";
import {
  clearSearchedUser,
  updateSearchedUser,
} from "@src/actions/leaderboardActions";
import {
  Modal,
  ModalBackdrop,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "../ui/modal";
import { CloseIcon, Icon } from "../ui/icon";
import { Heading } from "../ui/heading";
import { Divider } from "../ui/divider";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [showUserNotFoundModal, setShowUserNotFoundModal] = useState(false);
  const leaderboardHashMap = useSelector(leaderboardHashMapSelector);

  const dispatch = useDispatch();

  const handleSearch = () => {
    // dismiss keyboard
    Keyboard.dismiss();

    // Search logic
    const searchName = inputValue.toLowerCase().trim();

    // if searchName is empty, return
    if (searchName === "") {
      dispatch(clearSearchedUser());
      return;
    }

    // Search in hashmap
    const searchResult = leaderboardHashMap[searchName];

    // if found, update the state
    if (searchResult) {
      dispatch(updateSearchedUser(searchResult));
    } else {
      dispatch(clearSearchedUser());
      setShowUserNotFoundModal(true);
    }
  };

  return (
    <>
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

      {/* User not found modal */}
      <Modal
        isOpen={showUserNotFoundModal}
        onClose={() => setShowUserNotFoundModal(false)}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg" className="text-typography-950">
              User not found
            </Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="lg"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalFooter
            style={{
              marginTop: 20,
            }}
          >
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowUserNotFoundModal(false);
              }}
            >
              <ButtonText>Close</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
