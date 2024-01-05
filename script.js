import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1 className="title">Namaste React</h1>;

const HeadingComponent = () => (
  <div className="heading">
    {Title()}
    {1234 + 4321}
    <h3>Kancha Chinna</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
