import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    View, Text, StyleSheet, Button, FlatList,
    TouchableOpacity,Platform
} from 'react-native';
//import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';
import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        navigationOptions: {
            headerTitle:'Meal Categories',
       
        },
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
      
    },
  
    MealDetail: MealDetailScreen,
}, {
    //initialRouteName: 'MealDetail',
    //mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android'?Colors.primaryColor:''
        },
    
        headerTintColor: Platform.OS ==='android'?'white':Colors.primaryColor,
        headerTitle: 'A screen'
    },
});

// const Stack = createNativeStackNavigator();

// const MealsNavigator=() =>{
//   return (
 
//     <Stack.Navigator>
//       <Stack.Screen name="Categories" component={CategoriesScreen} />
//       <Stack.Screen name="CategoryMeals" component={CategoryMealScreen} />
//       <Stack.Screen name="MealDetail" component={MealDetailScreen} />
//       {/* <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
   
//   );
// }

// const MealsFavTabNavigator = createBottomTabNavigator({
//     //Meals: MealsNavigator,
//     //Favorites: FavoritesScreen,

// });

// const TabBarComponent = (props) => <BottomTabBar {...props} />;

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: MealsNavigator,
//     Favorites: FavoritesScreen, 
//   },
//   {
//     tabBarComponent: (props) => (
//       <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
//     ),
//   }
// );





export default createAppContainer(MealsNavigator);