import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const isLocal = process.env.NODE_ENV === 'development';

  if (!isLocal) {
    const content = process.env.FILE_CONTENT; // Store file content in an env variable
    if (!content) {
      return NextResponse.json(
        { content: 'No content available.' },
        { status: 404 }
      );
    }
    return NextResponse.json({ content });
  }

  const filePath = 'D:\\RegistrationOfBSA.txt'; // Local file path

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found at path: ${filePath}`);
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (err: unknown) {
    console.error('Error reading file:', err);
    return NextResponse.json(
      { error: 'Failed to read file', details: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    );
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
