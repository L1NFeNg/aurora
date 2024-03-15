import { Ref, ref } from "vue";
import { generateId } from "@/utils/generateId.ts";

export default function useNewTodo(todoListRef: Ref<any[]>) {
  const newTodoRef = ref("");
  // 新建一个任务
  const addTodo = () => {
    const value = newTodoRef.value && newTodoRef.value.trim();
    if (!value) {
      return;
    }
    // 生成一个任务对象，将其加入到任务队列中
    const todo = {
      id: generateId(),
      title: value,
      // 任务是否完成
      completed: false,
    };
    todoListRef.value.push(todo);
    newTodoRef.value = "";
  };

  return {
    newTodoRef, addTodo
  };
}