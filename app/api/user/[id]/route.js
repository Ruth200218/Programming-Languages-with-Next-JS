import DB from "@/services/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    try {
        const { id } = params;
        const { User } = await DB();
        const user = await User.findOne({_id: id});
        return NextResponse.json({ user }, { status: 200 } );
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