import { Form, Input, Button } from "antd";
import { Task } from "~/types";
import { useTaskContext } from "../../useTasksContext";

export const TaskForm = () => {
  const {
    updaters: { add },
  } = useTaskContext();

  const onFinish = (values: Task) => {
    add(values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      colon
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<Task>
        label="Task Name"
        name="taskName"
        rules={[{ required: true, message: "Please input your task!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
