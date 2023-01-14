import React,{useEffect,useCallback} from 'react';
import { View, Text, StyleSheet, Button, Platform, ScrollView ,Image} from 'react-native';
//import { MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import DefaultText from '../components/DefaultText';
import {useSelector,useDispatch} from 'react-redux';

import IoniconsHeaderButton from '../components/HeaderButton';
//import {HeaderButton,Item} from 'react-navigation-header-buttons';
import {
    HeaderButtons,
    //HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';
//import { Text } from 'react-native-elements';
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props =>{
    return (
        <View style={styles.listItem} >
            <DefaultText >
                {props.children}
            </DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {
    //const mealId = props.navigation.getParam('mealId');
    const mealId = props.route.params.mealId;


    const availableMeals = useSelector(state=>state.meals.meals);
    
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const currentMealIsFavorite = useSelector(state=>state.meals.favoriteMeals.some( meal => meal.id === mealId ))

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(()=> {
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
       
    }, [toggleFavoriteHandler]);

    useEffect(() => {
       props.navigation.setParams({isFav: currentMealIsFavorite})
    }, [currentMealIsFavorite])


useEffect(() => {


    props.navigation.setOptions({
        title: selectedMeal.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },

        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

        headerRight: () => (<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton} >
            <Item title="search" iconName='ios-star'
            //{props.route.params.isFav===true? 'ios-star': 'ios-star-outline' } 
             onPress={
                //
                
                props.route.params.toggleFav
            }
                //toggleFavorite
                // ()=>{
                   
                //     console.log(props.route.params.isFav)}
                // }
                
                 />

            {/* <ReusableItem onPress={() => alert('Edit')} /> */}
        </HeaderButtons>)



    });
}, [selectedMeal])
   
    console.log("printing   console.log(selectedMeal.ingredients);")
    console.log(selectedMeal.ingredients);
    return (
      
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details} >
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient=>(
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step=>(
                <ListItem key={step}>{step}</ListItem>
            ))}
            {/* <View style={styles.screen} >
                <Text>{selectedMeal.title}</Text>
                <Button title="Go Back to Categories" onPress={() => {
                    props.navigation.popToTop();
                }} />
            </View> */}
        </ScrollView>
    );
}
// const IoniconsHeaderButton = (props) => (
//     // the `props` here come from <Item ... />
//     // you may access them and pass something else to `HeaderButton` if you like
//     <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
//   );
const ReusableItem = ({ onPress }) => <Item title="Favorite" onPress={onPress} />;

// const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;

// title="Favorite" onPress={()=>{
//     console.log("Mark as Favorite")
// }} >

// MealDetailScreen.navigationOptions = navigationData => {
//     console.log("printing navigationData");
//     console.log(navigationData);
//     const mealId = navigationData.navigation.getParam('mealId');
//     const selectedMeal = MEALS.find(meal => meal.id === mealId);
//     return {
//         headerTitle: selectedMeal.title,
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
//         },

//         headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
//         headerRight: () => (<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton} >
//             <Item title="search" iconName="ios-star" onPress={() => alert('search')} />

//             {/* <ReusableItem onPress={() => alert('Edit')} /> */}
//         </HeaderButtons>)

//         // headerRight: () => (
//         //     <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
//         //       <Item title="search" iconName="ios-search" onPress={() => alert('search')} />
//         //       <ReusableItem onPress={() => alert('Edit')} />
//         //       <OverflowMenu
//         //         style={{ marginHorizontal: 10 }}
//         //         OverflowIcon={({ color }) => <Ionicons name="ios-more" size={23} color={color} />}
//         //       >
//         //         <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
//         //         <ReusableHiddenItem onPress={() => alert('hidden2')} />
//         //       </OverflowMenu>
//         //     </HeaderButtons>
//         //   ),

//     }

// }

const styles = StyleSheet.create({
    
    image:{
        width: '100%',
        height: 200
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },

    mealRow: {
        flexDirection: 'row',
    },

    title:{
        fontStyle: 'bold',
        fontSize: 22,
        alignItems: 'center'
    },

    listItem:{
         marginVertical: 10,
         marginHorizontal: 20,
         borderColor: '#ccc',
         borderWidth: 1,
         padding: 10,
    }

});

export default MealDetailScreen;