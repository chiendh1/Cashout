import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import { PrimaryColor } from '../values/Colors';

const BaseView = props => (
    <SafeAreaView style={[styles.container, props.style]}>
        <Header/>
        {props.children}
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PrimaryColor
    }
});

export default BaseView;
