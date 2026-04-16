import styles from "../styles/FilterButtons.module.css";
import { useTasksContext } from "../hooks/useTasksContext";

export default function FilterButtons() {
    const { filter, setFilter } = useTasksContext();

    return (
        <div className={styles.container}>
            <button
                className={`${styles.button} ${filter === "todas" ? styles.active : ""}`}
                onClick={() => setFilter("todas")}
            >
                Todas
            </button>

            <button
                className={`${styles.button} ${filter === "pendientes" ? styles.active : ""}`}
                onClick={() => setFilter("pendientes")}
            >
                Pendientes
            </button>

            <button
                className={`${styles.button} ${filter === "hechas" ? styles.active : ""}`}
                onClick={() => setFilter("hechas")}
            >
                Hechas
            </button>
        </div>
    );
}