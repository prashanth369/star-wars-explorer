import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlanetProps } from "../types";
import Requester from "./Requester";

interface paramProps {
  id?: string;
}
export default function Planet() {
  const [planet, setPlanet] = useState<PlanetProps>();
  const { id }: paramProps = useParams();

  const planetObject = async () => {
    const planetFetched = await Requester({
      url: `https://swapi.dev/api/planets/${id}`
    });

    if (planetFetched) {
      const planetFormatObject = {
        id,
        name: planetFetched.name,
        terrain: planetFetched.terrain,
        population: planetFetched.population,
      };
      setPlanet(planetFormatObject);
    }
  };

  useEffect(() => {
    planetObject();
  }, []);

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
        <div>...Loading</div>
      )}
    </div>
  );
}