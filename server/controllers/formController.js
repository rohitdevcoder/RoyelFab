// import transporter from "../config/nodemailer.js";
import Form from "../models/Form.model.js";


// Submit form : api/form/submit
export const createFormData = async (req, res)=>{
try {
    const {name,email,subject,message} = req.body;
    if(!name || !email){
        return res.status(400).json({success:false,message:"Name and Email are required"});
    }
    await Form.create({name,email,subject,message});

    // Nodemailer logic can be added here to send an email notification
    //   try {
    //         // Define the email content
    //         const mailOptions = {
    //             from: `"Royel Fab" <contact@royelfab.com>`, // Sender address
    //             to: process.env.RECEIVER_EMAIL, // Your admin email where you want to receive notifications
    //             subject: `New Contact Form Submission: ${subject || 'No Subject'}`, // Subject line
    //             html: `
    //                 <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    //                     <h2 style="color: #333;">New Form Submission</h2>
    //                     <p>You have received a new message from your website's contact form.</p>
    //                     <hr>
    //                     <p><strong>Name:</strong> ${name}</p>
    //                     <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    //                     <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
    //                     <p><strong>Message:</strong></p>
    //                     <p style="padding: 10px; border-left: 3px solid #eee;">${message}</p>
    //                 </div>
    //             ` // HTML body for a nicer look
    //         };

    //         // Send the email
    //   const info = await transporter.sendMail(mailOptions);
    //   console.log('Notification email sent successfully. Message ID:', info.messageId);

    //     } catch (emailError) {
    //         // If email sending fails, log the error but don't block the user.
    //         // The form data was already saved successfully.
    //         console.error('Error sending notification email:', emailError.message);
    //     }

    return res.status(201).json({success:true,message:"Thank you for contacting us"})
} catch (error) {
    return res.status(500).json({success:false,message:error.message})
}
}

//Get Form data : api/form/get-form
export const getFormData = async (req, res)=>{
try {
    const FormDatas = await Form.find({});
    return res.status(200).json({success:true,FormDatas})
} catch (error) {
    return res.status(500).json({success:false,message:error.message})
}
}

// Delete Form data : api/form/delete
export const deleteFormData = async (req, res)=>{
try {
    const {id} = req.body;
    await Form.findByIdAndDelete(id);
    return res.status(200).json({success:true,message:"Form data deleted successfully"})
} catch (error) {
    return res.status(500).json({success:false,message:error.message})
}
}