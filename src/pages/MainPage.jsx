import * as React from 'react'

import {
  Divider
} from '@chakra-ui/react'

import Credit from '../injects/Credit'
import About from '../templates/About'
import Giveaways from '../templates/Giveaways'
import HeroHeader from '../templates/HeroHeader'
import Schedule from '../templates/Schedule'
import DiscordWidget from '../components/DiscordWidget'

const MainPage = props => {
  return (
    <>
      <HeroHeader />
      <Divider />
      <About />
      <Schedule />
      <DiscordWidget />
      <Giveaways />
      <Credit />
    </>
  )
}

export default MainPage
