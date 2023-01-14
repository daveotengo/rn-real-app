import React,{useEffect} from 'react';
import {View,Text,StyleSheet, Button,Platform,FlatList} from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {
    console.log("print props+++")
    console.log(props)
    const catId  = props.route.params.categoryId;

    const availableMeals = useSelector(state=>state.meals.filteredMeals);
    //console.log(catId2)

    //const catId  = props.navigation.getParam('categoryId');

    const selectedCategory= CATEGORIES.find(cat=>cat.id==catId);
    
  

   

    const dataDisplayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if(dataDisplayedMeals.length==0||!dataDisplayedMeals){

        return(
            <View style={styles.content}> 
                <DefaultText>No Meal found. May be check your filters.</DefaultText>
            </View>
        );
    }

  useEffect(() => {
    props.navigation.setOptions({
        title: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS ==='android'?Colors.primaryColor:''
        },
    
        headerTintColor: Platform.OS ==='android'?'white':Colors.primaryColor
      });
  }, [selectedCategory])
    return(
     <MealList dataDisplayedMeals={dataDisplayedMeals} navigation={props.navigation}/>
    );

    
}

CategoryMealsScreen.navigationOptions=(navigationData)=>{
    console.log("printing navigationData+++");
    console.log(navigationData);
    const catId=navigationData.navigation.getParam('categoryId');
    
    const selectedCategory= CATEGORIES.find(cat=>cat.id==catId)

    return{
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS ==='android'?Colors.primaryColor:''
        },
    
        headerTintColor: Platform.OS ==='android'?'white':Colors.primaryColor
    }

}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;