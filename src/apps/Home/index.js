import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'

import pokemon from '../../config/pokemon'

const Home = props => {

  const handlePress = pokemon => {
    props.selectPokemon(pokemon)
    props.history.push('pokemon')
  }

  return (
    <FlatList
      data={pokemon}
      keyExtractor={pokemon => pokemon.number}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default Home
