import React from 'react';
import {View,Text,StyleSheet, Button,Platform,FlatList} from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    console.log("print props+++")
    console.log(props)
    const catId  = props.route.params.categoryId;
    //console.log(catId2)

    //const catId  = props.navigation.getParam('categoryId');

    const selectedCategory= CATEGORIES.find(cat=>cat.id==catId);
    
    props.navigation.setOptions({
        title: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS ==='android'?Colors.primaryColor:''
        },
    
        headerTintColor: Platform.OS ==='android'?'white':Colors.primaryColor
      });

   

    const dataDisplayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
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
    }
});

export default CategoryMealsScreen;