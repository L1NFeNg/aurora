export type Todo = {
  id: string,
  title: string,
  completed: boolean,
}

export type TodoFilterHash = "all" | "active" | "completed";

/**
 * VALID_HASH = ["all", "active", "completed"]
 */
export const VALID_HASH: TodoFilterHash[] = ["all", "active", "completed"];
