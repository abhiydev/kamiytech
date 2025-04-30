import { NextResponse } from 'next/server';
import Inquiry from '@/app/db/models/Inquiry';
import dbConnect from '@/app/db/dbConnect';

export async function GET() {
  try {
    await dbConnect();

    const inquiries = await Inquiry.find({});
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    console.error('GET /api/inquiry error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    console.log('Incoming inquiry payload:', body);

    const { name, contact, requirements, message, email } = body;
    if (!name || !contact) {
      return NextResponse.json({ success: false, error: 'Name and contact are required.' }, { status: 400 });
    }

    // create inquiry including email
    const inquiry = await Inquiry.create({ name, contact, requirements, message, email });
    console.log('Saved inquiry:', inquiry);

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error('Error in POST /api/inquiry:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
