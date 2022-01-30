import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export type PeopleProps = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  birth_year: string;
};

export function People() {
  const [people, setPeople] = useState<PeopleProps>();

  return (
    <div>
      <AccountCircleIcon />
      <div>{people.name}</div>
    </div>
  );
}