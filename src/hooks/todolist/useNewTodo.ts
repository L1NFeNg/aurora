import { Ref, ref } from "vue";
import { generateId } from "@/utils/generateId.ts";
import { Todo } from "@/types/todolist.type.ts";


export default function useNewTodo(todoListRef: Ref<Todo[]>) {
  const newTodoRef = ref("");
  // 新建一个任务
  const addTodo = () => {
    const value: string = newTodoRef.value && newTodoRef.value.trim();
    if (!value) {
      return;
    }
    // 生成一个任务对象，将其加入到任务队列中
    const todo: Todo = {
      id: generateId(),
      title: value,
      completed: false,
    };
    todoListRef.value.push(todo);
    newTodoRef.value = "";
  };

  return {
    newTodoRef, addTodo,
  };
}