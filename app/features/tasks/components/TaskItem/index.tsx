import { Card } from "antd";
import { FC } from "react";
import { Task } from "~/types";
import { NavLink } from "@remix-run/react";

type Props = {
  task: Task;
};

export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <NavLink to={`/tasks/${task.id}`} unstable_viewTransition>
      <Card
        bordered
        hoverable
        style={{
          width: 240,
          viewTransitionName: `card-${task.id}`,
          contain: "paint",
        }}
        cover={
          <img
            alt="thumbnail"
            src={task.thumbnailUrl}
            loading="lazy"
            style={{
              width: 240,
              height: 240,
              objectFit: "cover",
            }}
          />
        }
      >
        ID: {task.id}
        <br />
        Task Name: {task.taskName}
      </Card>
    </NavLink>
  );
};
