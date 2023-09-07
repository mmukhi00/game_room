import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'
interface props{
    children:string
}
const ExpandableText = ({ children }: props) => {
    
    const [expanded, setExpanded] = useState(false)
    const limit = 300
    if(!children) return null
    if (children.length <= limit) 
        return <Text>{ children}</Text>
    const summary= expanded?children:children.substring(0,limit)+'...'
  return (
      <Text>{summary}<Button marginLeft={1}  size='xs' fontWeight='bold' colorScheme='yellow' onClick={()=>setExpanded(!expanded)}>{expanded?'Show Less':'Read More'}</Button></Text>
  )
}

export default ExpandableText