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
    const user = props.navigation.getParam('user', null);
    const dataUsuario = props.navigation.getParam('dataUsuario', {});
    state = {
      user,
      dataUsuario
    }
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

  // _renderScene = BottomNavigation.SceneMap({
  //   home: <HomeRoute user={{nome:"wiliam", teste:123}}/>,
  //   mapa: MapaRoute,
  //   perfil: PerfilRoute,
  //   config: ConfigRoute,
  //   logout: LogOut,
  // });

  renderScene = ({ route, jumpTo }) => {
    const { user, dataUsuario} = this.state;

    switch (route.key) {
      case 'home':
        return <HomeRoute user={user} dataUsuario={dataUsuario} />;
      case 'mapa':
        return <mapa />;
    }
  }

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this.renderScene}
      />
    );
  }
}