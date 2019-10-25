import React from 'react'
import { Appbar } from 'react-native-paper'

export default class Header extends React.Component {

  goBack = () => console.log('Went back')

  handleSearch = () => console.log('Searching')

  handleMore = () => console.log('Shown more')

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={this.goBack}/>
        <Appbar.Content title='Mortgage Calc'/>
        <Appbar.Action icon='magnify' onPress={this.handleSearch}/>
        <Appbar.Action icon='dots-vertical' onPress={this.handleMore}/>
      </Appbar.Header>
    )
  }
}
