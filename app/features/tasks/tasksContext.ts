import { createContext } from "react";
import { Task } from "~/types";

export type TasksContextType = {
  tasks: Task[];
};
export const TasksContext = createContext<TasksContextType>({ tasks: [] });
