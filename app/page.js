'use client'
import { useState, useEffect } from "react"
import {Box} from '@mui/material'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import LandingPage from './components/LandingPage';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      //justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      //bgcolor="#36454F"
    >
      <ResponsiveAppBar />
      <LandingPage />
      <Analytics />
    </Box>
  );
}
