// components/Footer.js

import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '32px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" component="p">
              Your NGO's mission and description can go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#">Home</Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#">About</Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#">Services</Link>
            </Typography>
            {/* Add more links */}
          </Grid>
          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" component="p">
              Address: 123 NGO Street, City, Country
            </Typography>
            <Typography variant="body2" component="p">
              Phone: +123 456 789
            </Typography>
            <Typography variant="body2" component="p">
              Email: info@example.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
