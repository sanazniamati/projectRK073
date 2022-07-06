import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle, Text } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const [circle, setCircle] = useState(false);
  const planets = [
    { id: "1", x: 46, y: 126, radius: 32, name: "Mercury" },
    { id: "2", x: 179, y: 126, radius: 79, name: "Venus" },
    { id: "3", x: 366, y: 127, radius: 85, name: "Earth" },
    { id: "4", x: 515, y: 127, radius: 45, name: "Mars" },
  ];

  const handelMouseOver = (e) => {
    setText(e.target.attrs.name);
    // console.log(e.target.attrs.name);
  };
  const handelMouseOut = (e) => {
    setText("");
  };
  const handelClick = () => {
    setCircle(true);
  };
  return (
    <>
      <div id="controls">
        <input type="checkbox" id="checkbox" onClick={handelClick} />
        <label> Show map overlay </label>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={text} x={10} y={10} fontSize={24} fill={"black"} />
          {planets.map((planet) => (
            <Circle
              id={planet.id}
              x={planet.x}
              y={planet.y}
              radius={planet.radius}
              stroke={"black"}
              fill={"red"}
              strokeWidth={4}
              name={planet.name}
              onMouseOver={handelMouseOver}
              onMouseOut={handelMouseOut}
            />
          ))}
          {circle ? <Circle /> : null}y
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
