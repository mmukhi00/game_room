import React from "react";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import Games  from "../entities/Games";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width='100%' borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/game/'+game.slug}>
          {game.name}
          </Link>
          <Emoji rating={game.rating_top} />
        
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
