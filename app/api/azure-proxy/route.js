import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const endpointUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;

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
