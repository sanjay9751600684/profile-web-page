import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';



import Home from './Home';
import About from './about';
import Skill from './skill';
import Resume from './resume';
import Portfolio from './Portfolio';
import Contact from './Contact';




import { BrowserRouter,NavLink,Link,Routes,Route } from "react-router-dom";
const pages = ['Home', 'About', 'Skills','Resume','Portfolio','Contact'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   <Box>
    <BrowserRouter>
    <AppBar position="fixed" sx={{backgroundColor:"#ffb300"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h3"
            noWrap 
            component="a"
            href="/"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.34rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                          

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>
                  
                  <ul>
                  <div className='res' style={{transform: 'none'}}>
                 <li> <NavLink to='/' exact  >
                    HOME</NavLink></li>
                   
                 <li> 
                 
                  <NavLink to='/about' exact  >
                    ABOUT</NavLink>
                   </li>
                   <li><NavLink to='/skill' exact>Skill</NavLink></li>
                   <li><NavLink to='/resume'exact>RESUME</NavLink></li>
                   <li><NavLink to='/portfolio'exact>PORTFOLIO</NavLink></li>
                   <li><NavLink to='/contact'exact>CONTACT</NavLink></li></div>
                   </ul>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.10rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
          <NavLink to='/' exact  className='na'>  <Button
               
                sx={{ my: 2, color: 'black', display: 'block' }}
                className='an'>
                Home
              </Button></NavLink> 
              <NavLink to='/about' exact className='na'> <Button 
               
               sx={{ my: 2, color: 'black', display: 'block' }}
               className='an' >
              About
             </Button></NavLink>
          <Link to='/skill' className='na'> <Button 
               
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
              Skill
             </Button></Link> 
            <Link to='/resume' className='na'> <Button className='an'
               
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
               Resume
             </Button></Link>
           < Link to='/Portfolio' className='na'><Button className='an'
               
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
             Portfolio
             </Button></Link>

             <Link to='/Contact'  className='na'>

             <Button className='an'
               
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
             Contact
             </Button></Link>
          </Box>

        
        </Toolbar>
      </Container>
      
    </AppBar>
    <Routes>
    <Route exact path='/' element={<Home/>}/>

      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/skill' element={<Skill/>}/>
      
      <Route exact path='/resume' element={<Resume/>}/>
      <Route exact path='/Portfolio' element={<Portfolio/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>

     
    </Routes>
    </BrowserRouter>

   
     {/* <section className='Nav'>
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
      
      </section> */}



      {/* <section id='about'>
      <Grid container>
        <Grid sm={6}>
        <img src={require('./img/sa.jpg')} height="420" style={{marginLeft:"22vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />
        </Grid>
        <Grid sm={6} style={{marginRight:"5",marginTop:"15vh"}}>

          <Typography variant='h4'>
         About Me
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
                  <tr><Typography paragraph>
                      <td>Language</td>
                      <td>: English, Tamil</td>
                      <td>          <span class="badge bg-light"> <a href="D:\profile\css\pds.pdf" target="_blank">           View My Resume</a> </span></td>
                 </Typography>  </tr>
                 
              </table><br/><br/>
        </Grid>
      </Grid></section>




      <section id='skill'>
     <center> <div class="text"><br/><br/>
               <Typography variant='h4'>   Technical Skills</Typography>
              </div></center>
              

      <Grid container>
        <Grid sm={6} style={{paddingLeft:"10vh",marginTop:"17vh"}} >
          <Typography variant='h4' style={{color:"#ecb128"}}> Skills & Experiences</Typography>
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

<section id='Resume'>
          <Container fixed>
            
                <center>
                <Typography variant='h4'>Resume</Typography><hr/></center>
                
                
            <Grid container spacing={2}>
  <Grid item xs={6}>
    <h2>Education</h2>
        <h3>Bachelor of Electrical and Electronics Engineering</h3>
        <h5>2019 - 2022</h5>
              <p><em><b>Anna University</b></em></p>
              <p>Muthayammal Engineering College</p>
              <p>Embedded Systems, Intelligent Systems, Networking, Robotics and Power Electronics are considered to be the best specializations to take up.</p>
             
              
  </Grid>
  <Grid item xs={6}>
    <h2>Course</h2>
  <h3>Printed Circuit Board Design</h3>
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
  <h3>Diploma in Electrical and Electronics Engineering</h3>

            
              
              <h5>2016 - 2019</h5>
              <p><em><b>Directorate Of Technical Education</b></em></p>
<p> Muthayammal Polytechnic Institution</p>
<p>            <p>Technical education facilitates the acquisition of practical </p>
</p>
  </Grid>
  <Grid item xs={6}>
  <h3>Internet of Things</h3>
  <h5>2020</h5>
  <p><em><b>C CUBE TECHNOLOGIES , software Training Institution</b></em></p>
              <ul>
              

              <li>Developed numerous marketing programs of internet of things.</li>
               
              </ul>
              
  </Grid>
 
</Grid>
</Container></section>

<section id="Portfolio"><br/>
 <center> <Typography variant='h4'>Portfolio</Typography></center>
  <Grid container>

    
    
<Grid sm={3} ><img src={require('./img/IMG_0062 - Copy.jpg')} height="490" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />

</Grid>

<Grid sm={3} ><img src={require('./img/san.jpeg')} height="490" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />

</Grid>

<Grid sm={3} ><img src={require('./img/IMG_6987-01.jpg')} height="490" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />

</Grid>

<Grid sm={3} ><img src={require('./img/IMG_7133-01.jpg')} height="490" style={{marginLeft:"5vh",marginTop:"20vh", borderRadius:"20px",MozBorderRadiusTopright:"20px"}} />

</Grid>
</Grid>
          </section>
          */}


{/* <section id="Contact"><br/>
 <center> <Typography variant='h4'>Contact</Typography></center>
  <Grid container>
   <Grid sm={6}>

          <div class="info">
            <div class="address">
              <i class="fa-solid fa-location-dot"></i>
              <h4>Location:</h4>
              <p>3/9 Ranganathapuram Kallakkurichi, Tamil Nadu 606213</p>
            </div>

            <div class="email">
              <i class="fa-solid fa-at"></i>
              <h4>Email:</h4>
              <p>sanjaysanjay2407@gmail.com</p>
            </div>

            <div class="phone">
              <i class="fa-solid fa-phone"></i>
              <h4>Call:</h4>
              <p>9751600684</p>
            </div>

          </div>

        
   </Grid>
   <Grid sm={6}>
    <Box>
   <form >
            <div class="row">
              <div class="col-md-6 form-group">
               
                <input type="text" name="name"   class="form-control" id="myText" placeholder="Your Name" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"  required/>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
                
                  
                
                
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              
            <span class="badge bg-primary"> <div class="text-center" ><button type="submit"    class="btn btn-p"  >Send Message   </button></div></span>
           </div>
          </form></Box>
    </Grid>
    </Grid>
    </section> */}

<Grid Container>
  <Grid sm={12}>
  <footer id="footer">
  <div class="container">
    <div class="copyright">
     <strong><span>FOLLOW US</span></strong>
    </div>
  <div className="icon">
 
  <a href="https://twitter.com/19ee523?t=xU57bLGS4Db94C-djNSdag&s=09"><TwitterIcon   style={{color:"blue",width:"25"}}/></a>
  <a href="https://www.instagram.com/invites/contact/?i=c7ck1qjkj0cu&utm_content=343qwyv"> <InstagramIcon style={{color:"red",width:"25"}} /></a>
  <a href="https://www.facebook.com/sanjayg.jj"><FacebookIcon style={{color:"blue",width:"25"}}/></a>
  
    <div class="credits">
     <h3> <em>Copyright © Sanjay</em></h3>
  </div>
    </div>
  </div>
</footer>
  </Grid>
</Grid>
</Box>
  );
};
export default ResponsiveAppBar;
