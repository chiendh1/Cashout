import { Navigation } from 'react-native-navigation';
import configureStore from './src/store/configureStore';
import InviteScreen from './src/screens/invite/InviteScreen';
import OfferScreen from './src/screens/offers/OfferScreen';
import RewardScreen from './src/screens/rewards/RewardScreen';
import SettingScreen from './src/screens/settings/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const store = configureStore();

Navigation.registerComponent(
  'BigCoin.InviteScreen', () => InviteScreen,
);

 

Navigation.registerComponent(
  'BigCoin.OfferScreen', () => OfferScreen,
);


Navigation.registerComponent(
  'BigCoin.RewardScreen', () => RewardScreen,
);


Navigation.registerComponent(
  'BigCoin.SettingScreen', () => SettingScreen,
);

Promise.all([
  Icon.getImageSource("ios-apps-outline", 30),
  Icon.getImageSource("ios-person-add-outline", 30),
  Icon.getImageSource("ios-card-outline", 30),
  Icon.getImageSource("ios-settings-outline", 30),
]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'BigCoin.OfferScreen',
        label: 'Offers',
        title: "Offers",
        icon: sources[0],
        navigatorStyle: {
          statusBarColor: 'lightcyan',
          
          navBarBackgroundColor: 'lightcyan',
          navBarTextColor: 'black',
          navBarNoBorder: true,
          navBarHidden: true
        }
      },
      {
        screen: 'BigCoin.InviteScreen',
        label: 'Invite',
        title: "Invite",
        icon: sources[1],
        navigatorStyle: {

          navBarBackgroundColor: 'lightcyan',
          navBarTextColor: 'black',
          navBarNoBorder: true,
          navBarHidden: true
        }
      },
      {
        screen: 'BigCoin.RewardScreen',
        label: 'Rewards',
        title: "Rewards",
        icon: sources[2],
        navigatorStyle: {

          navBarBackgroundColor: 'lightcyan',
          navBarTextColor: 'black',
          navBarNoBorder: true,
          navBarHidden: true
        }
      },
      {
        screen: 'BigCoin.SettingScreen',
        label: 'Settings',
        title: "Settings",
        icon: sources[3],
        navigatorStyle: {
          statusBarColor: 'lightcyan',
          navBarBackgroundColor: 'lightcyan',
          navBarTextColor: 'black',
          navBarNoBorder: true,
          navBarHidden: true
        }
      },
    ]
  });
});


