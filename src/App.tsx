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

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
