import React, { Component } from 'react';
import CoinView from './CoinView';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.titleStyle}> CASHOUT </Text>
                    </View>
                    <View style={styles.rightButtonContainer}>
                        <Icon style={styles.notificationIconStyle} name="ios-notifications-outline" size={30} color='black' />
                        <CoinView/>
                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 38,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
    },
    notificationIconStyle: {
        position: 'relative'
    },
    rightButtonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        alignItems: 'center',
    }
});

export default Header;
