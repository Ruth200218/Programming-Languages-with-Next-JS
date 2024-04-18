import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: [true, "El nombre es requerido"],
            match: [
                /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/, 
                "Nombre inválido"
            ],
        },
        last_name: {
            type: String,
            required: [true, "El apellido es requerido"],
            match: [
                /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/, 
                "Apellido Inválido"
            ],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "El email es requerido"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Formato de Email inválido"
            ],
        },
        password: {
            type: String,
            required: [true, "La contraseña es requerida"],
            select: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;