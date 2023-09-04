import React from "react";
import { Grid } from "@mui/material";
import {Container} from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material";

function Home(){
    return(

 
<Box>
<section className='Nav'>
<Grid container>
      <Grid sm={8} style={{paddingTop:"28vh",paddingLeft:"16vh"}}>
      <Container fixed>
        <Typography variant='h4'>
      <h1>Hello, I’m <span>Sanjay</span></h1>
      </Typography>
      <Typography variant='h5'>
      <h2>web Developer</h2>
      </Typography>
      <Typography paragraph>
      <p>To enhance myself with new technologies and will research on new technologies in a way which would be helpful for the upliftment of the company and also my professional growth. </p>
      </Typography>
      </Container>
      </Grid>
      <Grid sm={4}>

      </Grid>
      </Grid>
      
      </section>
      </Box>
);
}

export default Home;
