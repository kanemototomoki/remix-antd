import { Image } from "antd";
import { FC } from "react";
import { Task } from "~/types";

type Props = {
  task: Task;
};

export const TaskDetail: FC<Props> = ({ task }) => {
  return (
    <div>
      <Image
        src={task.thumbnailUrl}
        style={{
          width: 500,
          viewTransitionName: `card-${task.id}`,
          contain: "paint",
        }}
      ></Image>
      <p>ID: {task.id}</p>
      <p>taskName: {task.taskName}</p>
    </div>
  );
};
