
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FavoritesScreen from '../screens/FavoritesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen  from '../screens/CategoriesScreen';

const Tab = createMaterialTopTabNavigator();
import { NavigationContainer } from '@react-navigation/native';

function MyTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FavoritesScreen} />
      <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Tab.Navigator>
    
  );
}



  export default MyTabs;