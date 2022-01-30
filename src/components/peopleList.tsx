import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { PeopleListResultProps, PeopleProps } from "../types";
import Requester from "./Requester";

interface ToggleBackground {
  clickHandler: () => void;
}

export default function PeopleList(props: ToggleBackground) {
  const [people, setPeople] = useState<PeopleListResultProps>();
  props.clickHandler();
  const history = useHistory();

  const peopleArray = async () => {
    const peopleFetched = await Requester({
      url: "https://swapi.dev/api/people"
    });

    const peopleFormatArray = !peopleFetched
      ? []
      : peopleFetched.results.map((p: PeopleProps, index: number) => ({
          name: p.name,
          id: index + 1
        }));
    setPeople({ list: peopleFormatArray });
  };

  useEffect(() => {
    peopleArray();
  }, []);

  const handlePersonSelection = (id?: Number) => {
    history.push(`/people/${id}`);
  };

  return (
    <div className="person-container">
      <div className="persons-list">
        {people && people.list
          ? people.list.map(p => (
              <div
                className="person-list"
                key={p.id}
                onClick={() => handlePersonSelection(p.id)}
              >
                <div className="avatar">
                  <PersonIcon sx={{ fontSize: 40, color: "#94908f" }} />
                </div>
                <div className="person-name">{p.name} </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}