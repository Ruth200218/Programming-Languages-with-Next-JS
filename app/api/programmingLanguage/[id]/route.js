import DB from "@/services/database";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function PUT(request, { params }) {
    try {        
        const { id } = params;
        const { newLanguage: title, newDescription: description } = await request.json();
        const { Language } = await DB();
        await Language.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: "Lenguaje actualizado" }, { status: 200 })
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

export async function GET(request, { params }){
    try {
        const { id } = params;
        const { Language } = await DB();
        const language = await Language.findOne({ _id: id });
        return NextResponse.json({ language }, { status: 200 });
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