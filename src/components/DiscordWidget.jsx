import * as React from 'react'
import fetch from 'unfetch'

import {
  Box,
  Container,
  Spinner,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react'

import editorNames from '../statics/editorNames.json'
import languageExtensions from '../statics/languageExtensions.json'
import stautsWrapper from '../statics/statusWrapper.json'

const DiscordWidget = props => {
  const {
    useState,
    useEffect
  } = React

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [devs, setDevs] = useState([])

  useEffect(() => {
    const url = 'https://discordapp.com/api/guilds/784827324054110228/widget.json'

    fetch(url)
      .then(res => res.json())
      .then(json => {
        const possibleExts = []

        for (let i = 0, l = editorNames.length; i < l; i++) {
          possibleExts.push(editorNames[i])
        }

        for (let i = 0, l = languageExtensions.length; i < l; i++) {
          const language = languageExtensions[i]

          if (!language.extensions) continue

          for (let k = 0, s = language.extensions.length; k < s; k++) {
            possibleExts.push(language.extensions[k])
          }
        }

        // NOTE: Find possible devs;
        const possibleDevs = json.members.filter(member => {
          if (!member.game) return false

          const gameProps = Object.keys(member.game)

          for (let i = 0, l = gameProps.length; i < l; i++) {
            const prop = member.game[gameProps[i]]

            if (!prop.includes('.')) return false

            for (let k = 0, s = possibleExts.length; k < s; k++) {
              const exp = new RegExp(possibleExts[k], 'im')

              if (prop.match(exp)) return true
            }
          }

          return false
        })

        setData(json)
        setDevs(possibleDevs)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Box
        style={{
          padding: '16px 0'
        }}
      >
        <Container centerContent>
          <Spinner />
          <Text style={{ paddingTop: '12px' }}>
            Discord 서버 정보 가져오는 중
          </Text>
        </Container>
      </Box>
    )
  }

  return (
    <Box
      style={{
        padding: '24px 0'
      }}
    >
      <Container maxW='1200px'>
        <Heading size='lg'>
          지금 '{data.name}' 서버에서<br />
          {devs.length || 0}명 개발 중!
        </Heading>
        {
          devs.length && (
            <Text style={{ paddingTop: '12px' }}>
              사용하는 에디터의 Discord 확장 프로그램을 설치한 후에 찾아보세요!<br />
              최대 25명까지 표시됩니다.
            </Text>
          )
        }
        <Wrap
          style={{
            paddingTop: '12px'
          }}
        >
          {
            devs.map((member, iter) => {
              const prop = stautsWrapper[member.status]

              if (iter > 25) return null

              return (
                <WrapItem key={iter}>
                  <Avatar name={member.username} src={member.avatar_url}>
                    <AvatarBadge bg={prop.bg} borderColor={prop.borderColor} boxSize='1em' />
                  </Avatar>
                </WrapItem>
              )
            })
          }
        </Wrap>
        {
          !devs.length && (
            <Text>
              아직 서버에서 개발 중인 사람이 없습니다!<br />
              Discord 서버에 참여한 뒤에 에디터 확장 플러그인을 설치하고 새로고침해보세요.
            </Text>
          )
        }
      </Container>
    </Box>
  )
}

export default DiscordWidget
