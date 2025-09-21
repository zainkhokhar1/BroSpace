import express from "express";
import cors from "cors";
import upload from "./middleware/multer.js";
import fs from "fs/promises"
import status from "express-status-monitor"
import connectDB from "./middleware/connect.mongoose.js";

// mongoose model
import File from "./models/file.model.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(status())

const HOST = '0.0.0.0';

connectDB();

// testing routes for now!
app.get('/', (req, res) => {
    res.send("Just chilling")
})

app.post('/upload', upload, async (req, res) => {
    let file = req.file;
    const { parentId, ownerId } = req.body;

    if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    if (req.file) {
        const dataToSave = {
            name: file.originalname,
            type: "file",
            parentId: parentId || null,
            ownerId: ownerId,
            size: file.size,
            mimetype: file.mimetype,
            extension: file.originalname.split('.').pop() || null,
            storagePath: file.path,
            checksum: null,
            isFavorite: false,
            isDeleted: false
        };

        let save = await File.create(dataToSave);
        if (!save) {
            return res.status(400).json({ message: "Failed to save in the DB" });
        }

        return res.status(200).json({ message: "File save successfully!" })
    }
    res.status(200).json({ message: "Recieved the message from the frontend side." })
})

app.get('/download/:name', (req, res) => {
    let { name } = req.params;
    res.download(`/mnt/500gb/uploads/${name}`, (err) => {
        if (err) {
            res.status(400).json({ message: "No file available for download" })
        }
        else {
            console.log("File downloaded sucessfully!")
        }
    })
})

app.delete('/delete', async (req, res) => {
    let fileName = req.body.fileName;
    try {
        await fs.unlink(`/mnt/500gb/uploads/${fileName}`)
        return res.status(200).json({ message: "Delete file successfully!" })
    } catch (error) {
        console.log("Error:", error.message)
        return res.status(500).json({ message: "Failed to delete the file" })
    }
})

app.listen(3000, HOST, () => {
    console.log("listening on the port 3000");

})

