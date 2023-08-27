import React from 'react'
import useGenres, { Genres } from '../hooks/useGenres'
import { HStack } from '@chakra-ui/react'
import { List,ListItem,Image,Heading } from '@chakra-ui/react'
import getCroppedUrl from '../services/image-url'
import { Spinner } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'


interface Props{
    onSelectGenre:(genre:Genres)=>void,
    selectedGenere:Genres|null
}

const GenreList = ({selectedGenere,onSelectGenre}:Props) => {
    const{data,isLoading,error}=useGenres()
    // if(error) return null
    // if (isloading) return <Spinner/>
  return (
   <Stack spacing={2}>
    
    <Heading as='h3' size='lg' fontSize='20px' marginBottom={3}>Genre</Heading>
    <List >
        {data?.results.map(genre=>
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedUrl(genre.image_background)}/>
                <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenere?.id==genre.id? 'bold':'normal'} onClick={()=>onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
        </ListItem>)
        }
    </List>
    </Stack>
   
  )
}

export default GenreList