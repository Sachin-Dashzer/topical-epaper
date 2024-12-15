
import multer from 'multer'




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/files')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname)
    }
  })
  
  const upload = multer({ storage, })





  