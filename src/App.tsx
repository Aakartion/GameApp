import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const clicked = () => {
    setAlertVisibility(true);
  };

  const onCloseClicked = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert onCloseClick={onCloseClicked}>My Alert</Alert>}
      <Button button="Button" whenButtonIsClicked={clicked} />
    </div>
  );
}

export default App;
