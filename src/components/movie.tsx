import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {LoadingButton} from '@mui/lab';

import { MovieProps } from "../types";
import Requester from "./Requester";
import store from '../store';
import { ButtonTypes } from '../constants';
import { buttonSelected } from '../store/actionCreators'

interface paramProps {
  id?: string;
}
export default function People() {
  const [movie, setMovie] = useState<MovieProps>();
  const { id }: paramProps = useParams();
  let isMounted = false;

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
        release_date: movieFetched.release_date
      };
    
      if(isMounted)
        setMovie(movieFormatObject);
    }
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.MOVIES));

    isMounted = true;
    movieObject();

    return () => { isMounted = false; }
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
            <label> Release date </label>
            <div className="item"> {movie.release_date}</div>
          </div>
        </>
      ) : (
        <div><LoadingButton loading={true}/> ... Loading </div>
      )}
    </div>
  );
}