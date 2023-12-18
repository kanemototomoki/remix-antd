import { TaskList, TaskForm } from "~/features/tasks/components";
import { container } from "./style.css";

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
