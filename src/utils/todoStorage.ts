import { Todo } from "@/views/todolist/type.ts";

const LOCAL_KEY = "todolist";

/**
 * 获取目前所有的任务
 * @returns {any|*[]}
 */
export function fetch(): [] {
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 * 保存所有任务
 * @param todos 任务列表
 */
export function save(todos: Todo[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function filter(todoList: any[], visibility = "all") {
  if (visibility === "all") {
    return todoList;
  }
  if (visibility === "active") {
    return todoList.filter(item => !item.completed);
  }
  if (visibility === "completed") {
    return todoList.filter(item => item.completed);
  }
  throw Error("");
}