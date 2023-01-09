
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import MyStack from './MelsNavigator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

import MealsNavigator from '../navigation/MealsNavigator'

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
  return (
    //   <NavigationContainer>
    <Tab.Navigator>
    
 <Tab.Screen name="Meals" component={MyStack}  options={{
          tabBarLabel: 'Meals-',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}  

        /> 

      <Tab.Screen name="Favorites" component={FavoritesScreen}  options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={Colors.accentColor} size={size} />
          ),
          activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'blue',
            },
            tabBarColor:Colors.accentColor
        }} 
         />
    

{/* <Tab.Screen name="MealDetail" component={MealDetailScreen}  options={{
          tabBarLabel: 'MealDetailScreen',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="knife" color={color} size={size} />
          ),
        }}  

        />  */}
        

    </Tab.Navigator>
   
  );
}

export default MyTabs;