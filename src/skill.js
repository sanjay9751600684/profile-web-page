import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Typography} from "@mui/material";



function Skill(){
    return(


<section id='skill'>
<center> <div class="text"><br/><br/><br/><br/><br/><br/>
          <Typography variant='h4'>   TECHNICAL SKILLS</Typography>
         </div></center>
         

 <Grid container>
   <Grid sm={6} style={{paddingLeft:"10vh",marginTop:"17vh"}} >
     <Typography variant='h4' style={{color:"#ffb300",fontSize:"38px",}}> SKILLS & EXPERIENCES</Typography>
     <br/>
     <Typography paragraph style={{width:"65%"}}>
   <p>Web Development expertise will stand out from the crowd. Understanding HTML, design skills, and analytical knowledge are all important Front-end Web Developer skills</p>
  <p>electrical system design cad drafting electrical schematic development preparation of operational plans analysis of blueprint and structural schematics mathematics electric.</p>            
   </Typography>
     </Grid>



     <Grid sm={6} style={{marginRight:"0vh",marginTop:"10vh",}}>
     
   <div class="skills">
 <div class="container" >

   <div class="section-title">
     <h2>Skills</h2>
   </div>

   <div class="row skills-content">

     <div class="col-lg-6">

       <div class="progress">
         <span class="skill">HTML <i class="val">95%</i></span>
         <div class="progress-bar-wrap" >
           <div class="progress-bar" role="progressbar" ></div>
         </div>
       </div>

       <div class="progress">
         <span class="skill">CSS <i class="val">90%</i></span>
         <div class="progress-bar-wrap">
           <div class="progress-bar1"  role="progressbar"  ></div>
         </div>
       </div>

       <div class="progress">
         <span class="skill">JavaScript <i class="val">80%</i></span>
         <div class="progress-bar-wrap">
           <div class="progress-bar2" role="progressbar" ></div>
         </div>
       </div>

     </div>

     <div class="col-lg-6">

       <div class="progress">
         <span class="skill">Bootstrap<i class="val">90%</i></span>
         <div class="progress-bar-wrap">
           <div class="progress-bar3" role="progressbar" ></div>
         </div>
       </div>

       <div class="progress">
         <span class="skill">Jquery<i class="val">80%</i></span>
         <div class="progress-bar-wrap">
           <div class="progress-bar4" role="progressbar" ></div>
         </div>
       </div>

       <div class="progress">
         <span class="skill">Semantic-ui <i class="val">85%</i></span>
         <div class="progress-bar-wrap">
           <div class="progress-bar5" role="progressbar" ></div>
         </div>
       </div>
      
     </div>

   </div>

 </div></div>


<br/><br/><br/><br/>
     </Grid></Grid></section>

    );
}

export default Skill;