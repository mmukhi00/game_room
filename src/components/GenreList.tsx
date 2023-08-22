import React from 'react'
import useGenres, { Genres } from '../hooks/useGenres'
import { HStack } from '@chakra-ui/react'
import { List,ListItem,Image,Text } from '@chakra-ui/react'
import getCroppedUrl from '../services/image-url'
import { Spinner } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'


interface Props{
    onSelectGenre:(genre:Genres)=>void,
    selectedGenere:Genres|null
}

const GenreList = ({selectedGenere,onSelectGenre}:Props) => {
    const{data,isloading,error}=useGenres()
    if(error) return null
    if (isloading) return <Spinner/>
  return (
    <List >
        {data.map(genre=>
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedUrl(genre.image_background)}/>
                <Button fontWeight={selectedGenere?.id==genre.id? 'bold':'normal'} onClick={()=>onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
        </ListItem>)
        }
    </List>
  )
}

export default GenreList