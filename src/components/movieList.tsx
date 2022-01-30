import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import { MovieListResultProps, MovieProps } from "../types";
import Requester from "./Requester";

interface ToggleBackground {
  clickHandler: () => void;
}

export default function MovieList(props: ToggleBackground) {
  const [movies, setMovies] = useState<MovieListResultProps>();
  props.clickHandler();
  const history = useHistory();

  const moviesArray = async () => {
    const moviesFetched = await Requester({
      url: "https://swapi.dev/api/films"
    });

    const movieFormatArray = !moviesFetched
      ? []
      : moviesFetched.results.map((p: MovieProps, index: number) => ({
          title: p.title,
          id: index + 1
        }));
        setMovies({ list: movieFormatArray });
  };

  useEffect(() => {
    moviesArray();
  }, []);

  const handleMovieSelection = (id?: Number) => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className="person-container">
      <div className="persons-list">
        {movies && movies.list
          ? movies.list.map(p => (
              <div
                className="person-list"
                key={p.id}
                onClick={() => handleMovieSelection(p.id)}
              >
                <div className="avatar">
                  <MovieIcon sx={{ fontSize: 40, color: "#94908f" }} />
                </div>
                <div className="person-name">{p.title} </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}