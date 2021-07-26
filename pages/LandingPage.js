import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import theme from '../Utility/Theme'

const LandingPage = () =>
{
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

    </ThemeProvider>
  )
}

export default LandingPage
