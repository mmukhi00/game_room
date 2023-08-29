import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid ,Text} from "@chakra-ui/react";
import * as React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface Props{
  gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error,isLoading,isFetchingNextPage,hasNextPage,fetchNextPage} = useGames(gameQuery);
  const skeleton=[1,2,3,4,5,6]
  if(error) return <Text>{error.message}</Text>
  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading&&skeleton.map(item=>
        <GameCardContainer key={item}>
        <GameCardSkeleton />
        </GameCardContainer>)
        }
        {data?.pages.map((page,index)=>(
          <React.Fragment key={index}>
            {page.results.map(game=>(
              <GameCardContainer key={game.id}>
              <GameCard  game={game} />
              </GameCardContainer>
          ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    {
      hasNextPage&&(<Button onClick={()=>fetchNextPage()} marginY={5}>
        {isFetchingNextPage?'Loading...':'Load More'}
      </Button>)
    }
    </Box>
  );
};

export default GameGrid;
