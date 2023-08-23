import { InputLeftElement,InputGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React,{useRef} from 'react'
import { BsSearch } from 'react-icons/bs'
interface Props{
  onSearch:(searchText:string)=>void;
}

const searchInput = ({onSearch}:Props) => {
  const ref=useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
       <InputLeftElement children={<BsSearch/>}/>
          <Input ref={ref} borderRadius={20} placeholder="search..." variant='filled'/>
      </InputGroup>
    </form>
  )
}

export default searchInput