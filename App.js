import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
//import {AppLoading} from 'expo';
import AppLoading from 'expo-app-loading'
import React, {useState,useEffect,useCallback} from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import MyTab from './navigation/MealsBottomNavigtorBar'
import MyStack from './navigation/MelsNavigator';
import MyTopTab from './navigation/MealsTopTab';
import MyDrawer from './navigation/MealsDrawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
//import * as SplashScreen from 'expo-splash-screen';
//import Entypo from '@expo/vector-icons/Entypo';

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();
enableScreens(); 

const fetchFonts = props =>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  // if(!fontLoaded){
  //   return(<AppLoading 
  //       startAsync = {fetchFonts} 
  //       onFinish = {()=>setFontLoaded(true)}
      
  //      />)

    
  // }
  
  //else{
    // useEffect(() => {
    //   async function prepare() {
    //     try {
    //       // Pre-load fonts, make any API calls you need to do here
    //       //await fetchFonts();
    //       // Artificially delay for two seconds to simulate a slow loading
    //       // experience. Please remove this if you copy and paste the code!
    //       await new Promise(resolve => setTimeout(resolve, 2000));
    //     } catch (e) {
    //       console.warn(e);
    //     } finally {
    //       // Tell the application to render
    //       setFontLoaded(true);
    //     }
    //   }
  
    //   prepare();
    // }, []);

    // if (!fontLoaded) {
    //   return null;
    // }
  
    // const onLayoutRootView = useCallback(async () => {
    //   if (fontLoaded) {
    //     // This tells the splash screen to hide immediately! If we call this after
    //     // `setFontLoaded`, then we may see a blank screen while the app is
    //     // loading its initial state and rendering its first pixels. So instead,
    //     // we hide the splash screen once we know the root view has already
    //     // performed layout.
    //     await SplashScreen.hideAsync();
    //   }
    // }, [fontLoaded]);

   return(
  // <View style={styles.container} onLayoutRootView={onLayoutRootView}>
  // {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //  <MyTab />
    <MyDrawer/>
    // <MyTab />
     )
//</View>)
  
  
 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
