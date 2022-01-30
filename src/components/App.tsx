import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Container, Box } from "@mui/material";


import Dashboard from "./Dashboard";
import PeopleList from "./peopleList";
import PlanetList from './planetList';
import MovieList from './movieList';
import People from "./people";
import Movie from './movie';
import Planet from './planet';
import "../styles/main.scss";



function App() {
  const [title, setTitle] = useState<string>("Star War Explorer");
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState<string>(
    "#f2f2f2"
  );

  const handleSubSelection = () => {
  };

  return (
    <>
      <div className="app">
        <Container maxWidth="sm" >
          <div className="dashboard-header">
            <div className="menu">
              <DehazeIcon />
            </div>
            <div className="title">{title}</div>
          </div>
          <Box sx={{ height: "80vh", bgcolor: bodyBackgroundColor }} className="container">
            <Router>
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route
                  exact
                  path="/people"
                  component={() => (
                    <PeopleList clickHandler={handleSubSelection} />
                  )}
                ></Route>
                     <Route
                  exact
                  path="/planets"
                  component={() => (
                    <PlanetList clickHandler={handleSubSelection} />
                  )}
                ></Route>
                       <Route
                  exact
                  path="/movies"
                  component={() => (
                    <MovieList clickHandler={handleSubSelection} />
                  )}
                ></Route>
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