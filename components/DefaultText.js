import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const DefaultText = props => {
    return<Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontStyle: 'bold'
        //fontFamily: 'open-sans-bold'
    }
});

export default DefaultText;