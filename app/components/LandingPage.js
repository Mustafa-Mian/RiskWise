// app/LandingPage.js

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import HeroSection from './HeroSection';
import { Computer, TrendingUp } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LandingPage = () => {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <AccessTimeIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Instant Risk Predictions
                </Typography>
                <Typography>
                  Instantly predicts the risk for a given stock. No waiting required.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Computer sx={{ fontSize: 50, color: 'primary.main' }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Simple Inputs
                </Typography>
                <Typography>
                  Get a prediction based on readily available data, including Price, Industry, and employee count.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 50, color: 'primary.main' }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Easy To Interpret
                </Typography>
                <Typography>
                  Receive results in plain and simple language, no financial knowledge required. :&#41;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Section */}
        <Box sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            Made with &#60;3 by M.Mian, {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
