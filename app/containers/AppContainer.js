import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { Router, Scene, TabBar } from 'react-native-router-flux';

import DetailView from './DetailView'
import ListView from './ListView'
import MapView from './MapView'
import PostView from './PostView'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}


class AppContainer extends Component {
  render() {
    return (
      <Router>
      <Scene key="root" >
        <Scene key="tabbar" tabs={true} style={styles.tabBarStyle}>
            <Scene key="tab1" title="Karte" icon={TabIcon} initial={true}>
              <Scene key='map' title="Karte" component={MapView} />
            </Scene>
            <Scene key="tab2" title="In der Nähe" icon={TabIcon} >
              <Scene key='detail' title="In der Nähe"component={DetailView} />
            </Scene>
        </Scene>
      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabBarStyle: {
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: 'white',
    opacity        : 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
