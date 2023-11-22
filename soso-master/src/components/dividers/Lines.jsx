import { useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export const VerticalLine = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        height: "100%",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: theme["color-basic-500"],
      }}
    />
  );
};

export const HorizontalLine = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: theme["color-basic-500"],
      }}
    />
  );
};
