"use client";

import mongoose from "mongoose";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";

export default function register() {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ first_name, last_name, email, password }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                const errorData = await res.json();
                if (errorData.errors) {
                    setError(errorData.errors);
                } else {
                    throw new Error(errorData.message || "Error al registrarse");
                }
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {error && <div className="text-white rounded-lg bg-red-600 px-4 py-1 w-fit">{error}</div>}
            <h3>Registrate!</h3>

            <label className="text-black rounded-lg bg-indigo-300 px-4 py-1 w-fit">Nombre</label>
            <input
                required
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese su nombre"
                name="first_name" />

            <label className="text-black rounded-lg bg-indigo-300 px-4 py-1 w-fit">Apellido</label>
            <input
                required
                onChange={(e) => setLastName(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese su apellido"
                name="last_name" />

            <label className="text-black rounded-lg bg-indigo-300 px-4 py-1 w-fit">Email</label>
            <input
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
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

            <button className="rounded-lg bg-lime-200 font-bold text-black py-3 px-6 w-fit">Registrarse</button>
        </form>
    );
}