import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Speedometer from 'react-native-speedometer-chart';

const HomePageAnimationComponent = props => {
    let max = 3000;
    let anlik = 2000;
    let yüzde = anlik/max*100;
    const [maxVal, onChangeMaxVal] = React.useState();
    const [anlikVal, onChangeAnlikVal] = React.useState();
    const [yuzde, onChangeYuzde] = React.useState(anlikVal/maxVal*100);
    
    return (

        <View style={styles.View}>
            <Speedometer 
                value={anlik/max*100} 
                totalValue={100} 
                showText={true} 
                text ={yüzde.toFixed(2) + ' %'}
                
                />
            <Text style={styles.TextTop}>Bu gün içmeniz gereken su miktarı {anlik} ml</Text>
        </View>
    );
};

export default HomePageAnimationComponent;


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    View1 :{
        alignItems:'center',
        justifyContent : 'center',
        marginTop: windowHeight /15,
        marginBottom: windowHeight /15,        
    },
    View: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
        backgroundColor: 'turquoise',
    },
    TextTop: {
        fontSize: 25,
        marginTop: 50,
        textAlign: 'center',
    },
});








