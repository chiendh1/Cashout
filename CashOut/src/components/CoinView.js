import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgCoin from '../assets/ic_coin.png';

class CoinView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> 40 </Text>
                <Image
                    source={imgCoin}
                    style={styles.imageStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000004d',
        borderRadius: 19,
        paddingRight: 1,
        paddingLeft: 5,
        paddingVertical: 1,
        marginHorizontal: 10,
    },
    textStyle: {
        fontWeight: '600',
    },
    imageStyle: {
        width: 19, height: 19
    }
});

export default CoinView;
