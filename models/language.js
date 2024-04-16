import mongoose, { Schema } from "mongoose";

const languangeSchema = new Schema (
    {
        title: {
            type: String,
            required: [true, "El titulo es requerido"],
            match: [
                /^[A-Za-zñÑ\s]*$/, 
                "Titulo Inválido"
            ],
        }, 
        description:{
            type: String,
            required: [true, 'La descripción es requerida'],
            match: [
                /^[A-Za-zñÑ\s]*$/, 
                "Descripción Inválida"
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Language = mongoose.models.Language || mongoose.model("Language", languangeSchema);

export default Language;
