import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Breadcrumb from '../components/Breadcrumb'
import Style from '../styles/Style'

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'パンくずなしView',
    headerStyle: Style.headerWithoutBreadcrumb,
    headerRight: <View></View>,
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.contentsWithoutBreadcrumb}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text>サンプルDへ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'SampleD' })
    )
  }
}

export default SampleCScreen
