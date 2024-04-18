import DB from "@/services/database";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request) {
    try {        
        const {title, description, user_id} = await request.json();
        const { Language } = await DB();
        await Language.create({title, description, user_id });
        return NextResponse.json({ message: "Lenguaje Creado" }, { status: 201 });
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

export async function GET(request) {
    try {
        const { Language } = await DB();
        const user_id = request.nextUrl.searchParams.get("user_id");
        const language = await Language.find({ user_id });
        return NextResponse.json({ language });
    } catch (error) {
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

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");
        const { Language } = await DB();
        await Language.findByIdAndDelete(id);
        return NextResponse.json({ message: "Lenguaje Eliminado" }, { status:200 });
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