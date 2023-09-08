import { InputLeftElement,InputGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React,{useRef} from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'


const searchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText=useGameQueryStore(s=>s.setSearchText)
  const navigate=useNavigate()
  
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if (ref.current) setSearchText(ref.current.value)
      navigate("/")
    }}>
      <InputGroup>
       <InputLeftElement children={<BsSearch/>}/>
          <Input ref={ref} borderRadius={20} placeholder="search..." variant='filled'/>
      </InputGroup>
    </form>
  )
}

export default searchInput