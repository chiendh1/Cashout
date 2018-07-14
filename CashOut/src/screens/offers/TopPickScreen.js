import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import data from '../../values/appData.json';
import RowAppComponent from '../../components/RowAppComponent';

class TopPickScreen extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <FlatList
                    data={data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({ item }) => (
        <RowAppComponent item={item} />
    );
}

export default TopPickScreen;
