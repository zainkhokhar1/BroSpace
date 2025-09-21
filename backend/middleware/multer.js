import multer from "multer";

const storage = multer.diskStorage({
    destination: "/mnt/500gb/uploads",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 5368709120 } // for now using 5GB
}).single("file");

export default upload;