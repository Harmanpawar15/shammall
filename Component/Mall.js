//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

class Mall extends React.Component {
  state = {
   data: [
      {
        title: "abc",
        image: require( "../Image/food.png"),
        bg: "#59b2ab",
      },
      {
        title: "def",
        image: require( "../Image/girl.png") ,
        bg: "#59b2ab",
      },
      {
        title: "ghi",
        image: require( "../Image/food.png"),
        bg: "#59b2ab",
      },
      {
        title: "jkl",
        image: require( "../Image/girl.png"),
        bg: "#59b2ab",
      },
      // {
      //   title: "mno",
      //   image: require("../images/wall3.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/girl.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/food.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall1.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/food.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/girl.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall1.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall2.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall3.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/girl.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/food.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall1.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall2.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/wall3.jpg"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/food.png"),
      //   bg: "#59b2ab",
      // },
      // {
      //   title: "mno",
      //   image: require("../images/girl.png"),
      //   bg: "#59b2ab",
      // },
    ],
  };

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 10,
            marginLeft: 12,
          }}
        >
          {title}
        </Text>
        <View style={{flexDirection:'row' , justifyContent:'space-between' , padding:3}}>
          <Text style={{fontWeight:"Bold" , fontSize:20}}>Malls</Text>
          <Text style={{fontWeight:"Bold" , fontSize:14}}>See all</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {this.state.data.map((item, index) => (
            <View style={styles.container}>
              {/* {this.state.name.map((item, index) => ( */}
              <View style={styles.list} key={index}>


                <View key={index}>
                
                  <Image source={item.image} style={styles.img} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      marginHorizontal: 16,
                      marginVertical: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
              {/* ))} */}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    borderRadius:16,
    marginLeft: 20,
    // marginTop: 10,
    width: 192,
    height: 192,
  },
});
export default Mall;
