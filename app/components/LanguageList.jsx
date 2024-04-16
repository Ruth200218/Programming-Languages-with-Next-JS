import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { HiPencilAlt } from 'react-icons/hi';

export default function LanguageList() {
    return (
        <>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-blod text-2xl">Lenguaje de Programación</h2>
                    <div>Descripción del Lenguaje de Programación</div>
                </div>

                <div className="flex gap-2">
                    <DeleteBtn />
                    <Link className="text-amber-200" href={'/editLanguage/1'}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </>
    );
}