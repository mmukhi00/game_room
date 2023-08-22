import React from 'react'
import useGenres from '../hooks/useGenres'
import { HStack } from '@chakra-ui/react'
import { List,ListItem,Image,Text } from '@chakra-ui/react'
import getCroppedUrl from '../services/image-url'
import { Spinner } from '@chakra-ui/react'

const GenreList = () => {
    const{data,isloading,error}=useGenres()
    if(error) return null
    if (isloading) return <Spinner/>
  return (
    <List >
        {data.map(genre=>
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedUrl(genre.image_background)}/>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>)
        }
    </List>
  )
}

export default GenreList