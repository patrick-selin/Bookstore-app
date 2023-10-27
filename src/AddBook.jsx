import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


function AddBook(props) {
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState(
        { 
        title: "", 
        author: "", 
        year: "", 
        isbn: "", 
        price: "", 
    });


    const inputChanged = (event) => {
        setBook({ ...todo, [event.target.name]: event.target.value });
      };


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = () => {
        props.addNewBook(newBook);
        handleClose();
    }
    
    return (
      <>
        <Button
          variant="outlined"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            width: "10rem",
          }}
          onClick={handleOpen}
        >
          ADD BOOK
        </Button>
   
      <Dialog open={open}>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={book.title}
            onChange={inputChanged}
            margin="dense"
            label="Description"
            fullWidth
          />
          <TextField
            name="author"
            value={book.author}
            onChange={inputChanged}
            margin="dense"
            label="Date"
            fullWidth
          />
          <TextField
            name="year"
            value={book.year}
            onChange={inputChanged}
            margin="dense"
            label="Priority"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
        
      </>
    )
  }
  
  export default AddBook
  