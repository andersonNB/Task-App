"use client"
import { useTasks } from "../../context/TasksContext"

export default function Page() {

    const values = useTasks();

    console.log(values)

    return (
        <div>About - page</div>
    )
}