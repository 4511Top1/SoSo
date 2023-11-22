import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
  topNav: {
    zIndex: 1,
  },

  scroll: {
    zIndex: -1,
    overflow: "visible",
  },

  subHeader: {
    color: "color-primary-focus-border",
  },

  subHeaderGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  subHeaderTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subHeaderButton: {
    flexDirection: "row",
    gap: 5,
  },

  friendListContainer: {
    gap: 22,
    flexDirection: "column",
  },

  friendList: {
    gap: 10,
  },

  friendListTab: {
    gap: 10,
    paddingBottom: 10,
    overflow: "visible",
  },

  tab: {
    overflow: "visible",
    justifyContent: "flex-start",
  },

  tabContainer: {
    marginTop: 5,
    marginBottom: "80%",
  },

  tabView: {
    columnGap: 10,
  },

  tabHeader: {
    fontSize: 16,
    textAlign: "left",
  },
});

export default styles;
