import { useState } from "react";
import "./App.css";
import AddBook from "./AddBook";

import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from "@mui/material";

function App() {
  // HOOKS
  const [books, setBooks] = useState();

  // FUNCTIONS
  //

  // RENDER JSX

  return (
    <>
      <div>
        
        <AppBar position="static">
         <Toolbar>
          <Typography variant="h4">
            Bookstore
          </Typography>
         </Toolbar>
        </AppBar>
        <Button>hei</Button>
        <AddBook></AddBook>
      </div>
    </>
  );
}

export default App;
