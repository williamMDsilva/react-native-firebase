import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>home</Text>;

const MapaRoute = () => <Text>Mapa</Text>;

const ConfigRoute = () => <Text>Configuração</Text>;

const PerfilRoute = () => <Text>Perfil</Text>;

export default class HomeDash extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'mapa', title: 'Mapa', icon: 'map' },
      { key: 'perfil', title: 'Perfil', icon: 'account' },
      { key: 'config', title: 'Configuração', icon: 'settings' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    mapa: MapaRoute,
    perfil: PerfilRoute,
    config: ConfigRoute,
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