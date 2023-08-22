import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform{
  id:number,
  name:string,
  slug:string
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:Platform}[],
  metacritic: number
}

const useGames =(selectedGenre: Genres|null, selectedPlatform:Platform|null) => useData<Games>
('/games',{params:
  {
    genres:selectedGenre?.id,
    platforms: selectedPlatform?.id 
  }},
  [selectedGenre?.id,
  selectedPlatform?.id])

export default useGames;
