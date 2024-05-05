import mongoose, { Schema } from "mongoose";

const languangeSchema = new Schema (
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: [true, "El titulo es requerido"],
            match: [
                /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/, 
                "Titulo Inválido"
            ],
        }, 
        description:{
            type: String,
            required: [true, 'La descripción es requerida'],
        },
    },
    {
        timestamps: true,
    }
);

const Language = mongoose.models.Language || mongoose.model("Language", languangeSchema);

export default Language;
