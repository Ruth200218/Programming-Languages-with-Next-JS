import mongoose, { Schema } from "mongoose";

const languangeSchema = new Schema (
    {
    title: String,
    description: String,
    },
    {
        timestamps: true,
    }
);

const Language = mongoose.models.Language || mongoose.model("Language", languangeSchema)

export default Language;
