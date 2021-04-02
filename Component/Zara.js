import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Frame from '../Image/Frame.png' ;
import back from '../Image/back.png' ;

class Zara extends React.Component {
  render() {
    return (
            <View style={styles.container}> 
          <View style={styles.main}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>           
<Image source ={back} style={styles.bck}/>
</TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 20 , marginRight:160}}>Chandigarh</Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={Frame} style={styles.nav} />
          </TouchableOpacity>
        </View>
              <View>
      <View style={{borderBottomWidth:0.5 , padding:10}}>
        <Image
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg',
          }}
          style={styles.first}
          resizeMode="contain"
          resizeMethod="auto"
        /> 
        </View>

        <View style={{padding:10 , marginTop:20  ,alignContent:'flex-start' , marginLeft:10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
          //   marginLeft:10 ,
          }}>
          Up to 70% Sale
        </Text>
        <Text style={{color: 'black', fontSize: 14 }}>
          ZARA-5 Jan-21 Jan 2021{' '}
        </Text>
        <Text style={{marginTop:20 }}>
           This is dummy text . This can be abc hfy hhhy kjdsjdcjk shdhckj kdjckjejkd jdhjhjd dsjcdscj jdshcjkdh        
        </Text>
      </View>
      </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({first: {
          height: 220,
          width: 320,
         
          borderRadius: 15,
          alignSelf: 'center',
        },
        main: {
          marginTop: 10,
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },});
export default Zara;
