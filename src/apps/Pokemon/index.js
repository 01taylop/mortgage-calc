import React from 'react'
import { Button, Image, Platform, Share, StyleSheet, Text, View } from 'react-native'

import { Link } from '../../routing'

const Pokemon = props => {
  const { pokemon } = props

  const backButton = (
    <Link to='/'>
      <Text>Back</Text>
    </Link>
  )

  if (!pokemon) {
    return (
      <View>
        <Text>No Pokemon Selected</Text>
        {backButton}
      </View>
    )
  }

  const handleShare = () => {
    Share.share({
      message: 'Check out my Pokemon',
      url: props.pokemon.photoUrl,
    })
  }

  return (
    <View style={styles.container}>
      <Text>{`#${pokemon.number}: ${pokemon.name}`}</Text>
      <Text>{`Type: ${pokemon.type}`}</Text>
      <Image style={{ width: 50, height: 50 }} source={{ uri: pokemon.photoUrl }}/>
      {Platform.OS !== 'web' && <Button title='Share' onPress={handleShare}/>}
      {backButton}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Pokemon
