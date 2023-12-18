import { NavLink, useParams } from "@remix-run/react";
import { Button } from "antd";
import { TaskDetail } from "~/features/tasks/components/TaskDetail";
import { useTaskContext } from "~/features/tasks/useTasksContext";

export default function Page() {
  const { taskId } = useParams();
  const {
    updaters: { getById },
  } = useTaskContext();

  const task = taskId && getById(Number(taskId));

  return (
    <>
      <NavLink to="/tasks" unstable_viewTransition>
        <Button type="text" block>
          戻る
        </Button>
      </NavLink>
      {task ? <TaskDetail task={task} /> : <p>Task not found</p>}
    </>
  );
}

Page.displayName = "TaskDetailPage";
