import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

// undefined: the absence of value
// null: intentional absence of value 


function App() {


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
        <GenreList/>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} >
          <GameHeading/>
          <Flex  marginBottom={5}>
            <Box marginRight={2}>
            <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
