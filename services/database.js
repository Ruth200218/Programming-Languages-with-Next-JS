import connectMongoDB from "@/libs/mongodb";

export default async function DB(){
    await connectMongoDB();
    return {
        Language: require("@/models/language").default,
        User: require("@/models/user").default,
    }
}
