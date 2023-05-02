"use client"
import { useTasks } from "../context/TasksContext"
import { TaskCard } from "@/components/TaskCard";

const Page = () => {

  const { tasks } = useTasks();

  return (
    <div>Home page

      { tasks.map((task) => {
        return (
          <TaskCard task={ task } key={ task.id } />
        )
      }) }

    </div>
  )
}

export default Page