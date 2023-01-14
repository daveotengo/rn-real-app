import React,{useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import Colors from '../constants/Colors';
import FilterSwitch from '../components/FilterSwitch';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals'

import IoniconsHeaderButton from '../components/HeaderButton';
//import {HeaderButton,Item} from 'react-navigation-header-buttons';
import {
    HeaderButtons,
    //HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';
const FiltersScreen = props => {
    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);    
    const [isVegetarian, setIsVegetarian] = useState(false);
    const dispatch = useDispatch();
    const saveFilters = useCallback(() =>{
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters));
        console.log(appliedFilters);
        //alert(appliedFilters) ;
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian,dispatch]);

    useEffect(() => {
            navigation.setParams({save: saveFilters})
        
    }, [saveFilters])

    useEffect(() => {
        props.navigation.setOptions({
            title: "Filter Screen**",
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
    
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    
            headerRight: () => (<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton} >
                <Item title="save" iconName="ios-save" onPress={() => {
                    if(props.route.params!=undefined){
                        props.route.params.save()
                    }
                    //console.log(props.params('save'));
                    //console.log(props.route.params.save)
                    //props.route.params.save()
                    }} />
    
                {/* <ReusableItem onPress={() => alert('Edit')} /> */}
            </HeaderButtons>)
    
        });
    }, [])
   

    return(
        // /style={styles.screen}
        <View  >
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label="Gluten Free" state={isGlutenFree} onChange={newValue=> setIsGlutenFree(newValue)}  />
            <FilterSwitch label="Lactose Free" state={isLactoseFree} onChange={newValue=> setIsLactoseFree(newValue)}  />
            <FilterSwitch label="Vegan" state={isVegan} onChange={newValue=> setIsVegan(newValue)}  />
            <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={newValue=> setIsVegetarian(newValue)}  />

        </View>
    );
}

const styles = StyleSheet.create({
    // screen:{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    title:{
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },

    
});

export default FiltersScreen;