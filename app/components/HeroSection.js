import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/assets/StockBoard.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: { xs: 2, md: 4 },
        minHeight: '80vh',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom color={'#FFFFFF'}>
        Investment Looks Tough.
      </Typography>
      <Typography variant="h5" component="p" gutterBottom color={'#FFFFFF'}>
        But it doesn't have to be.
      </Typography>
      <Link href={'/predictor'} passHref>
        <Button variant="contained" color="primary" size="large">
            Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
