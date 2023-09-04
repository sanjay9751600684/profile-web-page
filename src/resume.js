import React from "react";
import { Grid } from "@mui/material";
import {Container} from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import sanjai from './sanjay.docx'

function Resume(){
    return(
        <section id='Resume'><br/><br/><br/><br/>
          <Container fixed>
                <center>
                <center> <Typography variant='h4' >RESUME</Typography></center>
                
                
  <button1> <a class="btn" href={sanjai} target="blank" download={'sanjay.docx'}>Download CV</a>
  </button1>


                         

                <hr/></center>
         
                
            <Grid container spacing={2}> 
  <Grid item xs={6}>
    <h2>Education</h2>
        <h4>Bachelor of Electrical and Electronics Engineering</h4>
        <h5>2019 - 2022</h5>
              <p><em><b>Anna University</b></em></p>
              <p>Muthayammal Engineering College</p>
              <p>Embedded Systems, Intelligent Systems, Networking, Robotics and Power Electronics are considered to be the best specializations to take up.</p>
             
              
  </Grid>
  <Grid item xs={6}>
    <h2>Course</h2>
  <h4>Printed Circuit Board Design</h4>
  <h5>2019</h5>
              
              <p><em><b> C CUBE TECHNOLOGIES , software Training Institution</b></em></p>
              <p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic.</li>
                <li>A printed circuit board, or PCB, is used to mechanically support and electrically connect electronic components.</li>
               
              </ul>
              </p>
  </Grid>
  <Grid item xs={6}>
  <h4>Diploma in Electrical and Electronics Engineering</h4>

            
              
              <h5>2016 - 2019</h5>
              <p><em><b>Directorate Of Technical Education</b></em></p>
<p> Muthayammal Polytechnic Institution</p>
<p>            <p>Technical education facilitates the acquisition of practical </p>
</p>
  </Grid>
  <Grid item xs={6}>
  <h4>Internet of Things</h4>
  <h5>2020</h5>
  <p><em><b>C CUBE TECHNOLOGIES , software Training Institution</b></em></p>
              <ul>
              

              <li>Developed numerous marketing programs of internet of things.</li>
               
              </ul>
              
  </Grid>
 
</Grid>
</Container><br/><br/><br/><br/><br/></section>

          
    );
}

export default Resume;
