import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import SkillConfig from './src/first-access/SkillConfig'
import FirstAcessScreen from './src/first-access/FirstAcessScreen'
import StartCalendarScreen from './src/StartCalendarScreen'
import NewDayScreen from './src/NewDayScreen'
import RadarSkills from './src/first-access/RadarSkills'
import ConfigAlarm from './src/ConfigAlarm'
import Loading from './src/Loading'
import Login from './src/auth/Login'
import SignUp from './src/auth/SignUp'
import HomeDash from './src/dash/HomeDash'

const MainNavigator = createStackNavigator({
  Loading: {screen: Loading},
  FirstLogin: {screen: FirstAcessScreen},
  SkillConfig: {screen: SkillConfig},
  StartCalendar: {screen: StartCalendarScreen},
  NewDay: {screen: NewDayScreen},
  RadarSkills: {screen: RadarSkills},
  ConfigAlarm: {screen: ConfigAlarm,},
  Login: {screen: Login,},
  SignUp: {screen: SignUp,},
  HomeDash: {screen: HomeDash,},
}, {
  initialRouteName: 'Loading',
  // headerStyle: { marginTop: 24 },
  headerMode: 'none',
});

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