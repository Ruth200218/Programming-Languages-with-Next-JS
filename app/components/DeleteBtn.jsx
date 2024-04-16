"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
    const router = useRouter();

    const removeLanguage = async () => {
        const confirmed = confirm('¿Desea eliminar este Lenguaje?')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/programmingLanguage?id=${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeLanguage} className="text-red-700">
            <HiOutlineTrash size={24} />
        </button>
    );
}