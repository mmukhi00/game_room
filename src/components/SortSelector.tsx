import React from 'react'
import {Button,MenuButton,Menu,MenuList,MenuItem} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'


const SortSelector = () => {

    const sortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release Date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'}
    ]
  const setSortOrder=useGameQueryStore(s=>s.setSortOrder)
  const sortOrder=useGameQueryStore(s=>s.gameQuery.sortOrder)
    const currentSortOrder= sortOrders.find(order=>order.value===sortOrder)
  return (
    <Menu>
    <MenuButton as ={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label||'Relevance'}</MenuButton>
    <MenuList>
    {sortOrders.map(item=>(
        <MenuItem onClick={()=>setSortOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>
    ))}
    </MenuList>
</Menu>
  )
}

export default SortSelector