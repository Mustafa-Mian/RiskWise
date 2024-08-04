import React, { useState } from 'react';
import { TextField, Grid, Button, Container, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const PredictionForm = () => {
  const [response, setResponse] = useState(null);
  const [data, setData] = useState({
    Symbol: '',
    Name: '',
    Sector: '',
    CurrentPrice: '',
    Country: '',
    FulltimeEmployees: '',
    ControversyLevel: '',
    RiskLevel: 'Unknown'
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const requestData = async (event) => {
    event.preventDefault();

    const payload = {
      Inputs: {
        WebServiceInput0: [
          {
            Symbol: data.Symbol,
            Name: data.Name,
            Sector: data.Sector,
            "Current Price": parseFloat(data.CurrentPrice),
            Country: data.Country,
            "Fulltime Employees": parseInt(data.FulltimeEmployees),
            "Controversy Level": data.ControversyLevel,
            "Risk Level": data.RiskLevel
          }
        ]
      }
    };

    try {
      const result = await axios.post('/api/azure-proxy', payload);
      const scoredLabel = result.data.Results.WebServiceOutput0[0]["Scored Labels"];

      if (scoredLabel === 'Low') {
        setResponse('The stock has a low risk level. There is less chance of loss, but also less chance of large gains. It may be a stable investment for you to consider.');
      } else if (scoredLabel === 'Medium') {
        setResponse('The stock has a moderate risk level. It has a good amount of flexibility, but is still at risk of potential losses. Consider evaluating further.');
      } else if (scoredLabel === 'High') {
        setResponse('The stock has a high risk level. There is potential for large gains, but this comes at the risk of high losses. Caution is advised.');
      } else {
        setResponse('No clear prediction could be made. Consider rechecking the input values.');
      }

    } catch (error) {
      console.error("Error in calling endpoint.", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={requestData} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Predict your stock Risk Level
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/assets/RISKWISE-removebg-preview.png" alt="Logo" width="100" height="100" />
        </Box>
        <Typography variant="subtitle1" component="h1" gutterBottom>
          Enter in your stock details. For Controversy Level, give your best estimate based on the current news surrounding the company.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ticker"
              name="Symbol"
              value={data.Symbol}
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              name="Name"
              value={data.Name}
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="industry-label">Industry</InputLabel>
              <Select
                labelId="industry-label"
                name="Sector"
                value={data.Sector}
                onChange={handleChange}
                label="Industry"
              >
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Financial Services">Financial Services</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Industrials">Industrials</MenuItem>
                <MenuItem value="Energy">Energy</MenuItem>
                <MenuItem value="Consumer Cyclical">Consumer Cyclical</MenuItem>
                <MenuItem value="Consumer Defensive">Consumer Defensive</MenuItem>
                <MenuItem value="Utilities">Utilities</MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Communication">Communication</MenuItem>
                <MenuItem value="Basic Materials">Basic Materials</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Stock Price"
              name="CurrentPrice"
              variant="outlined"
              type="number"
              inputProps={{ step: "0.01", min: '0' }}
              value={data.CurrentPrice}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              name="Country"
              variant="outlined"
              value={data.Country}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Employees"
              name="FulltimeEmployees"
              variant="outlined"
              type="number"
              value={data.FulltimeEmployees}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="controversy-label">Controversy Level</InputLabel>
              <Select
                labelId="controversy-label"
                name="ControversyLevel"
                value={data.ControversyLevel}
                onChange={handleChange}
                label="Controversy Level"
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Severe">Severe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Get Prediction
        </Button>
      </Box>
      {response && (
        <Box mt={4} bgcolor="error.main" sx={{ borderRadius: '16px' }}>
          <Typography variant="h6" color="common.white" ml={4} mt={4}>Prediction:</Typography>
          <Typography variant="body1" color="common.white" ml={4} mb={2}>{JSON.stringify(response)}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default PredictionForm;
