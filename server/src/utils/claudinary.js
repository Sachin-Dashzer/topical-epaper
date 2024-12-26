import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        cb(null, 'public/files'); 
    },
    
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const fileName = timestamp + path.extname(file.originalname); 
        cb(null, fileName); 
    }
});


const upload = multer({
    storage: storage,  
    limits: { fileSize: 50 * 1024 * 1024 },  
});


async function uploadFile(file) {
    try {
        return {
            message: "File uploaded successfully",
            file: file,
        };
    } catch (error) {
        console.log("Error during file upload:", error);
        throw new Error("File upload failed");
    }
}

export { upload, uploadFile };
