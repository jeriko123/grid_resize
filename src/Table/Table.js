import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import { Paper, IconButton } from "@material-ui/core";
import * as R from "ramda";
import { Link } from "react-router-dom";

function MyTable(props) {
  const [tableData, setTableData] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const table = Object.values(props.data);
    setTableData(table);
  }, [props.data]);

  const editClick = () => {
    setEdit(!edit);
  };

  const rowEdit = (id) => (key) => (value) => {
    const values = [...tableData];
    values[id][key] = value;
    setTableData(values);
  };
  console.log(tableData);

  return (
    <div className="Main">
      <Link to="/">
        <button>Главная</button>
      </Link>
      <div>Table</div>

      <button onClick={editClick}>
        {edit ? "применить" : "редактировать"}
      </button>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">t_max</TableCell>
            <TableCell align="right">t_min</TableCell>
            <TableCell align="right">window</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {edit && (
                  <TextField
                    onChange={(e) => rowEdit(id)("name")(e.target.value)}
                    value={tableData[id]["name"]}
                  />
                )}
                {!edit && row.name}
              </TableCell>
              <TableCell align="right">
                {edit && (
                  <TextField
                    onChange={(e) => rowEdit(id)("t_max")(e.target.value)}
                    value={tableData[id]["t_max"]}
                  />
                )}
                {!edit && row.t_max}
              </TableCell>
              <TableCell align="right">
                {edit && (
                  <TextField
                    onChange={(e) => rowEdit(id)("t_min")(e.target.value)}
                    value={tableData[id]["t_min"]}
                  />
                )}
                {!edit && row.t_min}
              </TableCell>
              <TableCell align="right">
                {edit && (
                  <TextField
                    onChange={(e) => rowEdit(id)("window")(e.target.value)}
                    value={tableData[id]["window"]}
                  />
                )}
                {!edit && row.window}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyTable;
