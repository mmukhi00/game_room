import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import ExpandableText from '../components/ExpandableText'
import GameAttributes from '../components/GameAttributes'
import GameTrailer from '../components/GameTrailer'
import GameScreenshots from '../components/GameScreenshots'
import { SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'


const GameDetailsPage = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)
  if (isLoading) return <Spinner />
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, ms: 2 }} spacing={5}>
      <GridItem>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id}/>
     </GridItem>
     
    </ SimpleGrid>
  )
}

export default GameDetailsPage