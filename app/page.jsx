import LanguageList from "./components/LanguageList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    session?.user ?
      <LanguageList />
      :
      <>
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-blod text-2xl">NodeJS</h2>
            <p>
              Node.js es un entorno de servidor que se ejecuta en el lenguaje de programación JavaScript.
              Permite a los desarrolladores crear aplicaciones web escalables y de alta velocidad.
              Funciona en una sola máquina y ayuda a los desarrolladores a crear y mantener aplicaciones web en tiempo real
            </p>
          </div>
        </div>
      </>
  );
}
