import React from 'react'
import useTrailer from '../hooks/useTrailer';

interface props{
    gameId: number;
}
const GameTrailer = ({ gameId }: props) => {
    const { data, error, isLoading } = useTrailer(gameId)
    if (isLoading) return null;

    if (error) return error
    const first = data?.results[0]
  return  first?(
   <video src={first.data[480]} poster={first.preview} controls/>
  ):null
}

export default GameTrailer