import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';
import {useSelector,useDispatch} from 'react-redux';


const MealList = props => {
    const favoriteMeals = useSelector(state=>state.meals.favoriteMeals)

    const renderMealItem = itemData => {

        const isFavorite = favoriteMeals.some( meal => meal.id === itemData.item.id );

        return (
            // <View >
            // <Text>{ItemData.item.title}</Text>
            // </View>
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    console.log("printing")
                    console.log(props)
                    props.navigation.navigate({
                        name: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }

                    });
                }
                }
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.screen} >
            {/* <Text>CategoryMealsScreen</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go to Meals Detail!" onPress={()=>{
            props.navigation.navigate({routeName: 'MealDetail'});
        }} />

    <Button title="Go Back" onPress={()=>{
            props.navigation.goBack();
        }} /> */}

            <FlatList data={props.dataDisplayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;