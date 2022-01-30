import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeopleProps } from "../types";
import Requester from "./Requester";

interface paramProps {
  id?: string;
}
export default function People() {
  const [person, setPerson] = useState<PeopleProps>();
  const { id }: paramProps = useParams();

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
      setPerson(peopleFormatObject);
    }
  };

  useEffect(() => {
    personObject();
  }, []);
  
  return (
    <div>
      {person ? (
        <>
          <div> {person.name}</div>
          <div> {person.height}</div>
          <div> {person.mass}</div>
          <div> {person.hair_color}</div>
          <div> {person.skin_color}</div>
          <div> {person.gender}</div>
          <div> {person.birth_year}</div>
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}