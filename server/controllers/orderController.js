import transporter from "../config/nodemailer.js";
import Order from "../models/Order.model.js";


//Place Order :  api/order/place-order
export const placeOrder = async (req, res)=>{
    try {
        const {product_name,name,email,mobile,city,message} = req.body;
        if(!product_name || !name || !email || !mobile || !city){
            return res.status(400).json({success:false,message:"All fields are required except message"});
        }
        await Order.create({product_name,name,email,mobile,city,message});
        
        return res.status(201).json({success:true,message:"Order placed successfully"})
            // Nodemailer logic can be added here to send an email notification

            // Define the email content
            const mailOptions = {
                from: `"Royel Fab" <contact@royelfab.com>`, // Sender address
                to: process.env.RECEIVER_EMAIL, // Your admin email where you want to receive notifications
                subject: `New Order : ${product_name || 'No Product'}`, // Product name
                html: `
                    <div style="line-height: 1.6;">
                        <h2 style="color: #333;">New Order Placed</h2>
                        <p>You have received a new Order from your website's contact form.</p>
                        <hr>
                        <p><strong>Name:</strong> ${product_name}</p>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${mobile || 'Not provided'}</p>
                        <p><strong>City:</strong> ${city || 'Not provided'}</p>
                        <p><strong>Message:</strong></p>
                        <p style="padding: 10px; border-left: 3px solid #eee;">${message}</p>
                    </div>
                ` // HTML body for a nicer look
            };

            // Send the email
            // await transporter.sendMail(mailOptions);
            // console.log('Notification email sent successfully.');

        // } catch (emailError) {
        //     // If email sending fails, log the error but don't block the user.
        //     // The form data was already saved successfully.
        //     console.error('Error sending notification email:', emailError.message);
        // }
          transporter.sendMail(mailOptions)
            .then(info => {
                console.log(`Notification email sent for order by ${name}: ${info.messageId}`);
            })
            .catch(emailError => {
                // Log the error for debugging, but the user has already received a success response.
                // You could add more robust logging here (e.g., to a file or a logging service).
                console.error(`Failed to send notification email for order by ${name}:`, emailError.message);
            });

    } catch (error) {
      console.log(error.message);
      return res.status(500).json({success:false,message:error.message});  
    }
}

//Get Orders : api/order/get-orders
export const getOrders = async (req, res)=>{
    try {
       const orderDatas = await Order.find({});
       return res.status(200).json({success:true,orderDatas}) 
    } catch (error) {
      return res.status(500).json({success:false,message:error.message});  
    }
}

//Delete Order : api/order/delete
export const deleteOrder = async (req, res) =>{
    try {
        const {id} = req.body;
        await Order.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"Order deleted successfully"})
    } catch (error) {
      return res.status(500).json({success:false,message:error.message});  
    }
}