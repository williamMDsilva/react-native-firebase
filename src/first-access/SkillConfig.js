import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { ViewPager } from 'rn-viewpager'
import NumericInput from 'react-native-numeric-input'

import StepIndicator from 'react-native-step-indicator'
import { Text, Avatar, Card, Title, Paragraph, IconButton, } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const pagesDefault = [
  {
    title: 'Vibrato',
    value: 10,
    keyOnSkill: 0
  },
  {
    title: 'Troca de posição',
    value: 10,
    keyOnSkill: 1
  }, {
    title: 'Stacato',
    value: 10,
    keyOnSkill: 2
  }, {
    title: 'Legato',
    value: 10,
    keyOnSkill: 3
  }, {
    title: 'Detaché',
    value: 10,
    keyOnSkill: 4
  },
  {
    title: 'Qualidade do som',
    value: 10,
    keyOnSkill: 5
  },
  {
    title: 'Afinação',
    value: 10,
    keyOnSkill: 6
  }
  , {
    title: 'Agilidade',
    value: 10,
    keyOnSkill: 7
  }
]

export default class SkillConfig extends Component {
  static navigationOptions = {
    title: 'Skill',
  };

  constructor(props) {
    super(props);

    const skills = this.props.navigation.getParam('skills', []);
    let PAGES = pagesDefault;

    skills.forEach((element, index) => {
      PAGES[index].value = element;
    });

    this.state = {
      currentPage: 0,
      PAGES,
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }

  saveValues(){
    const { PAGES} = this.state;
    //this.props.navigation.navigate('RadarSkills', {});
    this.props.navigation.goBack();
    this.props.navigation.state.params.performUpdate(PAGES.map((item) =>item.value))
  }

  closeConf(){
    this.props.navigation.navigate('RadarSkills', {});
  }
  
  render() {
    const { currentPage, PAGES } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <IconButton icon="close" onPress={() => { this.closeConf() }} />
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Title style={{ textAlign: 'center' }}>{PAGES[currentPage].title}</Title>
            <Title style={{ textAlign: 'center' }}>{currentPage + 1} de {PAGES.length}</Title>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', }}>
            <IconButton icon="content-save" onPress={() => { this.saveValues() }} />
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <ViewPager
            style={{ flexGrow: 1 }}
            ref={viewPager => {
              this.viewPager = viewPager
            }}
            onPageSelected={page => {
              this.setState({ currentPage: page.position })
            }}
          >
            {PAGES.map(page => this.renderViewPagerPage(page))}
          </ViewPager>
        </View>
      </View>
    )
  }

  onStepPress = position => {
    this.setState({ currentPage: position })
    this.viewPager.setPage(position)
  }

  renderViewPagerPage = item => {
    let { PAGES } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }} key={item.keyOnSkill}>
        <Title>Habilidade com {item.title} </Title>
        <Paragraph>Informações sobre {item.title} precione: </Paragraph><IconButton icon="youtube" onPress={() => { }} />
        <View style={{ paddingVertical: 10, alignItems: 'center' }}>
          <NumericInput value={item.value} onChange={(value) => {
            item.value = value;
            PAGES[item.keyOnSkill] = item;
            this.setState({PAGES})
          }} />
        </View>
      </View>
    )
  }

  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (<View style={{ flex: 1 }}>
      <Text >
        {label}
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    marginVertical: 50
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999'
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f'
  }
})