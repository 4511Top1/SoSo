import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
  modalView: {
    flex: 1,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },

  container: {
    // flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "blue",
  },
  iconsContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    // marginRight: 10,
    // justifyContent: "space-between",
    // width: 60,
    // alignItems: "center",
    marginTop: 5,
    gap: 15,
  },
  logoContainer: {
    flexDirection: "coloum",
    justifyContent: "space-between",
    alignItems: "left",
  },
  logo: {
    width: 108,
    height: 50,
  },
  quickMatch: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    justifyContent: "center",
  },
  twoButton: {
    // padding: 5,
    overflow: "visible",
    flexDirection: "row",
    gap: 20,
    flexWrap: true,
  },
  matchButton: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: 165,
    height: 80,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#4D4352", // Box shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabContainer: {
    // height: 64,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    marginTop: 10,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 300,
    // textAlign: "left",
  },
  //cards
  octTypo: {
    fontWeight: "600",
    letterSpacing: 0,
  },
  text: {
    textAlign: "center",
    lineHeight: 41,
  },
  date: {
    backgroundColor: "#4d4352",
    width: 70,
    paddingHorizontal: 10,
    height: 113,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  center2FlexBox: {
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  dateSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  pressable: {
    width: 200,
    height: 40,
    backgroundColor: "#775987",
    // backgroundColor: "#4d4352",
    justifyContent: "center",
    borderRadius: 15,
  },
  options: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    left: 77,
    height: 113,
    top: 0,
    position: "absolute",
  },
  subject: {
    // width: 1,
    height: 62,
    paddingVertical: 10,
  },
  info: {
    width: 275,
    height: 113,
  },
  chevron: {
    marginLeft: 50,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  card: {
    // flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    height: 113,
    borderRadius: 15,
    // alignSelf: "stretch",
    marginBottom: 20,
    elevation: 10,

    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(77, 67, 82, 0.2)",
    backgroundColor: "#fff",
  },

  progressBar: {
    flexDirection: "row", // Align child views in a row
    height: 40, // Set the height of the progress bar
    width: 200,
    backgroundColor: "#D6D6D6", // Light grey color for the unfilled part of the progress bar
    borderRadius: 15,
    overflow: "hidden", // Ensur
  },
  filledProgressBar: {
    backgroundColor: "#775987", // Purple color for the filled part
    justifyContent: "center", // Center the text vertically
  },
  progressText: {
    color: "white", // White color for the progress text
    marginLeft: 10, // Spacing from the left edge of the filled progress bar
  },
  goalText: {
    color: "#775987", // Purple color to match the filled part
    alignSelf: "center", // Center the text vertically
    marginLeft: "auto", // Push the goal text to the end of the progress bar
    marginRight: 10, // Spacing from the right edge of the progress bar
  },
  qrCode: {
    height: 250,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginTop: 10,
    alignItems: "center",
  },
  ticketButton: {
    width: 200,
    paddingVertical: 10,
  },
});

export default styles;
