import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Typography} from "@mui/material";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import Form from "./Con2";

import { blue } from "@mui/material/colors";


function Contact(){
    return(


<section id='Contact'>
<center> <div class="text"><br/><br/><br/><br/><br/><br/>
          <Typography variant='h4'>   CONTACT</Typography>
         </div></center>
         
  <div>
    <Container>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31251.341045476707!2d78.95306983513736!3d11.735600735952698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab66e5dfc2508d%3A0xb773491d8d92cdff!2sKallakkurichi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653472519873!5m2!1sen!2sin" width="1100" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Container>
    
    </div>       
    


 <Grid container>
   <Grid sm={6} style={{paddingLeft:"10vh",marginTop:"17vh"}} >
     
  <table className="table">
    
     <Typography paragraph style={{width:"65%"}}>
     <div class="address">
     < EditLocationIcon color="warning" style={{fontSize:'30'}} />
             <td><h4>Location:</h4></td> 
            <td>  <p>3/9 Ranganathapuram Kallakkurichi, Tamil Nadu 606213</p></td> 
            </div>

            <div class="email">
            <AlternateEmailIcon color="warning" style={{fontSize:'30'}} />
             <td> <h4>Email:</h4></td>
            <td> <p>sanjaysanjay2407@gmail.com</p></td> 
            </div>

            <div class="phone">
            < CallIcon color="warning" style={{fontSize:'30'}} />
             <td> <h4>Call:</h4></td> 
             <td><p>9751600684</p></td> 
            </div>

          
   </Typography></table>
     </Grid>



     <Grid sm={3} style={{marginRight:"0vh",marginTop:"10vh",}}>


     <Form/>
      
     
     </Grid></Grid>


</section>
    );
}

export default Contact;