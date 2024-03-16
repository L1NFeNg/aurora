export type Todo = {
  id: string,
  title: string,
  completed: boolean,
}

export type TodoFilterHash = "all" | "active" | "completed";

export const validTodoFilterHash = ["all", "active", "completed"];
