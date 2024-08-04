// app/api/azure-proxy/route.js

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const endpointUrl = 'API_KEY_HERE';
  const authToken = 'SECRET_KEY_HERE';

  try {
    const requestBody = await req.json();
    const response = await axios.post(endpointUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error proxying request:', error);
    const errorMessage = error.response?.data || error.message;
    return NextResponse.json({ error: errorMessage }, { status: error.response?.status || 500 });
  }
}
