'use strict'

const {cloudinary} = require('../../utils/cloudinary');

class ImageController {
    async create({request, response}){
        try{
            console.log("Uploading...")
            const {base64EncodedImage} = request.all()
            const uploadedResponse = await cloudinary.uploader
            .upload(base64EncodedImage,{
                upload_preset:'dev_setups'
            })
            response.json({msg:"Success Image Upload", 
                           url:uploadedResponse["url"],
                           secure_url:uploadedResponse["secure_url"]})
            return uploadedResponse

        }catch(error){
            console.error(error);
            response.status(500).json({err:"Fail Image Upload"})
            return error
        }
    }
}

module.exports = ImageController