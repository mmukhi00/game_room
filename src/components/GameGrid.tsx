import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid ,Text} from "@chakra-ui/react";
import * as React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/spinner";

interface Props{
  gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error,isLoading,isFetchingNextPage,hasNextPage,fetchNextPage} = useGames(gameQuery);
  const skeleton=[1,2,3,4,5,6]
  if(error) return <Text>{error.message}</Text>
  const fetchedGamesCount=data?.pages.reduce(
    (total,page)=>total+page.results.length,0
  ) || 0
  return (
    
      <InfiniteScroll dataLength={fetchedGamesCount} 
      hasMore={!!hasNextPage} 
      next={()=>fetchNextPage()} 
      loader={<Spinner/>}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
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
      </InfiniteScroll>
  );
};

export default GameGrid;
