import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PlanetListResultProps, PlanetProps } from "../types";
import Requester from "./Requester";
import planetImg from '../images/planets.png';
interface ToggleBackground {
  clickHandler: () => void;
}

export default function PlanetList(props: ToggleBackground) {
  const [planets, setPlanets] = useState<PlanetListResultProps>();
  props.clickHandler();
  const history = useHistory();

  const peopleArray = async () => {
    const planetsFetched = await Requester({
      url: "https://swapi.dev/api/planets"
    });

    const planetsFormatArray = !planetsFetched
      ? []
      : planetsFetched.results.map((p: PlanetProps, index: number) => ({
          name: p.name,
          id: index + 1
        }));
        setPlanets({ list: planetsFormatArray });
  };

  useEffect(() => {
    peopleArray();
  }, []);

  const handlePlanetSelection = (id?: Number) => {
    history.push(`/planets/${id}`);
  };

  return (
    <div className="person-container">
      <div className="persons-list">
        {planets && planets.list
          ? planets.list.map(p => (
              <div
                className="person-list"
                key={p.id}
                onClick={() => handlePlanetSelection(p.id)}
              >
                <div className="avatar">
                    <img src={planetImg}></img>
                  {/* <PersonIcon sx={{ fontSize: 40, color: "#94908f" }} /> */}
                </div>
                <div className="person-name">{p.name} </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}