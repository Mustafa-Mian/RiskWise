'use client'
import { useState, useEffect } from "react"
import PredictionForm from '../components/PredictionForm';
import {Box} from '@mui/material'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

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
      <Box>
      <PredictionForm />
      </Box>
    </Box>
  );
}
