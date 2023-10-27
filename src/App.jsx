import { useEffect, useState } from "react";
import "./App.css";
import AddBook from "./AddBook";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"

const DATABASE_URL = "https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/.json"

function App() {
  // HOOKS
  const [books, setBooks] = useState();

  const [columnDefs] = useState([
    {field: "eka sarake"},
    {field: "toka sarake"},
    {field: "kolmas sarake"},
  ]);

  useEffect(() => {
    fetchDatabase();
  }), [];
  
  // FUNCTIONS

  const fetchDatabase = () => {
    fetch(DATABASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }


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
