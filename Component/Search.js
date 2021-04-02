import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          
        <View style={{flexDirection:'row' , justifyContent:'center' ,alignContent:'center' ,paddingVertical:10 ,justifyContent:'space-around'}}>      
        <View style={styles.view1}>
                  <Image source={require('../Image/smallsearch.png')}/>
                  <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Search"
                  placeholderTextColor = "#5D6167" />         
        </View>
        <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                  <Text style={{color:'red'}}>Cancel</Text>
                  </TouchableOpacity>
        </View>
        </View>  
        <View style={styles.view2} >
          <Image source={require('../Image/Illustration.png')} style={styles.img} />
          <Text style={styles.text1}>
            Type to search by name of malls , brands , restaurants or
            entertainments in Riyadh{' '}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
          container:{
                  
                   flex:1 ,
          } ,
text1:{

} ,
img:{
alignContent:'center' ,
justifyContent:'center'
} ,
view2:{
          textAlign:'center' ,
          flex:1 ,
flexDirection:'column' ,
// marginLeft:20 ,
justifyContent:'center' ,
alignItems:'center' ,
//  marginTop:150
} ,
view1:{
  flexDirection:'row' ,
  paddingHorizontal: 20 ,
  borderRadius:20 ,
  width:284 ,
  height:40 ,
  
  alignItems:'center' ,
  backgroundColor: '#F5F6F7', 
         
}



});

export default Search;
