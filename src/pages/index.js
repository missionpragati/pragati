import React, { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Image,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="">
      {/* Section 1: About */}

      <Box
        className="mainbg"
        sx={{
          height: 800,
          color: "#0b1460",
          backgroundColor: "#3b4580",
          paddingTop: 2,
          marginTop: 5,
          width: 1450,
          borderRadius: 7,
           
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          // spacing={1}
          sx={{ marginTop: 5, borderRadius: "10" }}
        >
          <Grid
            item
            xs={4}
            sx={{
              backgroundColor: "#91bfbc",
              color: "white",
              height: 680,
              width: 100,
            }}
          >
            <h1>
              <h1 style={{ fontSize: 70 }}>
                Empowering <span>Young Minds </span>
                <br></br>unleashing Potential <br></br>Skills for a Bright
                Future.
              </h1>
            </h1>
          </Grid>

          <Grid
            item
            xs={8}
            sx={{ backgroundColor: "", height: 680, borderRadius: "5px" }}
          >
            <Card>
              <CardMedia
                component="img"
                height="680"
                width="600"
                image="/image1.jpeg "
                // Replace with an actual image URL
                alt="About Image"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 900,
          color: "#0b1460",
          backgroundColor: "#91bfbc",
          paddingTop: 2,
          marginTop: 5,
          width: 1450,
          borderRadius: 1,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {" "}
          <h2 style={{ fontSize: 40, color: "white", align: "center" }}>
            {" "}
            PRAGATI MISSION
          </h2>{" "}
        </Typography>

        <section
          style={{
            padding: "10px ",
            backgroundColor: "#3b4580",
            marginTop: "",
            color: "white",
            fontSize: 50,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            <span style={{ fontSize: 50 }}>
              {" "}
              Help us create a better world for children around !{" "}
            </span>
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="600"
                  width="600"
                  image="/education.jpeg" // Replace with an actual image URL
                  alt="About Image"
                  spacing="8"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Our Mission : Child dream
                  </Typography>
                  <Typography variant="body2" component="p"></Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="600"
                  width="600"
                  image="/classmate.jpeg " // Replace with an actual image URL
                  alt="About Image"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Our Mission : Child education
                  </Typography>
                  <Typography variant="body2" component="p">
                    <h3></h3>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Add more cards or content */}
          </Grid>
        </section>
      </Box>

      {/* section:3 multilple picture */}

      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
         
          borderRadius={15}
        >
          <Grid item xs={4.5}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                width="300"
                image="/girls.jpeg" // Replace with an actual image URL
                alt="About Image"
                spacing="8"
              />
             
            </Card>
          </Grid>

          <Grid item xs={3.5} sx={{ marginTop: 13, borderRadius: 10 }}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/chess.jpeg" // Replace with an actual image URL
                alt="About Image"
              />

            </Card>
          </Grid>

          <Grid item xs={3.5} sx={{ marginTop: 13 }}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/book.jpeg" // Replace with an actual image URL
                alt="About Image"
              />

            </Card>
          </Grid>

         
        </Grid>
      </Box>


      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          marginTop={0}
          borderRadius={15}
          sx={{ marginBottom: 0 }}
        >
          <Grid item xs={4.5}   sx={{ marginBottom: 0 }}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                width="300"
                image="/techer.jpeg" // Replace with an actual image URL
                alt="About Image"
                spacing="8"
                // borderRadius={15}
              />
             
            </Card>
          </Grid>

          <Grid item xs={3.5} sx={{ marginBottom: 10 }}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/majrityjpeg " // Replace with an actual image URL
                alt="About Image"
              />

            </Card>
          </Grid>

          <Grid item xs={3.5} sx={{ marginBottom: 10 }}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/group.jpeg" // Replace with an actual image URL
                alt="About Image"
              />

            </Card>
          </Grid>

         
        </Grid>









      {/* Section 2: Programs */}
      <section style={{ padding: "50px 0", backgroundColor: "#ffffff" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Programs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/image2.jpeg" // Replace with an actual image URL
                alt="Programs Image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Education Initiatives
                </Typography>
                <Typography variant="body2" component="p">
                  Details about various education programs, initiatives, or
                  courses offered by the NGO.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards or content */}
        </Grid>
      </section>

      {/* Section 3: Get Involved */}
      <section style={{ padding: "50px 0", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Get Involved
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/classmate.jpeg" // Replace with an actual image URL
                alt="Get Involved Image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Volunteer Opportunities
                </Typography>
                <Typography variant="body2" component="p">
                  Information about volunteering opportunities with the NGO.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards or content */}
        </Grid>
      </section>
    </Container>
  );
}
