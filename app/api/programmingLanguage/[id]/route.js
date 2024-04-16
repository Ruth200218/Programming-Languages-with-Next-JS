import connectMongoDB from "@/libs/mongodb";
import Language from "@/models/language";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {        
        const { id } = params;
        const { newLanguage: title, newDescription: description } = await request.json();
        await connectMongoDB();
        await Language.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: "Lenguaje actualizado" }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}

export async function GET(request, { params }){
    try {
        const { id } = params;
        await connectMongoDB();
        const language = await Language.findOne({ _id: id });
        return NextResponse.json({ language }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
}