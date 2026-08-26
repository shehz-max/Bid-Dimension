import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const serviceType = formData.get('serviceType');
    const projectType = formData.get('projectType');
    const location = formData.get('location');
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (!serviceType || !projectType || !location || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required form fields.' },
        { status: 400 }
      );
    }

    const files = formData.getAll('files');
    const fileCount = files.length;

    console.log(`[Quote Submitted] ${fullName} (${email}, ${phone}) — Service: ${serviceType}, Files: ${fileCount}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully. Our engineering team will review your plans within 7-14 days.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing quote submission:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
