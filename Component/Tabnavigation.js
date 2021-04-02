import React from 'react';
import {
  StyleSheet,
  View ,
  Image ,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' ;
import Notifications from '../Component/Notifications' ;
import Profile from '../Component/Profile' ;
import Second from '../Component/Second' ;
import Home from '../Component/Home' ;
import one from '../Image/one.png' ;
import two from '../Image/two.png' ;
import three from '../Image/three.png'  ;
import bell2 from '../Image/bell2.png' ;
import home2 from '../Image/home2.png' ;
import four from '../Image/four.png' ; 
import search2 from '../Image/search2.png' ;
import profile2 from '../Image/profile2.png' ;
//import Onboard from '..//Component/Onboard' ;

const TabNavigation =({navigation,routes})=>
{
  const Tab=createBottomTabNavigator() 
  return(
            <Tab.Navigator tabBarOptions={{showLabel:false}} >
 {/* <Tab.Screen component={Onboard} name='Home' /> */}
 <Tab.Screen component ={Home} name='abc'  options={{tabBarIcon:({focused})=><Image source={focused ? home2:one} resizeMode="contain"/>}}/>
 <Tab.Screen component ={Second} name ='Second' options={{tabBarIcon:({focused})=><Image source={focused ? two:search2} resizeMode="contain"/>}}/> 
<Tab.Screen  component={Notifications} name='Notification'  options={{tabBarIcon:({focused})=><Image source={focused ? bell2:three} resizeMode="contain"/>}}/> 
<Tab.Screen component ={Profile} name='Profile' options={{tabBarIcon:({focused})=><Image source={focused ? profile2:four} resizeMode="contain"/>}}/> 



            </Tab.Navigator>
  )        
}
export default TabNavigation ;