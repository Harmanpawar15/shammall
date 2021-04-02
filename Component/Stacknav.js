import React,{useState,useEffect} from 'react';
// import {Button, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './Tabnavigation';
import Search from './Search' ;
import Zara from './Zara' ;
const Stack = createStackNavigator();

const Stacknav = ({navigation, routes}) => {
  return (
    <Stack.Navigator initialRouteName='Search'>
      <Stack.Screen 
       component={TabNavigation}
       name = "TabNavigation" options={{headerShown: false}}
      />
       
            <Stack.Screen
                component={Search}
                name="search" options={{headerShown:false}} />
                <Stack.Screen
                 component={Zara}
                 name="zara" options={{headerShown:false}}
                />

    </Stack.Navigator>
  );
};
export default Stacknav;
