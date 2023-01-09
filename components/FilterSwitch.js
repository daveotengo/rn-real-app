import React from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import Colors from '../constants/Colors'

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer} >
        <Text>{props.label}</Text>
        <Switch 
        //thumbColor={Colors.primaryColor}
        trackColor={{true:  Colors.primaryColor}}
        value={props.state} 
        onValueChange={props.onChange}
         />
    </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterContainer:{
        // padding: 10,
        paddingLeft: 20,
        paddingRight: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        marginVertical: 10
    }
});

export default FilterSwitch;