import Button from "./components/Button";

function App() {
  const message = "Alert";
  const clicked = () => {
    console.log("Button is clicked");
  };
  return (
    <div>
      <Button button="Button" whenButtonIsClicked={clicked} />
    </div>
  );
}

export default App;
