
import React from 'react'
import {Button,MenuButton,Menu,MenuList,MenuItem} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform  from '../hooks/usePlatform'
import { Platform } from "../entities/Platform"
import usePlatformById from '../hooks/usePlatformById'
import useGameQueryStore from '../store'


const PlatformSelector = () => {

  const { data, error } = usePlatform()
  const setPlatform=useGameQueryStore(s=>s.setPlatform)
  const selectedPlatformId=useGameQueryStore(s=>s.gameQuery.platformId)
const selectedPlatform=usePlatformById(selectedPlatformId)
    if(error)return null

  return (
    <Menu>
        <MenuButton as ={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name|| 'Platform'}</MenuButton>
        <MenuList>
        {data?.results.map((platform)=>(
            <MenuItem onClick={()=>setPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector