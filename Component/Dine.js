//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity ,
} from "react-native";

class Dine extends React.Component {
  state = {
     data : [
      {
        name: "Har",
        id: 1,
      },
      {
        name: "Entertainment",
        id: 2,
      },
      {
        name: "Dine",
        id: 3,
      },
      {
        nname: "Offers",
        id: 4,
      },
    ] ,
  };
  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {this.state.data.map((item, index) => (
        <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text styles={styles.txt}>{item.name}</Text>

      </TouchableOpacity>
        </View>
        

        
     )) } 
      </ScrollView>
    );
  }
        
}
const styles = StyleSheet.create({});
export default Dine;
