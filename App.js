import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from './src/StartScreen'
import HomeScreen from './src/HomeScreen'
import StartCalendarScreen from './src/StartCalendarScreen'
import NewDayScreen from './src/NewDayScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Start: {screen: StartScreen},
  StartCalendar: {screen: StartCalendarScreen},
  NewDay: {screen: NewDayScreen},
}, {
  initialRouteName: 'Home',
  // headerStyle: { marginTop: 24 },
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

export default App;