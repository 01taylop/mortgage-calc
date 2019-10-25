import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import { Route, Router, Switch } from './routing'

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

  render() {
    const { selectedPokemon } = this.state

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#320b86' }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F6' }}>
          <StatusBar barStyle='light-content'/>
          <View style={styles.container}>
            <Router>
              <Switch>
                <Route exact path='/' render={props => <Home selectPokemon={this.selectPokemon} {...props}/>}/>
                <Route path='/pokemon' render={props => <Pokemon pokemon={selectedPokemon} {...props}/>}/>
              </Switch>
            </Router>
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
