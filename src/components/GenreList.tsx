import { Button, HStack, Heading, Image, List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import useGameQueryStore from "../store";
const GenreList = () => {

  const { data, isLoading, error } = useGenres();
  const selectGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  // if(error) return null
  // if (isloading) return <Spinner/>
  return (
    <Stack spacing={2}>
      <Heading as="h3" size="lg" fontSize="20px" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre?.id == selectGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default GenreList;
