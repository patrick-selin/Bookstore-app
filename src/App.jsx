import { useState, useEffect } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBook from './AddBook';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const DATABASE_URL =
  "https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/.json";

function App() {
  const [books, setBooks] = useState([]);

  const columnDefs = [
    { field: 'Title', sortable: true, filter: true},
    { field: 'Author', sortable: true, filter: true},
    { field: 'Year', sortable: true, filter: true},
    { field: 'ISBN', sortable: true, filter: true},
    { field: 'Price', sortable: true, filter: true},
    { 
      headerName: '',
      field: 'id',
      width: 90,
      cellRenderer: params => 
      <IconButton onClick={() => deleteTodo(params.value)} size="small" color="error">
        <DeleteIcon />
      </IconButton> 
    }
  ]

  useEffect(() => {
    fetchDatabase();
  }, [])

  const fetchDatabase = () => {
    fetch(DATABASE_URL)
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setBooks(valueKeys);
  }
   
  const addNewBook = (newBook) => {
    fetch(DATABASE_URL,
    {
      method: 'POST',
      body: JSON.stringify(newBook)
    })
    .then(response => fetchDatabase())
    .catch(err => console.error(err))
  }

  const deleteTodo = (id) => {
    fetch(`https://bookstore-app-26328-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchDatabase())
    .catch(err => console.error(err))
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            TodoList
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddBook addNewBook={addNewBook} />
      <div className="ag-theme-material" style={{ height: 400, width: 700 }}>
        <AgGridReact 
          rowData={books}
          columnDefs={columnDefs}
        />
      </div>
    </>
  );
}

export default App;