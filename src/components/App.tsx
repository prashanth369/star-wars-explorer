import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Container, Box } from "@mui/material";

import Dashboard from "./Dashboard";
import PeopleList from "./peopleList";
import PlanetList from "./planetList";
import MovieList from "./movieList";
import People from "./people";
import Movie from "./movie";
import Planet from "./planet";

import store from "../store";
import "../styles/main.scss";

function App() {
  const { title } = store.getState();
  const [mainTitle, setMainTitle] = useState<string>(title);

  const unsubscribe = store.subscribe(() => {
    const newTitle = store.getState().title;
    setMainTitle(newTitle);
  });

  useEffect(() => () => unsubscribe());

  return (
    <>
      <div className="app">
        <Container maxWidth="sm">
          <div className="dashboard-header">
            <a href="/">
              <div className="menu">
                <DehazeIcon />
              </div>
            </a>
            <div className="title">{mainTitle}</div>
          </div>
          <Box
            sx={{ height: "80vh", bgcolor: "#f2f2f2" }}
            className="container"
          >
            <Router>
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/people" component={PeopleList}></Route>
                <Route exact path="/planets" component={PlanetList}></Route>
                <Route exact path="/movies" component={MovieList}></Route>
                <Route path={`/people/:id`} component={People}></Route>
                <Route path={`/planets/:id`} component={Planet}></Route>
                <Route path={`/movies/:id`} component={Movie}></Route>
              </Switch>
            </Router>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;