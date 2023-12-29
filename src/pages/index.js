import React, { useEffect, useState } from "react";

import { Container, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';


export default function Home() {
  return <Container maxWidth="lg">
  {/* Section 1: About */}
  <section style={{ padding: '50px 0', backgroundColor: '#f5f5f5' }}>
    <Typography variant="h4" align="center" gutterBottom>
      About Us
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="/image1.jpeg" // Replace with an actual image URL
            alt="About Image"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2" component="p">
              Description about the NGO's mission and goals goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more cards or content */}
    </Grid>
  </section>

  {/* Section 2: Programs */}
  <section style={{ padding: '50px 0', backgroundColor: '#ffffff' }}>
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
              Details about various education programs, initiatives, or courses offered by the NGO.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more cards or content */}
    </Grid>
  </section>

  {/* Section 3: Get Involved */}
  <section style={{ padding: '50px 0', backgroundColor: '#f5f5f5' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Get Involved
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="/image3.jpeg" // Replace with an actual image URL
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
}
