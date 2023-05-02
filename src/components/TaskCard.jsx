import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";

export const TaskCard = ({ task }) => {
    //este useRouter es el enrutador de next en su versión 13
    const router = useRouter();
    const { deleteTask } = useTasks();

    const handleDelete = (e) => {
        console.log(task.id)
        e.stopPropagation();

        const aceptar = window.confirm("¿Estas seguro de eliminar esta tarea?");
        if (aceptar) deleteTask(task.id);
    }

    return (
        <div style={ { backgroundColor: "#202020", color: "white" } } onClick={ () => router.push(`/edit/${task.id}`) }>
            <h3>{ task.title }</h3>
            <button onClick={ handleDelete } >Delete</button>
            <p>{ task.description }</p>
        </div>
    )
}