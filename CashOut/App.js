import { Navigation } from 'react-native-navigation';
import configureStore from './src/store/configureStore';
import InviteScreen from './src/screens/invite/InviteScreen';
import OfferScreen from './src/screens/offers/OfferScreen';
import RewardScreen from './src/screens/rewards/RewardScreen';
import SettingScreen from './src/screens/settings/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const store = configureStore();

Navigation.registerComponent(
  'CashOut.InviteScreen', () => InviteScreen,
);

Navigation.registerComponent(
  'CashOut.OfferScreen', () => OfferScreen,
);


Navigation.registerComponent(
  'CashOut.RewardScreen', () => RewardScreen,
);


Navigation.registerComponent(
  'CashOut.SettingScreen', () => SettingScreen,
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
        screen: 'CashOut.OfferScreen',
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
        screen: 'CashOut.InviteScreen',
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
        screen: 'CashOut.RewardScreen',
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
        screen: 'CashOut.SettingScreen',
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


