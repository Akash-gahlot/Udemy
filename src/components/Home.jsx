import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmail } from "../store/selectors/email";

const Home = () => {
    const navigate = useNavigate();
    const email = useRecoilValue(userEmail);
    if (email) { 
        return (
             <div style={{ padding: "20px", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
                    Welcome to Udemy! <span>{ email}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>  
        </Grid>
      </Grid>
       <div style={{ textAlign: "right", marginTop: "0px" }}>
        <img
          src="https://www.shutterstock.com/image-vector/cartoon-little-boy-reading-book-600w-274411724.jpg"
          alt="Boy studying"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
        )

    }
  return (
    <div style={{ padding: "20px", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Udemy!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={()=>navigate("/signup")}
          >
            Signup
          </Button>
                  <Button variant="contained" color="primary"
                  onClick={()=>navigate("/login")}>
            Login
          </Button>
        </Grid>
      </Grid>
       <div style={{ textAlign: "right", marginTop: "0px" }}>
        <img
          src="https://www.shutterstock.com/image-vector/cartoon-little-boy-reading-book-600w-274411724.jpg"
          alt="Boy studying"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default Home;
