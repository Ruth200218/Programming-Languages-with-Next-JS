import mongoose, { Schema } from "mongoose";

// user_id | tile | description | createdAt | updatedAt

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
            match: [
                /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/, 
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
