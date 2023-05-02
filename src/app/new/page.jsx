"use client"
import { useEffect, useState } from "react"
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {

    const [task, setTask] = useState({ title: "", description: "" });
    const { tasks, createTask } = useTasks();
    const router = useRouter();

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find(task => task.id === Number(params.id));
            console.log(taskFound)
            if (taskFound) setTask(taskFound.title, taskFound.description);
        }
    }, [])

    const handleChange = (event) => {
        // console.log([event.target.name], event.target.value);
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!task.title || !task.description) return alert("Debes llenar todos los campos");


        if (params.id) {
            console.log("editando...")
        } else {

            createTask(task.title, task.description);
        }

        router.push('/');
    }

    return (
        <form onSubmit={ handleSubmit } >
            <input name="title" type="text" placeholder="Escribe un titulo" onChange={ handleChange } value={ task.title } />
            <textarea name="description" placeholder="Escribe una descripción" onChange={ handleChange } value={ task.description } />
            <button>Guardar</button>
        </form>
    )
}

export default Page