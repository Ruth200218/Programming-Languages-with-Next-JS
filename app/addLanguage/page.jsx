"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddLanguage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("No puedes dejar campos vacíos");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/programmingLanguage", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("error al guardar el nuevo lenguaje");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Titulo del Lenguaje de Programación" />
            <input
                onChange={(e) => setDescription(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Descripción del Lenguaje de Programación" />
            <button className="rounded-lg bg-lime-200 font-bold text-black py-3 px-6 w-fit">Guardar</button>
        </form>
    );
}