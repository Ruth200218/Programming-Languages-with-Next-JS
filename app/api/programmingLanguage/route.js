import connectMongoDB from "@/libs/mongodb";
import Language from "@/models/language";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Language.create({title, description});
    return NextResponse.json({message: "Lenguaje Creado" }, {status: 201});
}