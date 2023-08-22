import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props{
  selectedGenre: Genres|null,
  selectedPlatform: Platform|null
}
const GameGrid = ({selectedGenre, selectedPlatform}:Props) => {
  const { data, error,isloading } = useGames(selectedGenre, selectedPlatform);
  const skeleton=[1,2,3,4,5,6]
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
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
    </>
  );
};

export default GameGrid;
