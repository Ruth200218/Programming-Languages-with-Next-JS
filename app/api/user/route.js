import DB from "@/services/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { User } = await DB();
        const user = await User.find();
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
        if(error instanceof mongoose.Error.ValidationError) {
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