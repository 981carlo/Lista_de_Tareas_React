import styles from "./TaskForm.module.css";
import { useTasksContext } from "../hooks/useTasksContext";

export default function TaskForm() {
    const { addTask } = useTasksContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.task;
        addTask(input.value);
        input.value = "";
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="task"
                placeholder="Escribe una tarea"
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Añadir
            </button>
        </form>
    );
}