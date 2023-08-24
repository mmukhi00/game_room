import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid ,Text} from "@chakra-ui/react";
import * as React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props{
  gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error,isloading } = useGames(gameQuery);
  const skeleton=[1,2,3,4,5,6]
  if(error) return <Text>{error}</Text>
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isloading&&skeleton.map(item=>
        <GameCardContainer key={item}>
        <GameCardSkeleton />
        </GameCardContainer>)
        }
        {data.map(game => (
          <GameCardContainer key={game.id}>
          <GameCard  game={game} />
          </GameCardContainer>
        ))
        }
      </SimpleGrid>
    
  );
};

export default GameGrid;
