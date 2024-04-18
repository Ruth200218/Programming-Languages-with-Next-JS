import Link from "next/link";
import { getServerSession } from "next-auth";


export default async function Navbar() {
    const session = await getServerSession();
    return (
        <nav className="flex justify-between items-center bg-purple-200 px-8 py-3">
            <Link className="text-black font-bold" href={"/"}>Lenguajes de Programación</Link>
            {session ? (
                <>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/addLanguage"}>Añade un nuevo Lenguaje</Link>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/dashboard/profile"}>Perfil</Link>
                    <Link className="text-white rounded-lg bg-purple-950 p-2" href={"http://localhost:3000/api/auth/signout"}>Cerrar Sesión</Link>
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