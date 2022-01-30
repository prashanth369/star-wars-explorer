import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { PlanetProps } from "../types";
import Requester from "./Requester";
import { ButtonTypes } from '../constants';

import store from '../store';
import { buttonSelected } from '../store/actionCreators';

interface paramProps {
  id?: string;
}
export default function Planet() {
  const [planet, setPlanet] = useState<PlanetProps>();
  const { id }: paramProps = useParams();
  let isMounted = false;

  const planetObject = async () => {
    const planetFetched = await Requester({
      url: `https://swapi.dev/api/planets/${id}`
    });

    if (planetFetched) {
      const planetFormatObject = {
        id,
        name: planetFetched.name,
        terrain: planetFetched.terrain,
        population: planetFetched.population
      };

      if(isMounted)
        setPlanet(planetFormatObject);
    }
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.PLANETS));
    isMounted = true;
    planetObject();

    return () => { isMounted = false}
  });

  return (
    <div className="personContainer">
      {planet ? (
        <>
          <div className="title"> {planet.name}</div>
          <div className="person-info">
            <label> Terrain </label>
            <div className="item"> {planet.terrain}</div>
            <label> Population </label>
            <div className="item"> {planet.population}</div>
          </div>
        </>
      ) : (
        <div><LoadingButton loading={true}/> ... Loading </div>
      )}
    </div>
  );
}