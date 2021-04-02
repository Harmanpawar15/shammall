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
class Profile extends React.Component {
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
          <Text style={{fontSize: 16}}>Profile</Text>
        </View>
        <View
          style={{flexDirection: 'row', borderBottomWidth: 0.5, marginTop: 20}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text_2}>Please register</Text>
            <Text style={{marginTop: 2, marginLeft: 12}}>
              {' '}
              To get Best use of this App
            </Text>
          </View>
          <View style={{paddingVertical: 1, paddingHorizontal: 80}}>
            <Image source={require('../Image/profile.png')} />
          </View>
        </View>
        <View>
          <View style={{borderBottomWidth: 0.9, marginTop: 50}}></View>
          <View
            style={{
              borderBottomWidth: 0.9,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontWeight: 'bold'}}>App Features</Text>
            <Image source={require('../Image/arrow.png')} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.9,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontWeight: 'bold'}}>Leave Feedback</Text>
            <Image source={require('../Image/arrow.png')} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.9,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontWeight: 'bold'}}>Terms and conditions</Text>
            <Image source={require('../Image/arrow.png')} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.9,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontWeight: 'bold'}}>Privacy policy</Text>
            <Image source={require('../Image/arrow.png')} />
          </View>

          <TouchableOpacity
            style={{
              marginTop: 50,
              width: 320,
              marginLeft: 20,
              backgroundColor: 'orange',
              borderRadius: 200,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text> Get Started </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text_2: {
    marginLeft: 16,
    fontSize: 24,
    marginTop: 10,
  },
});

export default Profile;
