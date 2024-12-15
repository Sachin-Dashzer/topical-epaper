import { v2 as cloudinary } from 'cloudinary';

(async function() {

    cloudinary.config({ 
        cloud_name: 'dieucxvlo', 
        api_key: '745417473156293', 
        api_secret: '76kAbFIUMA6w98fl9VUcgQ1pDFo' 
    });
    
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
   
})();