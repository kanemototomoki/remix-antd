import { ReactNode, useCallback, useMemo, useState } from "react";
import { TasksContext } from "./TasksContext";
import { Task } from "~/types";
import { generateRandomNumber } from "~/libs/util";

type Props = {
  children: ReactNode;
};
export const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      taskName: "Task 1",
      isDone: false,
      thumbnailUrl: `/images/cat-${generateRandomNumber(1, 6)}.jpg`,
    },
    {
      id: 2,
      taskName: "Task 2",
      isDone: false,
      thumbnailUrl: `/images/cat-${generateRandomNumber(1, 6)}.jpg`,
    },
    {
      id: 3,
      taskName: "Task 3",
      isDone: false,
      thumbnailUrl: `/images/cat-${generateRandomNumber(1, 6)}.jpg`,
    },
    {
      id: 4,
      taskName: "Task 4",
      isDone: false,
      thumbnailUrl: `/images/cat-${generateRandomNumber(1, 6)}.jpg`,
    },
  ]);
  const add = useCallback(
    (task: Task) => {
      const id = (tasks.at(-1)?.id || 0) + 1;
      const newTask = {
        ...task,
        id,
        thumbnailUrl: `/images/cat-${generateRandomNumber(1, 6)}.jpg`,
      };
      setTasks([...tasks, newTask]);
    },
    [tasks]
  );
  const update = useCallback(
    (updatedTask: Task) => {
      setTasks(
        tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    },
    [tasks]
  );
  const deleteTask = useCallback(
    (taskToDelete: Task) => {
      setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    },
    [tasks]
  );
  const getById = useCallback(
    (id: number) => {
      return tasks.find((task) => task.id === id) || null;
    },
    [tasks]
  );

  const value = useMemo(
    () => ({
      tasks,
      updaters: {
        add,
        update,
        getById,
        delete: deleteTask,
      },
    }),
    [add, deleteTask, getById, tasks, update]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
