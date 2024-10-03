import {v2 as cloudinary}  from "cloudinary";
import fs from "fs"
cloudinary.config({ 
    cloud_name: 'dnencafjp', 
    api_key: '188929971722528', 
    api_secret: 'MmFtJ6791cnVkNCOoE39J1SObBk' 
  });

const   uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log("yha request hai")
     const response =  await cloudinary.uploader.upload(localFilePath , {
          resource_type : "auto"
        })
        // file has uploaded sucessfully
       console.log("file uploaded successfully" , response.url);
       fs.unlinkSync(localFilePath);
       return response;

    } catch (error) {
        console.log("error" , error)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload
    }
}

  
  export {uploadOnCloudinary}