"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {

    const router = useRouter();

    return (
        <header>
            <Link href="/">
                <h2>Task App</h2>
            </Link>
            <div>
                <button onClick={ () => router.push("/new") } >Añadir tarea</button>
            </div>
        </header>
    )
}

export default Navbar