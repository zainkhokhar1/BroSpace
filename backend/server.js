import express, { urlencoded } from "express";
import cors from "cors";
import upload from "./middleware/multer.js";
import fs from "fs/promises"

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// testing routes for now!
app.get('/', (req, res) => {
    res.send("Just chilling")
})

app.post('/upload', upload, (req, res) => {
    console.log(req.file)
    res.status(200).json({ message: "Recieved the message from the frontend side." })
})

app.get('/download', (req, res) => {
    res.download("./uploads/image-1758388273365-upload.jpg", "test-image.png", (err) => {
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
        await fs.unlink(`./uploads/${fileName}`)
        return res.status(200).json({ message: "Delete file successfully!" })
    } catch (error) {
        console.log("Error:", error.message)
        return res.status(500).json({ message: "Failed to delete the file" })
    }
})

app.listen(3000, () => {
    console.log("listening on the port 3000");

})

