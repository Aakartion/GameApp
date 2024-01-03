import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  const items = [
    "New York",
    "Austin",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
