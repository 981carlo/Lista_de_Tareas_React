import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
    const tasksData = useTasks();

    return (
        <TasksContext.Provider value={tasksData}>
            {children}
        </TasksContext.Provider>
    );
}

