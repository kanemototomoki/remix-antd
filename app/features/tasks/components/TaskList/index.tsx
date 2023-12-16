import { Row, Col } from "antd";
import TaskItem from "../TaskItem";
import { list, wrapper } from "./style.css";

const task = [
  {
    id: 1,
    taskName: "Task 1",
    isDone: false,
  },
  {
    id: 2,
    taskName: "Task 2",
    isDone: false,
  },
  {
    id: 3,
    taskName: "Task 3",
    isDone: false,
  },

  {
    id: 4,
    taskName: "Task 4",
    isDone: false,
  },
];

const TaskList = () => {
  return (
    <div className={wrapper}>
      <Row gutter={[8, 16]} className={list}>
        {task.map((task) => (
          <Col span={8} key={task.id}>
            <TaskItem task={task} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskList;
