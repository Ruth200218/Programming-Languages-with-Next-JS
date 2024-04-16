import { HiOutlineTrash } from "react-icons/hi";

export default function DeleteBtn() {
    return (
        <button className="text-red-700">
            <HiOutlineTrash size={24} />
        </button>
    );
}