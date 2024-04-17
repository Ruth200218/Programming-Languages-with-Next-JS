"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditLanguageForm({ id, title, description }) {

    const [newLanguage, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [error, setError] = useState();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newLanguage || !newDescription) {
            alert("No puedes dejar campos vacíos");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/programmingLanguage/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newLanguage, newDescription }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                const errorData = await res.json();
                if (errorData.error) {
                    setError(errorData.erros);
                } else {
                    throw new Error("No se pudo actualizar el lenguaje");
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
                onChange={(e) => setNewTitle(e.target.value)}
                value={newLanguage}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Titulo del Lenguaje de Programación" />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Descripción del Lenguaje de Programación" />
            <button className="rounded-lg bg-amber-200 font-bold text-black py-3 px-6 w-fit">Editar</button>
        </form>
    );
}