import { InputLeftElement,InputGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const searchInput = () => {
  return (
    <InputGroup>
     <InputLeftElement children={<BsSearch/>}/>
        <Input borderRadius={20} placeholder="search..." variant='filled'/>
    </InputGroup>
  )
}

export default searchInput