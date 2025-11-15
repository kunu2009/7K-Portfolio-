import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, projectType, budget, timeline, subject, message } = data;
    
    if (!name || !email || !projectType || !budget || !timeline || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // For now, log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone: data.phone || 'Not provided',
      projectType,
      budget,
      timeline,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // In production, you would do:
    // await sendEmail({ to: 'your-email@example.com', ...data });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
