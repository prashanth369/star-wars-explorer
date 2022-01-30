import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonTypes } from "../constants";
import "../styles/main.scss";


export default function Dashboard() {

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