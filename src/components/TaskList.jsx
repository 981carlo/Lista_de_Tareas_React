import TaskItem from "./TaskItem";
import { useTasksContext } from "../hooks/useTasksContext";

export default function TaskList() {
    const { visibleTasks } = useTasksContext();

    if (!visibleTasks || visibleTasks.length === 0) {
        return (
            <p>No hay tareas</p>
        )
    }

    return (
        <ul>
            {visibleTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
        ))}
        </ul> 

    );
}