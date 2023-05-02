"use client"
import { createContext, useContext, useState } from 'react';
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


    const [tasks, setTask] = useState([
        { id: 1, title: "Tarea 1", description: "Descripcion de la tarea 1" },
        { id: 2, title: "Tarea 2", description: "Descripcion de la tarea 2" },
        { id: 3, title: "Tarea 3", description: "Descripcion de la tarea 3" },
    ]);




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


    //con el atributo value en nuestro provider
    //podemos pasarle propiedades que van a utilizar
    //los demas componentes
    return (
        <TaskContext.Provider value={ { tasks, createTask, deleteTask } } >
            { children }
        </TaskContext.Provider>
    )
}