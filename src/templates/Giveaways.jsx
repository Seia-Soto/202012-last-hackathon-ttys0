import * as React from 'react'

import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'

import giveawayProducts from '../statics/giveawayProducts.json'

const Schedule = props => {
  return (
    <Box
      style={{
        padding: '24px 0'
      }}
    >
      <Container maxW='1200px'>
        <Heading size='lg'>
          여러분을 위한<br />
          '소확행' 경품까지.
        </Heading>
        <Table variant='simple' style={{ marginTop: '24px' }}>
          <TableCaption>제공되는 경품은 사정에 따라 진행 중 변경되거나 등수에 관계없이 지급될 수 있습니다.</TableCaption>
          <Thead>
            <Tr>
              <Th>등수</Th>
              <Th>내용</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              giveawayProducts.map((node, iter) => {
                return (
                  <Tr key={iter}>
                    <Td isNumeric>{iter + 1}</Td>
                    <Td>{node.name}</Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </Container>
    </Box>
  )
}

export default Schedule
