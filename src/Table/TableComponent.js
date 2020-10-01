import React, { useState, useEffect } from "react";
import * as R from "ramda";
import MyTable from './Table';


function TableComponent(props) {
  
    const data = {
        CL: {
          name: "CL",
          window: 20,
          t_max: 14,
          t_min: 20,
        },
        F: {
          name: "F",
          window: 32,
          t_max: 3,
          t_min: 123,
        },
        SO4: {
          name: "SO4",
          window: 3,
          t_max: 14,
          t_min: 353,
        },
      };


  return (
   <MyTable data={data} />
  );
}

export default TableComponent;
