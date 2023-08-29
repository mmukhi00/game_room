import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGenre from '../hooks/useGenre'
import usePlatformById from '../hooks/usePlatformById'

interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {

const genre=useGenre(gameQuery.genreId)
const platform=usePlatformById(gameQuery.platformId)


    const heading=`${platform?.name||''} ${genre?.name||''} Games`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading