import * as React from 'react'

import Typist from 'react-typist'
import {
  Box,
  Button,
  Container,
  Text,
  Heading,
  Stack,
  Link
} from '@chakra-ui/react'
import {
  BiLinkExternal
} from 'react-icons/bi'

import BackgroundImage from '../images/main-background.jpg'

const HeroHeader = props => {
  return (
    <Box
      style={{
        minHeight: '450px',
        paddingTop: '150px',
        paddingBottom: '25px',
        textAlign: 'center',
        // NOTE: filter background image;
        backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container
        maxW='2xl'
        centerContent
      >
        <Heading size='2xl' style={{ paddingBottom: '12px' }}>
          음, 뭐라고 해야<br />
          잘 지었다고 소문이 날까요;
        </Heading>
        <Text fontSize='md' style={{ fontFamily: 'Nanum Gothic Coding' }}>
          <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1 * 1000 }} avgTypingDelay={24}>
            Last login: {new Date().toString()} on ttys001 (browser)
          </Typist>
        </Text>

        <Stack spacing={4} style={{ paddingTop: '28px' }}>
          <Button
            as={Link}
            rightIcon={<BiLinkExternal />}
            href='https://discord.gg/byA5Gx6kX2'
            target='_blank'
            rel='noreferrer'
          >
            Discord 열기
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroHeader
