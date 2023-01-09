import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TouchableNativeFeedback, Platform } from 'react-native';
import DefaultText from '../components/DefaultText';
const MealItem = props => {

    let TouchCmp = TouchableOpacity;
    if (Platform.Os === 'android' && Platform.Version >= 21) {
        TouchCmp = TouchableNativeFeedback;
    }

    return (
        // <View style={styles.gridItem} >
        // <TouchCmp onPress={props.onSelect} style={{flex:1}} >
        //     <View style={{...styles.container,...{backgroundColor: props.color}}} >
        //         <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        //     </View>
        // </TouchCmp>
        // </View>
        <View style={styles.mealItem} >
        <TouchableOpacity onPress={props.onSelectMeal} >
            <View >
                <View style={{...styles.mealRow,...styles.mealHeader}} >
                <ImageBackground source={{uri: props.image}} style={styles.bgImage} >
                    <View style={styles.titleContainer}> 
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View> 
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}} >
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    mealItem:{
        margin: 10,
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },

    mealRow:{
        flexDirection: 'row',
    },
    
    mealHeader:{
        height:'85%',
    },

    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }, 

    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title:{
        //fontFamily: 'open-sans-bold',
        fontSize:20,
    color:'white',
 
    textAlign: 'center'

    },

    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12, 
    }

    

});

export default MealItem;