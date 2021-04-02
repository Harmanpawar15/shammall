import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import f  from '../Image/f.png';
import Frame from '../Image/Frame.png';
class Second extends React.Component {
  state = {
    data: [
      {
        name: 'Malls',
        id: 1,
      },
      {
        name: 'Stores',
        id: 2,
      },
      {name: 'Dine', id: 3},
      {name: 'Entertainment', id: 4},
      {name: 'Offers', id: 5},
      {name: 'Events', id: 6},
    ],
    photos: [
      {
        title: ' abc',
        pic: require('../Image/wall1.jpg'),
      },

      {
        title: ' xyz',
        pic: require('../Image/wall1.jpg'),
      },
      {
        title: ' cde',
        pic: require('../Image/wall1.jpg'),
      },
    ],
    //     items:[
    //        {photo: require('../Image/girl.') }
    //     ] ,
  };
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Chandigarh</Text>
          <Image source={Frame} style={styles.nav} />
        </View>
        <View>
        
          <ScrollView
            style={{paddingBottom: 5}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {this.state.data.map((item, index) => (
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                  borderRadius: 30,
                  borderWidth: 1,
                  paddingHorizontal: 16,
                  height: 28,
                }}>
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
          <ScrollView>
            {this.state.photos.map((item, index) => (
        <View>
        
                <View style={styles.list} key={index}>
                    <Image source={item.pic} style={styles.img} />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginHorizontal: 16,
                        marginVertical: 10,
                      }}>
                      {item.title}
                    </Text>
                  </View>
        </View>
            ))}
          </ScrollView>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container:{flex:1} ,
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  main: {
    marginTop: 10,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginLeft: 10,
    marginTop: 10,
    width: 320,
    height: 162,
  },
});
export default Second;
