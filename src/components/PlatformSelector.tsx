
import React from 'react'
import {Button,MenuButton,Menu,MenuList,MenuItem} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform,{ Platform }  from '../hooks/usePlatform'
import platforms from '../data/platforms'
import usePlatformById from '../hooks/usePlatformById'
interface Props{
    onSelectedPlatform:(platform: Platform)=>void,
    selectedPlatformId?:number
}

const PlatformSelector = ({selectedPlatformId,onSelectedPlatform}:Props) => {

    const {data,error}=usePlatform()
const selectedPlatform=usePlatformById(selectedPlatformId)
    if(error)return null

  return (
    <Menu>
        <MenuButton as ={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name|| 'Platform'}</MenuButton>
        <MenuList>
          {console.log(data)}
        {data?.results.map(platform=>(
            <MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector