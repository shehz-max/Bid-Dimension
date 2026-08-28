import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const serviceType = formData.get('serviceType')?.toString() || 'General Engineering';
    const projectType = formData.get('projectType')?.toString() || 'Not specified';
    const location = formData.get('location')?.toString() || 'Not specified';
    const squareFootage = formData.get('squareFootage')?.toString() || 'N/A';
    const description = formData.get('description')?.toString() || 'None provided';
    const fullName = formData.get('fullName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const company = formData.get('company')?.toString() || 'N/A';
    const preferredContact = formData.get('preferredContact')?.toString() || 'email';
    const timeline = formData.get('timeline')?.toString() || 'ASAP';

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required contact fields (Name, Email, Phone).' },
        { status: 400 }
      );
    }

    // Process file attachments
    const files = formData.getAll('files') as File[];
    const attachments: Array<{ filename: string; content: Buffer }> = [];

    for (const file of files) {
      if (file && typeof file.arrayBuffer === 'function' && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'info@biddimensions.us';
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    console.log(`[Quote Submission] Received request from ${fullName} (${email}, ${phone}) — Service: ${serviceType}, Files: ${attachments.length}`);

    // Check if SMTP credentials are provided in environment
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Send Notification Email to Bid Dimensions Team
      const adminMailOptions = {
        from: `"Bid Dimensions Web Portal" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[New Project Quote] ${serviceType} — ${fullName} (${company !== 'N/A' ? company : location})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #0F172A;">
            <div style="border-bottom: 2px solid #4A8AB8; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="color: #0F172A; font-size: 22px; margin: 0 0 6px 0;">BID DIMENSIONS</h1>
              <p style="color: #4A8AB8; font-size: 13px; margin: 0; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">New Engineering & Design Proposal Request</p>
            </div>

            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
              <h2 style="font-size: 15px; color: #0F172A; margin: 0 0 12px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">Client Information</h2>
              <table style="width: 100%; font-size: 14px; line-height: 1.6;">
                <tr><td style="width: 160px; color: #64748B; font-weight: 600;">Full Name:</td><td><strong>${fullName}</strong></td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Email:</td><td><a href="mailto:${email}" style="color: #4A8AB8; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Phone:</td><td><a href="tel:${phone}" style="color: #4A8AB8; text-decoration: none;">${phone}</a></td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Company / Org:</td><td>${company}</td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Preferred Contact:</td><td style="text-transform: capitalize;">${preferredContact}</td></tr>
              </table>
            </div>

            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
              <h2 style="font-size: 15px; color: #0F172A; margin: 0 0 12px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">Project Scope & Specifications</h2>
              <table style="width: 100%; font-size: 14px; line-height: 1.6;">
                <tr><td style="width: 160px; color: #64748B; font-weight: 600;">Service Required:</td><td><span style="background-color: #EBF3FA; color: #1E3A8A; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${serviceType}</span></td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Project Type:</td><td>${projectType}</td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Location:</td><td>${location}</td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Square Footage:</td><td>${squareFootage} sq ft</td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Timeline:</td><td>${timeline}</td></tr>
                <tr><td style="color: #64748B; font-weight: 600;">Uploaded Files:</td><td><strong>${attachments.length} attachment(s)</strong></td></tr>
              </table>
            </div>

            ${
              description !== 'None provided'
                ? `
            <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
              <h2 style="font-size: 15px; color: #0F172A; margin: 0 0 8px 0;">Project Notes / Scope Description</h2>
              <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
            </div>
            `
                : ''
            }

            <div style="font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; padding-top: 14px; text-align: center;">
              Submitted on ${timestamp} (PST) via Bid Dimensions Web Portal (biddimensions.us)
            </div>
          </div>
        `,
        attachments: attachments.map((att) => ({
          filename: att.filename,
          content: att.content,
        })),
      };

      await transporter.sendMail(adminMailOptions);

      // 2. Send Client Confirmation Auto-Reply
      try {
        const clientMailOptions = {
          from: `"Bid Dimensions Engineering" <${smtpUser}>`,
          to: email,
          subject: `Quote Request Confirmation — Bid Dimensions`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #0F172A;">
              <div style="border-bottom: 2px solid #4A8AB8; padding-bottom: 16px; margin-bottom: 20px;">
                <h1 style="color: #0F172A; font-size: 20px; margin: 0 0 4px 0;">BID DIMENSIONS</h1>
                <p style="color: #4A8AB8; font-size: 12px; margin: 0; font-weight: bold; letter-spacing: 1px;">ENGINEERING & DESIGN SERVICES</p>
              </div>

              <p style="font-size: 15px; line-height: 1.6; color: #0F172A;">Dear ${fullName},</p>
              
              <p style="font-size: 14px; line-height: 1.6; color: #334155;">
                Thank you for submitting your project details for <strong>${serviceType}</strong>. Our multidisciplinary engineering team has received your request and any uploaded drawings.
              </p>

              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px; margin: 18px 0; font-size: 13px; line-height: 1.6;">
                <strong>What happens next?</strong>
                <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #475569;">
                  <li>Our licensed engineers will review your project scope and plan check requirements.</li>
                  <li>We will prepare an itemized, fixed-fee proposal within our standard 7–14 day turnaround.</li>
                  <li>If we need additional CAD/BIM files or site info, our team will reach out via ${preferredContact}.</li>
                </ul>
              </div>

              <p style="font-size: 14px; line-height: 1.6; color: #334155;">
                If your project is urgent or you need immediate PE review, feel free to call us directly at <strong>(747) 223-7815</strong> or reply directly to this email.
              </p>

              <div style="font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; padding-top: 14px; margin-top: 24px;">
                Bid Dimensions • 50-State Licensed Engineering & Design • info@biddimensions.us
              </div>
            </div>
          `,
        };

        await transporter.sendMail(clientMailOptions);
      } catch (clientMailError) {
        console.warn('Could not dispatch client auto-reply:', clientMailError);
      }
    } else {
      console.warn(
        '[Email Not Configured] SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) not found in environment. Submission logged to console.'
      );
    }

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
      { error: error.message || 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
