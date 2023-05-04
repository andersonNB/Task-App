"use client"
import { useEffect, useState } from "react"
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Page = ({ params }) => {

    // const [task, setTask] = useState({ title: "", description: "" });
    const { tasks, createTask, updateTask } = useTasks();
    const router = useRouter();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find(task => task.id === Number(params.id));
            console.log(taskFound)
            if (taskFound) setValue(taskFound.title, taskFound.description);
        }
    }, [params.id])

    // const handleChange = (event) => {
    //     // console.log([event.target.name], event.target.value);
    //     setTask({ ...task, [event.target.name]: event.target.value });
    // }

    const onSubmit = handleSubmit((data) => {
        // event.preventDefault();
        // if (!task.title || !task.description) return alert("Debes llenar todos los campos");


        if (params.id) {
            updateTask(params.id, data);
            toast.success("Tarea actualizada exitosamente");
        } else {
            createTask(data.title, data.description);
            toast.success("Tarea creada exitosamente");
        }

        router.push('/');
    })

    // console.log(task.title, task.description);

    return (
        <form onSubmit={ onSubmit } >
            <input type="text" placeholder="Escribe un titulo" { ...register("title", { required: true }) } />
            { errors.title && <span>Este campo es requerido</span> }
            <textarea placeholder="Escribe una descripción" { ...register("description", { required: true }) } />
            { errors.description && <span>Este campo es requerido</span> }
            <button>Guardar</button>
        </form>
    )
}

export default Page