import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("todas")

  const addTask = (name) => {
      if (!name.trim()) return;
      setTasks((prev) => [
          ...prev,
          { id: Date.now(), name, done: false },
      ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
        prev.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
        )
    );
};


  const deleteTask = (id) => { 
    setTasks(prev => 
      prev.filter(task => 
        task.id !== id
      )
    ); 
  };
  

const visibleTasks = 
filter === "todas"
  ? tasks
  : filter === "pendientes"
  ? tasks.filter((task) => !task.done)
  : tasks.filter((task) => task.done);

  return {
    tasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    visibleTasks,
  };
}