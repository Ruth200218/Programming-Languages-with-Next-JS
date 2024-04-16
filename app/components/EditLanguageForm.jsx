export default function EditLanguageForm() {
    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Titulo del Lenguaje de Programación" />
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Descripción del Lenguaje de Programación" />
            <button className="rounded-lg bg-amber-200 font-bold text-black py-3 px-6 w-fit">Editar</button>
        </form>
    );
}