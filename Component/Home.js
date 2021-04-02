//import { StatusBar } from "expo-status-bar";
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Mall from './Mall';
import down from '../Image/down.png'
import Frame from '../Image/Frame.png';
//import Dine from './Dine' ;
// import Footer from "./component/Footer" ;
//import Footer from './Footer' ;

const data = [
  {
    title: 'abc',
    image: require('../Image/food.png'),
    bg: '#59b2ab',
  },

  {
    title: 'def',
    image: require('../Image/girl.png'),
    bg: '#59b2ab',
  },
  {
    title: 'ghi',
    image: require('../Image/food.png'),
    bg: '#59b2ab',
  },
  {
    title: 'jkl',
    image: require('../Image/girl.png'),
    bg: '#59b2ab',
  },
  {
    title: 'mno',
    image: require('../Image/food.png'),
    bg: '#59b2ab',
  },

  {
    title: 'abc',
    image: require('../Image/girl.png'),
    bg: '#59b2ab',
  },

  {
    title: 'def',
    image: require('../Image/food.png'),
    bg: '#59b2ab',
  },
  {
    title: 'ghi',
    image: require('../Image/girl.png'),
    bg: '#59b2ab',
  },
  {
    title: 'jkl',
    image: require('../Image/food.png'),
    bg: '#59b2ab',
  },
  {
    title: 'mno',
    image: require('../Image/girl.png'),
    bg: '#59b2ab',
  },
];
class Home extends React.Component {
  render() {
    // return(<Text>{"sdsdsdd"}</Text>)
    //   const HomerenderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Chandigarh</Text>
          <Image source ={down} /> 
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={Frame} style={styles.nav} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.view_one}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('zara')}>
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg',
                }}
                style={styles.first}
                resizeMode="contain"
                resizeMethod="auto"
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 90,
                }}>
                Up to 70% Sale
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginLeft: 90}}>
                ZARA-5 Jan-21 Jan 2021{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <Mall />
          <Mall  />
          <Mall  />
          <Mall  />
          <Mall  />
          <Mall  />
        </ScrollView>

        {/* //<Dine /> 
     // < Footer /> */}
      </View>
    );
    //     };
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: 'white',
  },
  main: {
    marginTop: 10,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  view_one: {},
  first: {
    height: 220,
    width: 320,
    borderRadius: 15,
    alignSelf: 'center',
  },
});
export default Home;
