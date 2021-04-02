import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
// import bag from '../Image/bag';
// import calnder from '../Image/calnder';
// import bell from '../Image/bell';
// import glass from '../Image/glass';
// import entertainment from '../Image/entertainment';

class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 0.5,
            alignItems: 'center',
            padding: 10,
            marginTop: 15,
          }}>
          <Text style={{fontSize: 21}}>Notifications</Text>
        </View>
        <View
          style={{flexDirection: 'row', borderBottomWidth: 0.5, marginTop: 20}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text_2}>Please register</Text>
            <Text style={{marginTop: 20}}> To get notified </Text>
          </View>
          <View style={{paddingVertical: 10, paddingHorizontal: 90}}>
            <Image source={require('../Image/bell.png')} />
          </View>
        </View>
        <View style={styles.view_3}>
          <View style={{flexDirection: 'row', marginTop: 80, padding: 10}}>
            <Image
              source={require('../Image/bag.png')}
              style={{marginRight: 35}}
            />
            <Text>New offers & sales from brands</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              source={require('../Image/calnder.png')}
              style={{marginRight: 35}}
            />
            <Text> Upcoming events from malls</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              source={require('../Image/glass.png')}
              style={{marginRight: 35}}
            />
            <Text>Hot deals from restaurants & cafes</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              source={require('../Image/entertainment.png')}
              style={{marginRight: 35}}
            />
            <Text>Discounts for entertainments</Text>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 50,
              width: 80,
              marginLeft: 120,
              backgroundColor: 'green',
              borderRadius: 200,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text_2: {
    fontSize: 24,
    marginTop: 10,
  },
});
export default Notifications;
