import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import StartScreen from './src/StartScreen'
import HomeScreen from './src/HomeScreen'
import StartCalendarScreen from './src/StartCalendarScreen'
import NewDayScreen from './src/NewDayScreen'
import RadarSkils from './src/RadarScreen'
import ConfigAlarm from './src/ConfigAlarm'
import Login from './src/auth/Login'
import SignUp from './src/auth/SignUp'
import HomeDash from './src/dash/HomeDash'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Start: {screen: StartScreen},
  StartCalendar: {screen: StartCalendarScreen},
  NewDay: {screen: NewDayScreen},
  RadarSkils: {screen: RadarSkils},
  ConfigAlarm: {screen: ConfigAlarm,},
  Login: {screen: Login,},
  SignUp: {screen: SignUp,},
  HomeDash: {screen: HomeDash,},
}, {
  initialRouteName: 'Home',
  // headerStyle: { marginTop: 24 },
  headerMode: 'none',
});

// const App = createAppContainer(MainNavigator);
// export default App;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1A237E',
    accent: '#f1c40f',
    background: '#ECEFF1',
    surface: '#FAFAFA',
    error: '#d50000',
    text: '#212121',
    onBackground: '#000000',
    onSurface: '#000000',
  },
};

const Navigation = createAppContainer(MainNavigator);


export default function App() {
  return(
    <PaperProvider theme={theme}>  
      <Navigation />
    </PaperProvider>
  )
}