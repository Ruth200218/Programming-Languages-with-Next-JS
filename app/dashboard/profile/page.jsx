"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Cargando...</p>
    }

    const { user } = session;

    return (
        <>
            <h3 className="p-4 border border-slate-300 my-3 flex justify-center gap-5">Bienvenido/a {user.first_name} {user.last_name} </h3>
            <p className="p-10 border border-slate-500 flex justify-center gap-5">
                Esta es una pequeña aplicación para agregar, editar y eliminar datos sobre los lenguajes de programación, aunque puedes añadir cualquier cosa que desees
                y utilizarlo como un bloc de notas, puedes editar la información, ponerle un título o eliminarla.
            </p>
        </>
    );

}