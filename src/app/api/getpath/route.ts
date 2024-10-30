// src/app/api/getpath/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const filePath =  'D:\\RegistrationOfBSA.txt'; // Local path

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (err: unknown) {
    console.error('Error reading file:', err);
    return NextResponse.json({ error: 'Failed to read file', details: err instanceof Error ? err.message : 'Unknown error occurred' }, { status: 500 });
  }
}







// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const file = await req.json(); // Process the file from the request body
//   // You can process the file here if needed
//   return NextResponse.json({ message: 'File received', file }, { status: 200 });
// }

// export async function GET() {
//   return NextResponse.json({ message: 'GET method not implemented' }, { status: 501 });
// }
