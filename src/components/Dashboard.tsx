import React, { useState, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Container, Box, Button } from "@mui/material";
import { ButtonTypes } from "../constants";
import "../styles/main.scss";
import { PeopleProps, PeopleListProps, PeopleResultProp } from "../types";
import Requester from "./Requester";
import PeopleList from './peopleList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Dashboard() {
  const [title, setTitle] = useState<string>("Star War Explorer");
  const [peoples, setPeoples] = useState<PeopleResultProp>();

  useEffect(() => {
    if (!peoples) {
      const peopleArray = async () => {
        const peopleFetched = await Requester({
          url: "https://swapi.dev/api/people"
        });
        setPeoples({person: peopleFetched});
      };
      peopleArray();
    }
  });

  return (
      <div>
        <Container maxWidth="sm">
          <div className="dashboard-header">
            <div className="menu">
              <DehazeIcon />
            </div>
            <div className="title">{title}</div>
          </div>
          <Box sx={{ bgcolor: "#f2f2f2", height: "90vh" }}>
            <div className="button-class">
              <button className="button">{ButtonTypes.PEOPLE}</button>
              <button className="button">{ButtonTypes.MOVIES}</button>
              <button className="button">{ButtonTypes.PLANETS}</button>
            </div>
          </Box>
        </Container>
      </div>

  
  );
}