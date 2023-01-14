import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen  from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
import { createAppContainer } from "react-navigation";
import { NavigationContainer ,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import MyTopTab from './MealsTopTab';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Categories':
      return 'News feed';
    case 'CategoryMeals':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

function MyStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
    
    {/* <Stack.Screen name="MyTopTab" component={MyTopTab} /> */}

      <Stack.Screen name="Categories" component={CategoriesScreen}     
      options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
        })}


  initialRouteName="Categories"
      screenOptions={{
        headerTintColor: 'blue',
        headerStyle: { backgroundColor: Colors.primaryColor },
      }}
  /> 
      <Stack.Screen name="CategoryMeals" component={CategoryMealScreen}
      
      navigationOptions= {{
        headerTitle:'CategoryMeals**',

      }}

      
       
      // working options={{
      //     headerTransparent: true,
      //   }}
  />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>

 
  );
}

export default MyStack;