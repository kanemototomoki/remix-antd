import { createContext } from "react";
import { Task } from "~/types";

export type TasksContextType = {
  tasks: Task[];
  updaters?: {
    add: (task: Task) => void;
    getById: (id: number) => Task | null;
    update: (task: Task) => void;
    delete: (task: Task) => void;
  };
};
export const TasksContext = createContext<TasksContextType>({
  tasks: [],
});
