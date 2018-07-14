import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgCoin from '../assets/ic_coin.png';

class CoinView extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.textStyle}>{this.props.coin}</Text>
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
        backgroundColor: '#00000040',
        borderRadius: 19,
        paddingRight: 1,
        paddingLeft: 5,
        paddingVertical: 1,
        marginHorizontal: 10,
        height: 20
    },
    textStyle: {
        fontWeight: '600',
        flex: 1,
        paddingLeft: 3
    },
    imageStyle: {
        width: 19, height: 19, marginLeft: 5
    }
});

export default CoinView;
