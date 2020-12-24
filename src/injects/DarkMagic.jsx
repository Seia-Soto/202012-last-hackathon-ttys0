import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

const DarkMagic = props => {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode()
    }
  }, [])

  // NOTE: return `null` from render;
  return null
}

export default DarkMagic
