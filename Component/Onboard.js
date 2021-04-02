
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView ,SafeAreaView } from "react-native";

import last from '../Image/last.png' ;
import next from '../Image/next.png';

//import Onboard from './component/Onboard' ;
import AppIntroSlider from "react-native-app-intro-slider";

const data = [
  {
    title: "Special offers",
    text:
      "Stay aware of all the fresh discounts, sales, time-limited offers and hot deals in your city",
    image: require( "../Image/img1.png"),
    bg: "#59b2ab",
  },
  {
    title: "Have fun , save Time",
    text: "Discover best entertainment and shopping options next to you",
    image: require( "../Image/img2.png"),
    bg: "#febe29",
  },
  {
    title: "Save your parking spot",
    text:
      "Save info about location of your parking spot, find your car faster and easier",
    image: require( "../Image/img3.png"),
    bg: "#22bcb5",
  },
];

const Onboard = (props) => {
  const renderItem = ({ item }) => {    
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.heading}>{item.title}</Text>
        <Text style={styles.para}>{item.text}</Text>
      </View>
    );
  };
  const keyExtractor = (item) => item.title;
  // const showSkipButton = () => {
  //   return (
  //     <View>
  //       <Text>skip</Text>
  //     </View>
  //   );
  // };
  const renderSkipButton = () => {
    return <Text style={{ color: "#9CA0A5", fontSize: 20 }}>Skip</Text>;
  };
  const renderDoneButton = () => {
    return (

      <View>
        <Image source={last} style={styles.end} />
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View>
        <Text>Previous</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View>
        <Image source={next} style={styles.nav} />
      </View>
    );
  };
  const handleDone = () => {
    props.handleDone();
  }

  return (
            
    <View style={{ flex: 1 }}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // renderSkipButton={renderSkipButton}
        showSkipButton={true}
        renderSkipButton={renderSkipButton}
        dotStyle={{ backgroundColor: "#9CA0A5" }}
        activeDotStyle={{ backgroundColor: "#03A587" }}
        renderDoneButton={renderDoneButton}
        // renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        data={data}
        onDone={handleDone}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  img: {
    width: 375,
    height: 300,
    left: 0,
    top: 0,
    marginTop: -120,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginHorizontal: 60,
  },
  para: {
    fontSize: 14,
    color: "black",
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    textAlign: "center",
  },
});

export default Onboard;
