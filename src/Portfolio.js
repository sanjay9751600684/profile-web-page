import React from "react";
import { Grid } from "@mui/material";
import {Typography} from "@mui/material";
// import {container} from "@mui/material";
import Port from "./port.js";
import img1 from "./img/IMG_0062 - Copy.jpg";
import img2 from "./img/san.jpeg";
import img3 from "./img/IMG_6987-01.jpg";
import img4 from "./img/IMG_7133-01.jpg"

import img5 from "./img/IMG_4069-01.jpeg";
import img6 from "./img/n1.JPG";
import img7 from "./img/n4.JPG";
import img8 from "./img/n3.JPG";

function Portfolio(){
    return(
        <section id="Portfolio">

<br/><br/><br/><br/><br/><br/>
 <center> <Typography variant='h4' >PORTFOLIO</Typography></center>
  <Grid container >

      <Port  img={img1} />
      <Port  img={img2} />
      <Port  img={img3} />
      <Port  img={img4} />

{/* <Grid sm={3} ><div className="hover"><img src={require('./img/IMG_0062 - Copy.jpg')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div> 
</Grid> */}

{/* <Grid sm={3} ><div className="hover"><img src={require('./img/san.jpeg')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>

<Grid sm={3} ><div className="hover"><img src={require('./img/IMG_6987-01.jpg')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>

<Grid sm={3} ><div className="hover"><img src={require('./img/IMG_7133-01.jpg')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid> */}
</Grid>


<Grid container >
      <Port  img={img5} />
      <Port  img={img6} />
      <Port  img={img7} />
      <Port  img={img8} />

{/* <Grid sm={3} ><div className="hover"><img src={require('./img/IMG_4069-01.jpeg')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div> 
</Grid>

<Grid sm={3} ><div className="hover"><img src={require('./img/n1.JPG')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>

<Grid sm={3} ><div className="hover"><img src={require('./img/n4.JPG')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>

<Grid sm={3} ><div className="hover"><img src={require('./img/n3.JPG')} height="400" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid> */}
</Grid>
   {/* <Grid Container>
    <Grid sm={3}><div className="hover"><img src={require('./img/P1.jpeg')} height="450" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>
<Grid sm={3} ><div className="hover"><img src={require('./img/IMG_7133-01.jpg')} height="450" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
</div>
</Grid>
   </Grid>
     */}

  <br/><br/><br/>


          </section>
    );
}


export default Portfolio;