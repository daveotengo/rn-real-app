import { createDrawerNavigator } from '@react-navigation/drawer';
//import FavoritesScreen from '../screens/FavoritesScreen';
//import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealsBottomNavigatorBar from '../navigation/MealsBottomNavigtorBar'
import CategoriesScreen  from '../screens/CategoriesScreen';
import FiltersScreen  from '../screens/FiltersScreen';


//import MyStack from './MelsNavigator'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>


{/* <Drawer.Screen name="MyStack" component={MyStack} /> */}

      <Drawer.Screen name="MealFav" component={MealsBottomNavigatorBar} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
   </NavigationContainer>
  );
}

export default MyDrawer;