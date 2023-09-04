import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface props{
    children:ReactNode
}
const GameCardContainer = ({children}:props) => {
  return (
    <Box _hover={{transform:'scale(1.03)', transition:'transform .15s ease-in'}} width='100%' borderRadius={10} overflow="hidden">
        {children}
    </Box>
  )
}

export default GameCardContainer