import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);

  // Create a transporter with more secure configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Email options
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: 'shahrairniloy14@gmail.com',
    subject: `New message from ${name} (${email})`,
    text: message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to send message',
      details: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}