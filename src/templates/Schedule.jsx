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

import scheduleNodes from '../statics/scheduleNodes.json'

const Schedule = props => {
  return (
    <Box
      style={{
        padding: '24px 0'
      }}
    >
      <Container maxW='1200px'>
        <Heading size='lg'>시간표</Heading>
        <Table variant='simple' style={{ marginTop: '24px' }}>
          <TableCaption>일정은 진행 중 사정에 따라 변경될 수 있습니다.</TableCaption>
          <Thead>
            <Tr>
              <Th>순번</Th>
              <Th>시작 시간</Th>
              <Th>내용</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              scheduleNodes.map((node, iter) => {
                return (
                  <Tr key={iter}>
                    <Td isNumeric>{iter}</Td>
                    <Td>{node.startTime || '-'}</Td>
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
