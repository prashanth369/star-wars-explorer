import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import {LoadingButton} from '@mui/lab';
import { ButtonTypes } from '../constants';
import { PeopleListResultProps, PeopleProps } from "../types";
import Requester from "./Requester";
import store from '../store';
import { buttonSelected } from '../store/actionCreators';

export default function PeopleList() {
  const [people, setPeople] = useState<PeopleListResultProps>();
  const history = useHistory();
  let isMounted = false;

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

    if(isMounted)
      setPeople({ list: peopleFormatArray });
  };

  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.PEOPLE));
    isMounted = true;
    peopleArray();

    return () => { isMounted = false }
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
          : <div><LoadingButton loading={true}/> ... Loading </div>}
      </div>
    </div>
  );
}