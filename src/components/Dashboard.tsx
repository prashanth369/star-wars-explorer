import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonTypes } from "../constants";
import "../styles/main.scss";
import store from "../store";
import { buttonSelected } from "../store/actionCreators";

export default function Dashboard() {

  useEffect(() => {
    const { title } = store.getState();

    if (title !== ButtonTypes.DEFAULT)
      store.dispatch(buttonSelected(ButtonTypes.DEFAULT));
  });

  const history = useHistory();

  const handleButtonClick = (buttonValue: string) => {
    switch (buttonValue) {
      case ButtonTypes.PEOPLE:
        store.dispatch(buttonSelected("People"));
        history.push("/people");
        break;
      case ButtonTypes.PLANETS:
        store.dispatch(buttonSelected("Planets"));
        history.push("/planets");
        break;
      case ButtonTypes.MOVIES:
        store.dispatch(buttonSelected("Movies"));
        history.push("/movies");
        break;
      default:
        break;
    }
  };

  return (
    <div className="button-class">
      <Button
        className="button"
        onClick={() => handleButtonClick(ButtonTypes.PEOPLE)}
      >
        {ButtonTypes.PEOPLE}
      </Button>
      <Button
        className="button"
        onClick={() => handleButtonClick(ButtonTypes.MOVIES)}
      >
        {ButtonTypes.MOVIES}
      </Button>
      <Button
        className="button"
        onClick={() => handleButtonClick(ButtonTypes.PLANETS)}
      >
        {ButtonTypes.PLANETS}
      </Button>
    </div>
  );
}