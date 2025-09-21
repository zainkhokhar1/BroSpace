import mongoose from "mongoose";

// contains both files and folders in it.
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["file", "folder"],
        required: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
        default: null
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    size: {
        type: Number,
        default: 0
    },
    mimetype: {
        type: String,
        default: null
    },
    extension: {
        type: String,
        default: null
    },
    storagePath: {
        type: String,
        default: null
    },
    checksum: {
        type: String, // for integrity or deduplication
        default: null
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const File = mongoose.model("File", fileSchema);
export default File;