"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
            });

            if (res.ok) {
                router.push("/dashboard/profile");
                router.refresh();
            } else {
                if (res?.error) {
                    return setError(res.error);
                } else {
                    throw new Error(errorData.message || "Error al Iniciar Sesión");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {error && <div className="text-white rounded-lg bg-red-600 px-4 py-1 w-fit">{error}</div>}
            <h3>Inicio de Sesión</h3>

            <label className="text-black rounded-lg bg-indigo-300 px-4 py-1 w-fit">Email</label>
            <input
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="email"
                placeholder="Ingrese su email"
                name="email" />

            <label className="text-black rounded-lg bg-indigo-300 px-4 py-1 w-fit">Contraseña</label>
            <input
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="password"
                placeholder="Ingrese su contraseña"
                name="password" />

            <button className="rounded-lg bg-lime-200 font-bold text-black py-3 px-6 w-fit">Iniciar Sesión</button>
        </form>
    );
}