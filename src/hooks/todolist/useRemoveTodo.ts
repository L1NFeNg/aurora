import { Ref } from "vue";
import { Todo } from "@/types/todolist.type.ts";

export default function useRemoveTodo(todoListRef: Ref<Todo[]>) {
  const removeHandle = (todo: Todo) => {
    todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
  };
  const removeCompletedHandle = () => {
    todoListRef.value = todoListRef.value.filter(todo => !todo.completed);
  };
  return {
    removeHandle,
    removeCompletedHandle,
  };
}