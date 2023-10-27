import { useState } from "react";
import "./App.css";
import AddBook from "./AddBook";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  // HOOKS
  const [books, setBooks] = useState();

  const [columnDefs] = useState([
    {field: "eka sarake"},
    {field: "toka sarake"},
    {field: "kolmas sarake"},
  ]);
  
  // FUNCTIONS


  // RENDER JSX
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Bookstore</Typography>
          </Toolbar>
        </AppBar>
        <Button>hei</Button>
        <AddBook></AddBook>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={books} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </>
  );
}

export default App;
