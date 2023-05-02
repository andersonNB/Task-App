"use client"
import { createContext, useContext, useState } from 'react';
import useLocalStorage from "@/hooks/useLocalStorage";
//creamos un contexto
export const TaskContext = createContext();


//creamos un custom hook para poder utilizar
//nuestro contexto mas facilmente
export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) throw new Error("useTasks debe estar dentro del proveedor TaskContext");
    return context
}

//creamos el proveedor
export const TaskProvider = ({ children }) => {

    const [tasks, setTask] = useLocalStorage("tasks", []);
    // const [tasks, setTask] = useState();

    // useEffect(() => {
    //     setTask(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks])


    const createTask = (title, description) => {
        setTask([...tasks, {
            id: tasks.length + 1,
            title, description
        }]);
    }

    console.log("context: ", tasks)

    const deleteTask = (id) => {
        setTask([...tasks.filter(task => task.id !== id)]);
    }


    const updateTask = (id, updateTask) => {
        setTask([...tasks.map(task => task.id === id ? { ...task, ...updateTask } : task)]);
    }


    //con el atributo value en nuestro provider
    //podemos pasarle propiedades que van a utilizar
    //los demas componentes
    return (
        <TaskContext.Provider value={ { tasks, createTask, deleteTask, updateTask } } >
            { children }
        </TaskContext.Provider>
    )
}