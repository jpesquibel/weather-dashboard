import React from 'react';
import { Button, TextField } from '@mui/material';

//handler for button click, setState
const handleButtonClick = (event) => {
    console.log('button clicked!');
};

function AddZip() {
    return(
        <>
            <TextField ></TextField>
            <Button onClick={handleButtonClick}>Add Zip</Button>
        </>
    )
}

export default AddZip;