import { useState, useEffect } from "react";
import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import { AgGridReact } from "ag-grid-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBook from "./AddBook";
import { Button } from "@mui/material";

const DATABASE_URL =
  "https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/.json";

function App() {
  const [books, setBooks] = useState([]);

  const columnDefs = [
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Author", field: "author", sortable: true, filter: true },
    { headerName: "Year", field: "year", sortable: true, filter: true },
    { headerName: "ISBN", field: "isbn", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true },
    {
      headerName: "",
      field: "id",
      width: 90,
      cellRenderer: (params) => (
        <IconButton
          onClick={() => deleteTodo(params.value)}
          size="small"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    fetchDatabase();
  }, []);

  const fetchDatabase = () => {
    fetch(DATABASE_URL)
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    if (data) {
      const keys = Object.keys(data);
      const valueKeys = Object.values(data).map((item, index) =>
        Object.defineProperty(item, "id", { value: keys[index] })
      );
      setBooks(valueKeys);
    } else {
      setBooks([]);
    }
  };

  const addNewBook = (newBook) => {
    fetch(DATABASE_URL, {
      method: "POST",
      body: JSON.stringify(newBook),
    })
      .then((response) => fetchDatabase())
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    fetch(
      `https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => fetchDatabase())
      .catch((err) => console.error(err));
  };

  const handleClear = async () => {
    try {
      const deletePromises = books.map(async (book) => {
        await fetch(
          `https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/${book.id}.json`,
          {
            method: "DELETE",
          }
        );
      });

      // Wait for all delete promises to complete
      await Promise.all(deletePromises);

      // Clear the books in the state
      setBooks([]);
    } catch (error) {
      console.error("Error deleting books:", error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">TodoList</Typography>
        </Toolbar>
      </AppBar>
      <AddBook addNewBook={addNewBook} />
      <Button
        variant="outlined"
        color="error"
        style={{ marginLeft: "10px" }}
        onClick={handleClear}
      >
        Clear
      </Button>
      <div className="ag-theme-material" style={{ height: 400, width: 1200 }}>
        <AgGridReact rowData={books} columnDefs={columnDefs} />
      </div>
    </>
  );
}

export default App;
