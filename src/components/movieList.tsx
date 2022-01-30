import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import {LoadingButton} from '@mui/lab';

import { MovieListResultProps, MovieProps } from "../types";
import { ButtonTypes } from '../constants';
import Requester from "./Requester";
import store from '../store';
import { buttonSelected } from '../store/actionCreators';

export default function MovieList() {
  const [movies, setMovies] = useState<MovieListResultProps>();
  const history = useHistory();
  let isMounted = false;

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
    if(isMounted)
      setMovies({ list: movieFormatArray });
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.MOVIES));
    isMounted = true;
    moviesArray();

    return () => { isMounted = false; }
  });

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
          : <div><LoadingButton loading={true}/> ... Loading </div>}
      </div>
    </div>
  );
}