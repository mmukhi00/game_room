import React from 'react'
import {Button,MenuButton,Menu,MenuList,MenuItem} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as ={Button} rightIcon={<BsChevronDown/>}>Sort</MenuButton>
    <MenuList>
   <MenuItem>item1</MenuItem>
   <MenuItem>item2</MenuItem>
   <MenuItem>item3</MenuItem>
   <MenuItem>item4</MenuItem>
   <MenuItem>item5</MenuItem>
   <MenuItem>item6</MenuItem>
    </MenuList>
</Menu>
  )
}

export default SortSelector