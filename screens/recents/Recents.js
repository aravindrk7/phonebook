import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'

const Recents = ({ logs }) => {
    console.log(logs);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>In Progress...</Text>
        </View>
    )
}

export default Recents;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft-Semibold',
    }
})
