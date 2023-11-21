import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  name: {
    textTransform: "capitalize",
  },
  avatarName: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatarContainer: {
    backgroundColor: "black",
    marginBottom: 22,
    borderRadius: 180 / 2,
  },
  avatar: {
    width: 180,
    height: 180,
    opacity: 0.6,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 26,
    paddingVertical: 10,
  },
  description: {
    marginTop: 10,
  },
  detailContainer: {
    gap: 22,
  },
  detail: {
    gap: 10,
  },
  centerIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
