import Alert from "./components/Alert";

function App() {
  const message = "Alert";
  return (
    <div>
      <Alert>
        <p>{message}</p>
        <span>Alert message</span>
      </Alert>
    </div>
  );
}

export default App;
