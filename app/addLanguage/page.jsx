"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddLanguage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState();
    const { data: session } = useSession();

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
                body: JSON.stringify({ title, description, user_id: session?.user?._doc?._id}),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                const errorData = await res.json();
                if (errorData.error) {
                    setError(errorData.erros);
                } else {
                    throw new Error("error al guardar el nuevo lenguaje");
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