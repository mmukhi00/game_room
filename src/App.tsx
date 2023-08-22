import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import React,{useState} from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
function App() {

  const [genre,setGenre]=useState<Genres|null>(null)
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
        <GenreList selectedGenere={genre} onSelectGenre={(genre)=>setGenre(genre)}/>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
