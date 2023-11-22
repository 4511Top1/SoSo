import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
  userCard: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "color-primary-focus-border",
    alignItems: "center",
    gap: 10,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
  },
  userCardContainer: {
    flexDirection: "column",
    flex: 1,
  },
  menuGrid: {
    flexWrap: true,
    flexDirection: "row",
    gap: 20,
  },
  topNav: {
    marginLeft: 10,
  },
  menuCard: {
    width: 165,
    height: 80,
    justifyContent: "center",
    gap: 3,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
  },
});

export default styles;
