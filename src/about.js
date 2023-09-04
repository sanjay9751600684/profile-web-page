import React from "react";
import { Grid } from "@mui/material";

import {Typography} from "@mui/material";
// import{Container} from "@mui/material";
import Button from "@mui/material/Button";
import pds from './pds.pdf';




function About(){
    return(
<section id='about'><br/><br/>
      <Grid container>
        <Grid sm={6}>
        <img src={require('./img/sa.jpg')} height="420" style={{marginLeft:"22vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
        </Grid>
        
        <Grid sm={6} style={{marginRight:"5",marginTop:"15vh"}}>

          <Typography variant='h4'>
          ABOUT ME
          </Typography>
          <br/>
<Typography paragraph>
I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
</Typography>

        <table class="table">
         
                  <tr> <Typography paragraph>
                      <td>Name</td>
                      <td>: Sanjay.G</td>
                      </Typography> </tr>
                  <tr>
                  <Typography paragraph>
                              <td>Degree</td>
                              <td>: BE.EEE</td>
                              </Typography>   </tr>
                                  <tr><Typography paragraph>
                                      <td>Age</td>
                                      <td>: 21</td>
                                      </Typography>  </tr>
                  <tr><Typography paragraph>
                      <td>Phone</td>
                      <td>: 9751600684</td>
                      </Typography>  </tr>
                  <tr><Typography paragraph>
                      <td>Email</td>
                      <td>:sanjaysanjay2407@gmail.com</td>
                      </Typography>    </tr>
                  <tr><Typography paragraph>
                      <td>From</td>
                      <td>: Kallakurichi</td>
                      </Typography>   </tr>
                  <tr> <Typography paragraph>
                      <td>Language</td>
                      <td>: English, Tamil</td>
                   </Typography></tr>
                 
              </table>
              
                          <button1> <a class="btn" href={pds} target="blank" download={'pds.pdf'}>Download CV</a>
  </button1>

                         
<br/><br/><br/>
        </Grid>
      </Grid></section>
    );
}

      export default About;

