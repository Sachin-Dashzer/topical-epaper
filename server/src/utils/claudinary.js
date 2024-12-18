import multer from "multer";
import path from "path";

// Set up the storage configuration for local file upload
const storage = multer.diskStorage({
    // Define where the file will be stored
    destination: (req, file, cb) => {
        cb(null, 'public/files'); // Save the file in the 'uploads' folder
    },
    // Define the filename with a timestamp to avoid conflicts
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const fileName = timestamp + path.extname(file.originalname); // Add extension
        cb(null, fileName); // Save the file with the new name
    }
});

// Create an upload instance with the storage configuration
const upload = multer({
    storage: storage,  // Use the storage setup defined above
    limits: { fileSize: 5 * 1024 * 1024 },  // Limit file size to 5MB
});

// Function to handle file upload (can be used in your routes)
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
