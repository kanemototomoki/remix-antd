import { Card } from "antd";
import { FC } from "react";
import { Task } from "~/types";
import { Link } from "@remix-run/react";

type Props = {
  task: Task;
};
const TaskItem: FC<Props> = ({ task }) => {
  return (
    <Link to={`/tasks/${task.id}`}>
      <Card
        title="Card title"
        bordered
        hoverable
      >
        {task.taskName}
      </Card>
    </Link>
  );
};

export default TaskItem;
