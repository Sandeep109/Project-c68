import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FBScreen from './screens/fb';
import INScreen from './screens/in';


export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook :{screen:FBScreen},
  Instagram :{screen:INScreen}
})
const AppContainer=createAppContainer(TabNavigator)