import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Main(props) {
  const [count, setCount] = useState(0);
  console.log("count", count);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const goTable = () => props.history.push("table");

  return (
    <div className="Main">
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <Link to="/table">
          <button onClick={() => {}}>Table</button>
        </Link>
        <Link to="/grid">
          <button onClick={() => {}}>Grid</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
