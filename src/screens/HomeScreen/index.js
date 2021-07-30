import React,  {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomePageAnimationComponent from '../../components/HomePageAnimationComponent';

const HomeScreen = props => {

    return (

        <View style={styles.View}>
            <HomePageAnimationComponent></HomePageAnimationComponent>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: 'turquoise',
        paddingTop: 32,
        paddingHorizontal: 24,
        alignItems: 'center',

    },
});