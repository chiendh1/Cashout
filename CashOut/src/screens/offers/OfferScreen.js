import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import BaseView from '../../components/BaseView';

const windowWidth = Dimensions.get('window').width;

class OfferScreen extends Component {

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
      titles={['TOP PICKS', 'DOWNLOAD & PLAY APPS']}
      itemStyle={{ width: windowWidth / 2, backgroundColor: 'lightcyan' }}
      selectedItemStyle={{ width: windowWidth / 2, backgroundColor: 'lightcyan' }}
      itemTextStyle={{ fontSize: 12, fontWeight: '600', color: '#484848' }}
      selectedItemTextStyle={{ fontSize: 12, fontWeight: '600' }}

    />;
  }
}

export default OfferScreen;
