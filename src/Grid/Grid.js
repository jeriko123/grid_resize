import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Grid.css";
import useResizeAware from "react-resize-aware";
import useResizeObserver from "use-resize-observer";

const Grid = (props) => {
  const [resizeListener, sizes] = useResizeAware();
  const { ref, width = 20, height = sizes.height } = useResizeObserver();

  const [leftMenu, setLeftMenu] = useState(true);

  const leftStyle = {
    resize: "horizontal",
    overflow: "auto",

    maxWidth: sizes.width - 150,
    minWidth: 200,
  };

//   const mainStyle = {
//     width: sizes.width - width - 200,
//   };

  const handleLeftMenu = () => {
    setLeftMenu(!leftMenu);
  };

  return (
    <div class="grid-container">
      {leftMenu && (
        <div class="left-menu" ref={ref} style={leftStyle}>
          {resizeListener}
          <Link to="/">
            <button onClick={() => {}}>main</button>
          </Link>
          <div>
            <button onClick={() => {}}>Resize</button>
          </div>
          <div>
            <button onClick={handleLeftMenu}>Handle</button>
          </div>
          Left Your content here. Size: {width}x{height})
        </div>
      )}
      <div class="main-menu" >
        main
        <div>
          <button onClick={handleLeftMenu}>Handle</button>
        </div>
      </div>
      <div class="right-menu">rights</div>
      <div class="console">console</div>
    </div>
  );
};

export default Grid;
