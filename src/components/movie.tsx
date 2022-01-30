import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieProps } from "../types";
import Requester from "./Requester";

interface paramProps {
  id?: string;
}
export default function People() {
  const [movie, setMovie] = useState<MovieProps>();
  const { id }: paramProps = useParams();

  const movieObject = async () => {
    const movieFetched = await Requester({
      url: `https://swapi.dev/api/films/${id}`
    });

    if (movieFetched) {
      const movieFormatObject = {
        id,
        title: movieFetched.title,
        director: movieFetched.director,
        producer: movieFetched.producer,
      };
      setMovie(movieFormatObject);
    }
  };

  useEffect(() => {
    movieObject();
  });

  return (
    <div className="personContainer">
      {movie ? (
        <>
          <div className="title"> {movie.title}</div>
          <div className="person-info">
            <label> Director </label>
            <div className="item"> {movie.director}</div>
            <label> Producer </label>
            <div className="item"> {movie.producer}</div>
          </div>
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}