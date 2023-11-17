import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { ScreenView } from "../components/CustomView";
import { useTheme, Text, Input } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const Events = ({ navigation }) => {
  const theme = useTheme();
  const inputRef = useRef(null);
  const [value, setValue] = React.useState("");

  const handleFocus = () => {
    navigation.navigate("SearchEvents");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <ScreenView>
      <Text category="h2" status="primary">
        Events
      </Text>
      <Input
        placeholder="Search"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        accessoryLeft={
          <Iconify
            color={theme["color-basic-500"]}
            size={20}
            icon={"solar:minimalistic-magnifer-linear"}
          />
        }
        onFocus={handleFocus}
        ref={inputRef}
      />
      <Text category="h4">Discovery weekly</Text>
    </ScreenView>
  );
};
export default Events;

const styles = StyleSheet.create({
  search: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
