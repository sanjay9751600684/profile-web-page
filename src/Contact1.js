import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Typography} from "@mui/material";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';



function Contact(){
    return(


<section id='Contact'>
<center> <div class="text"><br/><br/><br/><br/><br/><br/>
          <Typography variant='h4'>   Contact</Typography>
         </div></center>
         
  <div>
    <Container>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31251.341045476707!2d78.95306983513736!3d11.735600735952698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab66e5dfc2508d%3A0xb773491d8d92cdff!2sKallakkurichi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653472519873!5m2!1sen!2sin" width="1100" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Container>
    
    </div>       
    


 <Grid container>
   <Grid sm={6} style={{paddingLeft:"10vh",marginTop:"17vh"}} >
     
  
     <Typography paragraph style={{width:"65%"}}>
     <div class="address">
              < EditLocationIcon color="primary" style={{fontSize:'30'}} />
              <h4>Location:</h4>
              <p>3/9 Ranganathapuram Kallakkurichi, Tamil Nadu 606213</p>
            </div>

            <div class="email">
              <AlternateEmailIcon color="primary" style={{fontSize:'30'}} />
              <h4>Email:</h4>
              <p>sanjaysanjay2407@gmail.com</p>
            </div>

            <div class="phone">
< CallIcon color="primary" style={{fontSize:'30'}} />
              <h4>Call:</h4>
              <p>9751600684</p>
            </div>

          
   </Typography>
     </Grid>



     <Grid sm={6} style={{marginRight:"0vh",marginTop:"10vh",}}>


     
      
     
     <form >
           <div className="name">
                <input type="text" name="name"   class="form-control" id="myText" placeholder="Your Name" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"  required/>
                </div>


      
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
                
                  
                
                
            
            
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              
            <span class="badge bg-primary"> <div class="text-center" ><button type="submit"    class="btn btn-p"  >Send Message   </button></div></span>
          </div>
          </form>
     </Grid></Grid>

{/* <Grid Container>
  <Grid sm={12}>
  <footer id="footer">
  <div class="container">
    <div class="copyright">
     <strong><span>Follow Us</span></strong>
    </div>
    <div class="social">
			<a href="https://www.facebook.com/sanjayg.jj"><i class="fab fa-facebook-f"  ></i></a>
			                   <a href="https://www.instagram.com/invites/contact/?i=c7ck1qjkj0cu&utm_content=343qwyv"><i class="fab fa-instagram" style="color: red;"></i></a>
			                   <a href="https://twitter.com/19ee523?t=xU57bLGS4Db94C-djNSdag&s=09"><i class="fab fa-twitter"></i></a>
		</div>
    <div class="credits">
     <h3> Thank you</h3>
  
    </div>
  </div>
</footer>
  </Grid>
</Grid> */}
</section>
    );
}

export default Contact;