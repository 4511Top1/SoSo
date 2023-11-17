import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScreenView } from "../components/CustomView";
import { useTheme, Text, Input } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const Chat = () => {
  const theme = useTheme();
  return (
    <ScreenView>
      <Text category="h2" status="primary">
        Messages
      </Text>

      <View style={styles.container}>
        <Input
          style={styles.input}
          accessoryLeft={
            <Iconify
              color={theme["color-basic-500"]}
              size={20}
              icon={"solar:minimalistic-magnifer-linear"}
            />
          }
          placeholder="Search for messages"
          // value={value}
          // onChangeText={(nextValue) => setValue(nextValue)}
        />
        <TouchableOpacity>
          <Iconify size={30} icon={"fluent:chat-add-20-regular"} />
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
