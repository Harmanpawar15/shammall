import React, { useState } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
//import TabNavigation from './Component/Tabnavigation' 
import Stacknav from './Component/Stacknav' 
//import Notifications from './Component/Notifications' ;
//import Profile from "./Component/Profile";
// import Onboard from './Component/Onboard' 
//import Home from './Component/Home'

const App = () => {
//   const [showOnboard, setShowOnboard] = useState(true)
//   const handleOnboardFinish = () => {
//     setShowOnboard(false);
//   }
  return( 
    <NavigationContainer>
      < Stacknav />
      {/* <TabNavigation /> */}
    </NavigationContainer>
//   <>
//   {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
//   {!showOnboard && <Home />}
//   </>
//  <View><Profile /></View>

);
 };
export default App ;