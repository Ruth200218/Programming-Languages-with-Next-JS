import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-purple-200 px-8 py-3">
            <Link className="text-black font-bold" href={"/"}>Lenguajes de Programación</Link>
            <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/addLanguage"}>Añade un nuevo Lenguaje</Link>
            <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/login"}>Login</Link>
            <Link className="text-white rounded-lg bg-purple-950 p-2" href={"/register"}>Register</Link>
        </nav>
    );
}