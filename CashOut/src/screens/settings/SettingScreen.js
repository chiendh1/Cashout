import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseView from '../../components/BaseView';


class SettingScreen extends Component {
  render() {
    return (
      <BaseView>
        <View style={styles.container}>
          <Text> This is settings screen! </Text>
        </View>

      </BaseView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default SettingScreen;
