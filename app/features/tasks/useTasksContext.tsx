import { useContext } from "react";
import { TasksContext } from "./TasksContext";
import { assertNonNullable } from "~/libs/assert";

export const useTaskContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TasksProvider");
  }

  assertNonNullable(context.updaters);

  return { tasks: context.tasks, updaters: context.updaters };
};
