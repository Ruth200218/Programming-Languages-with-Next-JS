import EditLanguageForm from "@/app/components/EditLanguageForm";

const getLanguageById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/programmingLanguage/${id}`, { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Error al cargar los lenguajes");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditLanguage({ params }) {
    const { id } = params;
    const { language } = await getLanguageById(id);
    const { title, description } = language;
    return (
        <EditLanguageForm id={id} title={title} description={description} />
    );
}