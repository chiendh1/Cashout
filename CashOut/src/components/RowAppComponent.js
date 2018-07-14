import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CoinView from './CoinView';
import iconApp from '../assets/ic_app.png';
import { PrimaryColor } from '../values/Colors';

class RowAppComponent extends React.PureComponent {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                width: '100%',
                padding: 10,
                backgroundColor: 'white',
                borderBottomColor: '#8e8e8e',
                borderBottomWidth: 0.5,
                alignItems: 'center'
            }}>
                <Image source={iconApp} style={{ width: 40, height: 40 }} />
                <View style={{ marginHorizontal: 10, flex: 1, }}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>{this.props.item.appName}</Text>
                    <Text style={{ color: '#8e8e8e', fontSize: 12 }}>{this.props.item.description}</Text>
                </View>

                <CoinView style={{ width: 67 }} coin={this.props.item.coin} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default RowAppComponent;
