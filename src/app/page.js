"use client"
import { useTasks } from "../context/TasksContext"
import { TaskCard } from "@/components/TaskCard";

const Page = () => {

  const { tasks } = useTasks();

  return (

    <div className="flex justify-center">
      <div className="w-7/12">
        Home page
        { tasks && tasks.map((task) => {
          return (
            <TaskCard task={ task } key={ task.id } />
          )
        }) }

      </div>
    </div>
  )
}

export default Page