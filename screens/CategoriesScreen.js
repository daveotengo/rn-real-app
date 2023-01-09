import React from 'react';
import {
    View, Text, StyleSheet, Button, FlatList,
    TouchableOpacity,Platform
} from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'




const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={()=> {
                console.log("printing props")
             console.log(props)
                 props.navigation.navigate({name: 'CategoryMeals', params:{
                categoryId: itemData.item.id
            }});
            
            
            }} />
        )
    }
    //console.log(CATEGORIES);
    return (
        <FlatList numColumns={2}
            renderItem={renderGridItem}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
        />
        // <View style={styles.screen} >
        //     <Text>CategoriesScreen</Text>
        //     <Button title="Go to Meals!" onPress={()=>{
        //         props.navigation.navigate({routeName: 'CategoryMeals'});
        //         //props.navigation.replace('CategoryMeals'); for login

        //     }} />
        // </View>

    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS ==='android'?Colors.primaryColor:''
    },

    headerTintColor: Platform.OS ==='android'?'white':Colors.primaryColor
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
});

export default CategoriesScreen;