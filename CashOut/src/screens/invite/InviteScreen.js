import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BaseView from '../../components/BaseView';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';

const windowWidth = Dimensions.get('window').width;

class InviteScreen extends Component {
  render() {
    return (
      <BaseView>
        <IndicatorViewPager
          style={{ flex: 1, flexDirection: 'column-reverse' }}
          indicator={this.renderTitleIndicator()}
        >


          <View style={{ backgroundColor: 'white' }}>
            <Text>page one</Text>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <Text>page two</Text>
          </View>
        </IndicatorViewPager>
      </BaseView>
    );
  }

  renderTitleIndicator() {
    return <PagerTitleIndicator
      titles={['INVITE FRIENDS', 'MY REFERRALS']}
      itemStyle={{
        width: windowWidth / 2,
        backgroundColor: 'lightcyan',
      }}
      selectedItemStyle={{ width: windowWidth / 2, backgroundColor: 'lightcyan' }}
      itemTextStyle={{ fontSize: 12, fontWeight: '600', color: '#484848' }}
      selectedItemTextStyle={{ fontSize: 12, fontWeight: '600' }}

    />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default InviteScreen;
