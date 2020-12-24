import * as React from 'react'

import {
  Box,
  Container,
  Image,
  Heading,
  Text
} from '@chakra-ui/react'

import TerminalIcon from '../images/gnome-terminal-icon.png'

const About = props => {
  return (
    <Box
      style={{
        padding: '14px 0'
      }}
    >
      <Container maxW='900px' centerContent>
        <Image
          width='108px'
          style={{
            transform: 'rotateZ(350deg)'
          }}
          src={TerminalIcon}
        />
        <Container style={{ padding: '12px 0', textAlign: 'center' }}>
          <Heading size='lg' style={{ paddingBottom: '8px' }}>
            올해를 마치며, 음 / 잘 / 소.
          </Heading>
          <Text>
            마음만큼은 따뜻한 연말, 크리스마스를 맞이하여 전국의 아마추어 개발자들이 모여
            언택트 개발자 모임 "음 뭐라고 해야 제목을 잘 지었다고 소문이 날까"를 가지려고
            합니다. 2020년 12월 25일 오후 4시부터 Discord 서버에서 이벤트가 진행되오니
            많은 참여부탁드립니다.
          </Text>
        </Container>
      </Container>
    </Box>
  )
}

export default About
