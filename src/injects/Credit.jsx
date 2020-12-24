import * as React from 'react'

import {
  Container,
  Divider,
  Text,
  Link
} from '@chakra-ui/react'

const Credit = props => {
  return (
    <>
      <Divider />
      <Container
        style={{
          padding: '20px 0',
          textAlign: 'center'
        }}
        centerContent
      >
        <Text>
          The event is created and handled by '이청연' in '개발 수다방' Discord server.
          <br />
          Front-End Copyright 2020{' '}
          <Link href='https://github.com/Seia-Soto' target='_blank' rel='noreferrer'>Seia-Soto</Link>.{' '}
          All rights reserved.
        </Text>
      </Container>
    </>
  )
}

export default Credit
