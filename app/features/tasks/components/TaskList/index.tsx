import { Row, Col } from "antd";
import { TaskItem } from "../TaskItem";
import { list, wrapper } from "./style.css";
import { useTaskContext } from "../../useTasksContext";

export const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div className={wrapper}>
      <Row gutter={[8, 16]} className={list}>
        {tasks.map((task) => (
          <Col span={8} key={task.id}>
            <TaskItem task={task} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
