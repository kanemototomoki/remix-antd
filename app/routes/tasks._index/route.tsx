import { container } from "./style.css";
import TaskForm from "~/ui/TaskForm";
import TaskList from "~/ui/TaskList";

export default function Tasks() {
  return (
    <>
      <div className={container}>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

Tasks.displayName = "Tasks";
