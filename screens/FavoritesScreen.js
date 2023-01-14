import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MealList from '../components/MealList';
//import {MEALS} from '../data/dummy-data'
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
    console.log("favorites")
    console.log(props);

    const favMeals = useSelector(state=>state.meals.favoriteMeals);
    console.log("print fav");
    console.log(favMeals)
    //const favMeals= MEALS.filter(meal=> meal.id === 'm1' || meal.id=== 'm2')
    if(favMeals.length==0||!favMeals){

    return(
        <View style={styles.content}> 
        <Text>No Favorite Meal found. Start writing some.</Text>
        </View>
    );
    }

    return(
        <MealList dataDisplayedMeals={favMeals} navigation={props.navigation} />  
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default FavoritesScreen;