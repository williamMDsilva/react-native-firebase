import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import HomeRoute from './MenuScreen/HomeRoute'
import MapaRoute from './MenuScreen/MapaRoute'
import ConfigRoute from './MenuScreen/ConfigRoute'
import PerfilRoute from './MenuScreen/PerfilRoute'
import LogOut from './MenuScreen/LogOut'

export default class HomeDash extends React.Component {
  static navigationOptions = {
    title: 'Dash',
  };
  constructor(props){
    super(props);
  }
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'mapa', title: 'Mapa', icon: 'map' },
      { key: 'perfil', title: 'Perfil', icon: 'account' },
      { key: 'config', title: 'Configuração', icon: 'settings' },
      { key: 'logout', title: 'Sair', icon: 'logout' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    mapa: MapaRoute,
    perfil: PerfilRoute,
    config: ConfigRoute,
    logout: LogOut,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}