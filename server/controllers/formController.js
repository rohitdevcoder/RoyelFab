import Form from "../models/Form.model.js";


// Submit form : api/form/submit
export const createFormData = async (req, res)=>{
try {
    const {name,email,subject,message} = req.body;
    if(!name || !email){
        return res.status(400).json({success:false,message:"Name and Email are required"});
    }
    await Form.create({name,email,subject,message});
    return res.status(201).json({success:true,message:"Form submitted successfully"})
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