import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import {
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  Button,
  TopNavigation,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

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
