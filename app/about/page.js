'use client'
import { useState, useEffect } from "react"
import {Box, Typography, Grid} from '@mui/material'
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      //justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      bgcolor="#FFFFFF"
    >
      <ResponsiveAppBar />
      <AboutSection />
    </Box>
  );
}
