import { Button, ButtonGroup, Grid, GridItem, Show,HStack } from "@chakra-ui/react";
import React,{useState} from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
  genre:Genres|null;
  platform:Platform|null

}

function App() {

  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base:'1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GenreList selectedGenere={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} padding={2} bottomMargin={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform}  onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
