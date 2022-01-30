import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { PeopleProps } from "../types";
import Requester from "./Requester";
import store from '../store';
import { ButtonTypes } from '../constants';
import { buttonSelected } from '../store/actionCreators';

interface paramProps {
  id?: string;
}
export default function People() {
  const [person, setPerson] = useState<PeopleProps>();
  const { id }: paramProps = useParams();
  let isMounted = false;

  const personObject = async () => {
    const personFetched = await Requester({
      url: `https://swapi.dev/api/people/${id}`
    });

    if (personFetched) {
      const peopleFormatObject = {
        id,
        name: personFetched.name,
        height: personFetched.height,
        mass: personFetched.mass,
        hair_color: personFetched.hair_color,
        skin_color: personFetched.skin_color,
        gender: personFetched.gender,
        birth_year: personFetched.birth_year
      };

      if(isMounted)
        setPerson(peopleFormatObject);
    }
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.PEOPLE));
    isMounted = true;
    personObject();

    return () => { isMounted = false; }
  });

  return (
    <div className="personContainer">
      {person ? (
        <>
          <div className="title"> {person.name}</div>
          <div className="person-info">
            <label> Height </label>
            <div className="item"> {person.height}</div>
            <label> Mass </label>
            <div className="item"> {person.mass}</div>
            <label> Hair Color </label>
            <div className="item"> {person.hair_color}</div>
            <label> Skin Color </label>
            <div className="item"> {person.skin_color}</div>
            <label> Gender </label>
            <div className="item"> {person.gender}</div>
            <label> Birth Year </label>
            <div className="item"> {person.birth_year}</div>
          </div>
        </>
      ) : (
        <div><LoadingButton loading={true}/> ... Loading </div>
      )}
    </div>
  );
}