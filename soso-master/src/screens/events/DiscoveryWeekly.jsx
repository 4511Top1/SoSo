import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Text, Input, Card, Layout } from "@ui-kitten/components";
import LocationIcon from "../../assets/svg/locationIcon.svg";
import { Shadow } from "react-native-shadow-2";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@ui-kitten/components";
const { width } = Dimensions.get("window");

const LocationWithIcon = ({ location }) => {
  return (
    <View style={styles.locationContainer}>
      <LocationIcon width={24} height={24} style={styles.locationIcon} />
      <Text category="c1">{location}</Text>
    </View>
  );
};

const DiscoveryWeekly = ({ data }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <View style={styles.cardContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {data.map((item) => (
            // <Card style={styles.card} key={item.id}>
            //   <ImageBackground
            //     source={item.image}
            //     style={styles.imageBackground}
            //     imageStyle={styles.image}
            //   ></ImageBackground>
            //   <Text category="c1">{item.date}</Text>
            //   <Text category="h5">{item.title}</Text>
            //   <Text category="p1">{item.subtitle}</Text>
            //   <LocationWithIcon location={item.location} />
            //   <BookMarkIcon
            //     width={24}
            //     height={24}
            //     style={styles.bookmarkButton}
            //   />
            // </Card>
            // <View style={styles.shadowWrapper} >

            // <Shadow offset={[10, 20]} paintInside={true} distance={9}>
            <View style={styles.card}>
              {/* <Shadow offset={[0, 4]}> */}
              <Image
                source={item.image}
                style={styles.image}
                // imageStyle={styles.image}
              />

              <View style={styles.textContainer}>
                <Layout style={styles.timeLineContainer}>
                  <Text status="primary" style={{ marginBottom: 5 }}>
                    {item.date}
                  </Text>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"iconoir:bookmark"}
                    style={[
                      styles.bookmarkIcon,
                      isBookmarked ? styles.bookmarked : styles.notBookmarked,
                    ]}
                  />
                </Layout>
                <Text category="h5">{item.title}</Text>
                <Text category="p1">{item.subtitle}</Text>

                <LocationWithIcon location={item.location} />
              </View>
              {/* </Shadow> */}
            </View>
            // </Shadow>

            //  </View>
          ))}
        </ScrollView>
        {renderPagination()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: 320,
    marginTop: 20,
    width: width - 60,
    height: 370,
    // marginRight: 16,
    // paddingHorizontal: 8,
    marginHorizontal: 10,
    // flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderRadius: 15,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    overflow: "hidden",
    shadowColor: "#000",
    // borderColor: "#ccc",
  },
  bookmarkIcon: {
    paddingRight: 10,
  },
  timeLineContainer:{
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection: "row"
  },
  textContainer: {
    // marginTop: 10,
    padding: 10,

    gap: 5,
  },
  image: {
    width: "100%",
    height: 200,

    resizeMode: "cover",
    // width: 320,
    // height: 203,
    // alignSelf: "stretch",
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",

    height: 20,
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    margin: 4,
  },
  bookmarkButton: {
    position: "absolute",
    top: 320,
    right: 20,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  image: {},
});
export default DiscoveryWeekly;
