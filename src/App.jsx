import { useEffect, useState } from "react";
import "./App.css";
import AddBook from "./AddBook";

import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DATABASE_URL =
  "https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/.json";

function App() {
  // HOOKS
  const [books, setBooks] = useState();

  const [columnDefs] = useState([
    { field: "eka sarake" },
    { field: "toka sarake" },
    { field: "kolmas sarake" },
  ]);

  useEffect(() => {
    fetchDatabase();
  }),
    [];

  // FUNCTIONS

  const fetchDatabase = () => {
    fetch(DATABASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // data -> books setBooks()
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };


  // addBook() joka lahetetaan propseina AddBook componentille
  const addNewBook = (newBook) => {
    console.log('first')
    // tallena book to books
    // ja lisaa se tietokantaan
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
      
        <AddBook addNewBook={addNewBook}></AddBook>
        <div
          className="ag-theme-alpine"
          style={{
            height: 400,
            width: 600,
          }}
        >
          <AgGridReact rowData={books} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </>
  );
}

export default App;
