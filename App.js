import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import MortgageApp from './src/App'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    accent: '#03DAC5',
    background: '#E1E2E1',
    surface: '#FFF',
    text: '#000',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MortgageApp/>
    </PaperProvider>
  )
}
