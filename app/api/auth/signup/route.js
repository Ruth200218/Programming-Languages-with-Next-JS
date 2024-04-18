import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import DB from "@/services/database";


export async function POST(request){
    try {
        const { first_name, last_name, email, password } = await request.json();
        const { User } = await DB();
        const emailFound = await User.findOne({email});
        if (emailFound) return NextResponse.json(
            {
                message: "El email ya existe"
            },
            {
                status: 409,
            }
        );

        if (password.length < 6)
            return NextResponse.json(
                {
                    message: "La contraseña no puede tener menos de 6 caracteres"
                },
                {
                    status: 400,
                }      
        );

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create(
            {
                first_name, 
                last_name, 
                email, 
                password: hashedPassword,
            }
        );
        
        return NextResponse.json( user, { message: "Usuario Registrado" }, { status: 201 })
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                {
                message: error.message,
                },
                {
                status: 400,
                }
            );
        }
        return NextResponse.error();
    }
}