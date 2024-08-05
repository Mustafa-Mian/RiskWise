import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Divider } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary">
          Learn more about our Vision and how RiskWise works.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Vision:
        </Typography>
        <Typography variant="body1" paragraph>
          RiskWise is for everyone. Our goal is to enpower users to make sound financial decisions, without having to pay for premium services. It is a clear, simple to use financial coach that requires minimal finance knowledge.
        </Typography>
        <Typography variant="body1" paragraph>
            With RiskWise, I wanted to create the kind of app I wanted to use.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How It Works:
        </Typography>
        <Typography variant="body1" paragraph>
          RiskWise is built using Azure Machine Learning Services. Predictions are based on a classification ML model, which was trained on open-source data for the S&P500 stocks. The model has a 90% accuracy rating, meaning it will almost always predict stock risk correctly. This site makes calls to the Azure API using a Next.js proxy API with axios.
        </Typography>
        <Typography variant="body1" paragraph>
          On the user-interface end, RiskWise takes advantage of frameworks like React and Next.js. React components make up fundamental pieces of the UI like the Navigation Bar at the top, the Prediction form, and even the About page you are on right now! Next.js&#39;s app routing is the reason why you can seamlessly transition between pages without any reloading. The entire GUI is made using Material-UI.
        </Typography>
      </Box>

    </Container>
  );
};

export default AboutPage;
