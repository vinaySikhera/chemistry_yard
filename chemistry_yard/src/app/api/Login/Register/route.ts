// app/api/register/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, username, password } = body;

  console.log("Received registration:", { email, username, password });

  // Simulate OTP send logic or save user
  return NextResponse.json({ status: "success", message: "User registered" });
}
