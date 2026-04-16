import styles from "../styles/TaskItem.module.css";
import { useTasksContext } from "../hooks/useTasksContext";

export default function TaskItem({ task }) {
    const { toggleTask, deleteTask } = useTasksContext();

    return (
        <li className={styles.taskItem}>
            <span
                className={styles.taskText}
                style={{
                    textDecoration: task.done ? "line-through" : "none",
                    opacity: task.done ? 0.4 : 1,
                }}
                onClick={() => toggleTask(task.id)}
            >
                {task.done ? "✅ " : "🔳 "}
                {task.name}
            </span>

            <button
                className={styles.button}
                onClick={() => deleteTask(task.id)}
            >
                Borrar
            </button>
        </li>
    );
}