import { lazy, Suspense } from "react";
import styles from "./styles/App.module.css";
import Header from "./components/Header";

const TaskForm = lazy(() => import("./components/TaskForm"));
const TaskList = lazy(() => import("./components/TaskList"));
const FilterButtons = lazy(() => import("./components/FilterButtons"));

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.content}>
          <Header />
          <Suspense fallback={<p>Cargando formulario...</p>}>
            <TaskForm />          
          </Suspense>
          <Suspense fallback={<p>Cargando filtros...</p>}>
            <FilterButtons />          
          </Suspense>
          <Suspense fallback={<p>Cargando tareas...</p>}>
            <TaskList />          
          </Suspense>
        </div>
      </section>
    </main> 
  )
}

export default App
