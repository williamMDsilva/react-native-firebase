import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from './src/StartScreen'
import HomeScreen from './src/HomeScreen'
import StartCalendarScreen from './src/StartCalendarScreen'
import NewDayScreen from './src/NewDayScreen'
import RadarSkils from './src/RadarScreen'
import ConfigAlarm from './src/ConfigAlarm'
import Login from './src/auth/Login'
import SignUp from './src/auth/SignUp'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Start: {screen: StartScreen},
  StartCalendar: {screen: StartCalendarScreen},
  NewDay: {screen: NewDayScreen},
  RadarSkils: {screen: RadarSkils},
  ConfigAlarm: {screen: ConfigAlarm,},
  Login: {screen: Login,},
  SignUp: {screen: SignUp,}
}, {
  initialRouteName: 'Home',
  // headerStyle: { marginTop: 24 },
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

export default App;