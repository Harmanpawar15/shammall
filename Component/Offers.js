// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import Frame from './Image/Frame.png';
// import girl from './Image/girl.png';
// import jean from './Image/jean.png';
// import shoe1 from './Image/shoe1.png';
// import srch from './Image/srch.png';
// import abc from './Image/abc.png';

// class App extends React.Component {
//   state = {
//     data: [
//       {
//         name: 'Events',
//         id: 1,
//       },
//       {
//         name: 'Entertainment',
//         id: 2,
//       },
//       {
//         name: 'Dine',
//         id: 3,
//       },
//       {
//         name: 'Offers',
//         id: 4,
//       },
//     ],
//     photos: [
//       {pic: require('./Image/abc.png')},
//       {pic: require('./Image/shoe1.png')},
//       {pic: require('./Image/girl.png')},
//       {pic: require('./Image/jean.png')},
//       {pic: require('./Image/shoe1.png')},
//       {pic: require('./Image/jean.png')},
//     ],
//   }
  
//   render() {
//     return (
//       <View style={styles.kuchaur}>
//         <View style={styles.main}>
//           <Image source={srch} style={styles.nav} />
//           <Image source={Frame} style={styles.nav} />
//         </View>
//         <View>
//           <ScrollView
//             style={{paddingBottom: 5}}
//             showsHorizontalScrollIndicator={false}
//             horizontal={true}>
//             {this.state.data.map((item, index) => (
//               <TouchableOpacity  style={{ padding: 15 , marginTop: 20,
//                 marginLeft: 10,
//                 borderRadius: 30,
//                 borderWidth: 1,
//                 paddingHorizontal: 16,
//                 height: 28,}}>
           
//                 <Text style={styles.txt}>{item.name}</Text>
                
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         <ScrollView>
//           <View
//             style={{
//               flex: 1,
//               flexWrap: 'wrap',
//               flexGrow: 1,
//               flexDirection: 'row',
//             }}>
//             {this.state.photos.map((item, index) => {
//               return (
//                 <View style={styles.lst}>
//                   {/* <Image source={item.pic} style={styles.a} /> */}
//                   <Image source={item.pic} style={styles.a} />
//                 </View>
//               );
//             })}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   main: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   txt: {
//     fontSize: 15,
//     fontWeight: 'bold',

//     //  marginBottom:10
//   },
//   // btn: {
   
//   //   // alignItems:"center",
//   //   // justifyContent:"center" ,
    
//   // },
//   lst: {
//     paddingHorizontal: 2,
//     //  paddingVertical: 20,
//     flexDirection: 'row',
//     // marginLeft: 2,
//     marginBottom: 9,

//     justifyContent: 'space-between',
//   },
//   a: {
//     alignContent: 'center',
//     marginTop: 19,
//     marginLeft: 10,
//     borderRadius: 7,
//     borderWidth: 6,
//     paddingHorizontal: 8,
//   },
//   kuchaur: {
//     flex: 1,
//     justifyContent: 'center',
//     // paddingHorizontal: 10,
//   },
// });
// export default App;
