import { createAppContainer, createDrawerNavigator} from 'react-navigation';
import HomeScreen from '../../screens/Home';
import BrokersScreen from '../../screens/Brokers';
import SideMenu from '../SideMenu';
import PropertiesScreen from '../../screens/Properties';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Brokers: {screen: BrokersScreen},
// });

// const AppContainer = createAppContainer(MainNavigator);

// export default AppContainer;

const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen, },
  Brokers: {screen: BrokersScreen},
  Properties: {screen: PropertiesScreen}
},{
  contentComponent: SideMenu
});

export default createAppContainer(MyDrawerNavigator);