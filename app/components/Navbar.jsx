import Link from "next/link";
import { getServerSession } from "next-auth";
import SignOutBtn from "./SignOutBtn";

export default async function Navbar() {
    const session = await getServerSession();
    return (
        <nav className="flex justify-between items-center bg-purple-200 px-8 py-3">
            <Link className="text-black font-bold" href={"/"}>Lenguajes de Programación</Link>
            {session ? (
                <>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/addLanguage"}>Añade un nuevo Lenguaje</Link>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/dashboard/profile"}>Perfil</Link>
                    <SignOutBtn />
                </>
            ) : (
                <>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/login"}>Login</Link>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/register"}>Register</Link>
                </>
            )
            }
        </nav>
    );
}