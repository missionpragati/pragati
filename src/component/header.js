// Header.js

import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";

const Header = () => {
  
  return (

     
      <>    
      
      
      <Head>
      <link rel="shortcut icon" href="/logo.jpeg" />
    </Head>
      <Box className="sticky" sx={{ backgroundColor: "#362b59", color: "white", zIndex:1000 }}>
        <Grid container justifyContent="center" alignItems="center">
          {/* logo grid */}
          <Grid item xs={4} sx={{ padding:1, paddingLeft:5,height:200}}>
            {/* <Card>
              <CardMedia
             component="img"
              height="130"
              
               image src="/logo.jpeg" 
               alt="logo" 
              />
            </Card> */}
            {/* <Card>
              <CardMedia
                component="img"
                height="150"
                width="130"
                image=" /logo.jpeg" // Replace with an actual image URL
                alt="About Image"
              />

            </Card> */}
            <Image  src="/logo.jpeg " alt=""logo height={190} width={190}/>
            
          </Grid>
          <Grid item xs={8}>
            {/* link grid */}
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item sx={{fontSize:30}}>
                <Typography variant="h5"> Home Page</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" > About us</Typography>
              </Grid>
              <Grid item>
                <Typography  variant="h5">Blog</Typography>
              </Grid>
              <Grid item>
                <Typography  variant="h5"> Help us</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" > Contact us</Typography>
              </Grid>
             
              <Grid item>
                <Typography variant="h5"> SignUp</Typography>
              </Grid>
            </Grid>
          </Grid>

         
        </Grid>
      </Box>

      
      
      
      
      
      
      
      
      </>



//     <header className="header">
//       <div class="navbar">
//         <div class="nav-logo">
//           <div class="logo"></div>
//         </div>
//         <div>
//         <nav className="navbar-links">
//         <ul>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Home Page</a></li>
//           <li><a href="#">Blog</a></li>
//           <li><a href="#">Contact Us</a></li>
//           <li><a href="#"> Help Us</a></li>
//         </ul>
//       </nav>


//         </div>
//       </div>

//       {/* <div className="logo">
//         <a href="../">
//           <Image
//             src="/logo.jpeg"
//             alt="Logo"
//             width="110"
//             height="110"
//           />
//         </a>
//       </div> */}
//       {/* <div className="navbar-toggle">
//         <input type="checkbox" id="toggle" />
//         <label htmlFor="toggle">
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>
//       </div>
//       <nav className="navbar-links">
//         <ul>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Home Page</a></li>
//           <li><a href="#">Blog</a></li>
//           <li><a href="#">Contact Us</a></li>
//           <li><a href="#"> Help Us</a></li>
//         </ul>
//       </nav>
//  */}
//     </header> 
  );
};

export default Header;
