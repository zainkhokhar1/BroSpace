import multer from "multer";

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 } // for now using 10mb
}).single("image");

export default upload;