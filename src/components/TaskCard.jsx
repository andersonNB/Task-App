import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
    //este useRouter es el enrutador de next en su versión 13
    const router = useRouter();
    const { deleteTask } = useTasks();

    const handleDelete = (e) => {
        console.log(task.id)
        e.stopPropagation();

        const aceptar = window.confirm("¿Estas seguro de eliminar esta tarea?");
        if (aceptar) deleteTask(task.id);
        toast.success("Tarea eliminada exitosamente");
    }

    return (
        <div className="bg-gray-700 p-5 rounded-md shadow-md cursor-pointer hover:bg-slate-600 px-20 py-5 m-2"
            onClick={ () => router.push(`/edit/${task.id}`) }>

            <div className="flex justify-between">
                <h3>{ task.title }</h3>
                <button
                    className="bg-red-600 hover:bg-red-500 px-5 py-2 text-gray-50 rounded-md mr-3 font-bold"
                    onClick={ handleDelete } >Delete</button>
            </div>

            <p className="text-gray-300" >{ task.description }</p>
            <span className="text-gray-400 text-xs" >id: { task.id }</span>
        </div>
    )
}