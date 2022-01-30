import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonTypes } from "../constants";
import "../styles/main.scss";
import store from "../store";
import { buttonSelected } from "../store/actionCreators";

export default function Dashboard() {
  useEffect(() => {
    store.dispatch(buttonSelected(ButtonTypes.DEFAULT));
  });

  return (
    <div className="button-class">
      <Button className="button" component={Link} to="people">
        {ButtonTypes.PEOPLE}
      </Button>
      <Button className="button" component={Link} to="movies">
        {ButtonTypes.MOVIES}
      </Button>
      <Button className="button" component={Link} to="planets">
        {ButtonTypes.PLANETS}
      </Button>
    </div>
  );
}