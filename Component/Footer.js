import * as React from 'react';
//import 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import Home from './Home' ;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function SettingsScreen() {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Settings!</Text>
            </View>
          );
        }
        
        const Tab = createBottomTabNavigator();
        
        // function MyTabs() {
        //   return (
        //     <Tab.Navigator>
        //       <Tab.Screen name="Home" component={Home} />
        //       <Tab.Screen name="Settings" component={SettingsScreen} />
        //     </Tab.Navigator>
        //   );
        // }
        
        // export default function Footer() {
        //   return (
        //     <NavigationContainer>
        //       <MyTabs />
        //     </NavigationContainer>
        //   );
        // }
         export default SettingsScreen;