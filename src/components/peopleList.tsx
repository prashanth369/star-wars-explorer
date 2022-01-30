import React from "react";
import { PeopleListResultProps } from "../types";
import PersonIcon from "@mui/icons-material/Person";

export default function PeopleList(props: PeopleListResultProps) {
  console.log(props);
  return (
    <div>
      {props.people
        ? props.people.map(p => (
            <div className="person-list">
              <div className="avatar">
                <PersonIcon sx={{ fontSize: 40, color: "#94908f" }} />
              </div>
              <div className="person-name">{p.name} </div>
            </div>
          ))
        : null}
    </div>
  );
}