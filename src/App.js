import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { AdMobBanner } from 'expo-ads-admob'

import { Route, Router, Switch } from './routing'

import Header from './components/Header'
import Home from './apps/Home'
import Pokemon from './apps/Pokemon'

export default class App extends React.Component {

  state = {
    selectedPokemon: null,
  }

  selectPokemon = selectedPokemon => {
    this.setState({
      selectedPokemon,
    })
  }

  bannerError = error => {
    console.log(error)
  }

  render() {
    const { selectedPokemon } = this.state

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#3700B3' }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F6' }}>
          <StatusBar barStyle='light-content'/>
          <Header/>
          <View style={styles.container}>
            <Router>
              <Switch>
                <Route exact path='/' render={props => <Home selectPokemon={this.selectPokemon} {...props}/>}/>
                <Route path='/pokemon' render={props => <Pokemon pokemon={selectedPokemon} {...props}/>}/>
              </Switch>
            </Router>
            {Platform.OS === 'ios' && (
              <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID={__DEV__ ? "ca-app-pub-3940256099942544/2934735716" : "ca-app-pub-3920784353661442/3332379776"}
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError}/>
            )}
            {Platform.OS === 'android' && (
              <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID={__DEV__ ? "ca-app-pub-3940256099942544/2934735716" : "ca-app-pub-3920784353661442/6340513036"}
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError}/>
            )}
          </View>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
