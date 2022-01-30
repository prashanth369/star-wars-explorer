import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { PlanetListResultProps, PlanetProps } from "../types";
import { ButtonTypes } from '../constants';
import Requester from "./Requester";
import store from '../store';
import { buttonSelected } from '../store/actionCreators';
import planetImg from '../images/planets.png';

export default function PlanetList() {
  const [planets, setPlanets] = useState<PlanetListResultProps>();
  const history = useHistory();
  let isMounted = false;

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

    if(isMounted)
      setPlanets({ list: planetsFormatArray });
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.PLANETS));
    isMounted = true;
    peopleArray();
    return () => {isMounted = false};
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
                    <img src={planetImg} alt="Planets Icon"></img>
                  {/* <PersonIcon sx={{ fontSize: 40, color: "#94908f" }} /> */}
                </div>
                <div className="person-name">{p.name} </div>
              </div>
            ))
          : <div><LoadingButton loading={true}/> ... Loading </div>}
      </div>
    </div>
  );
}