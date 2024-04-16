import DB from "@/services/database";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {        
        const {title, description} = await request.json();
        const { Language } = await DB();
        await Language.create({title, description});
        return NextResponse.json({ message: "Lenguaje Creado" }, { status: 201 });
    } catch (error) {
        console.log(error);
    }
}

export async function GET() {
    try {        
        const { Language } = await DB();
        const language = await Language.find();
        return NextResponse.json({ language });
    } catch (error) {
        console.log(error);
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
    }

}