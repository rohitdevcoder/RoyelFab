import nodemailer from 'nodemailer'


// For example: process.env.EMAIL_USER and process.env.EMAIL_PASS
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server host (e.g., 'smtp.gmail.com')
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.USER_EMAIL, // Replace with your email address
        pass: process.env.USER_PASSWORD // Replace with your email password or an app-specific password
    },
    // Add this to prevent errors on local development
    // tls: {
    //     rejectUnauthorized: false
    // }
});

// Verify the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Nodemailer configuration error:', error.message);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});


// Export the transporter object
export default transporter;