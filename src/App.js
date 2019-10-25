import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Route, Router, Switch } from './routing'

import Home from './Home'
import Pokemon from './Pokemon'

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
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path='/' render={props => <Home selectPokemon={this.selectPokemon} {...props}/>}/>
            <Route path='/pokemon' render={props => <Pokemon pokemon={selectedPokemon} {...props}/>}/>
          </Switch>
        </Router>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#456789',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
