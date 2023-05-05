"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TasksContext";
const Navbar = () => {

    const router = useRouter();
    const { tasks } = useTasks();

    return (
        <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
            <Link href="/">
                <h2 className="font-bold text-3xl text-white" >Task App
                    <span className="text-sm ml-5 text-slate-300">{ tasks.length } Tareas</span>
                </h2>
            </Link>
            <div>
                <button className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 rounded-md mr-3 font-bold"
                    onClick={ () => router.push("/new") } >Añadir tarea</button>
            </div>
        </header>
    )
}

export default Navbar