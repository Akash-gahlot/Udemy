// Signup.jsx
import React from "react";
import { Grid, Button, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const Addcourse = () => {
  return (
   <div style={{ padding: "20px", marginTop: "50px" ,marginRight:"auto" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Add New Course here ...
              </Typography>
              <Link to="/allcourse" style={{marginLeft:"200px" , textDecoration: "none" }}>
            <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }}>
              All Courses
            </Button>
          </Link>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label="title" variant="outlined" fullWidth margin="normal" />
          <TextField label="description" variant="outlined" fullWidth margin="normal" />
          <TextField label="password" variant="outlined" fullWidth margin="normal" type="password" />
          <Button variant="contained" color="primary">
            Add
                  </Button>
                                             
        </Grid>
      </Grid>
    </div>
  );
};

export default Addcourse;
