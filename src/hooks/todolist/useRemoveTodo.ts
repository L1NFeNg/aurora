import { Ref } from "vue";
import { Todo } from "@/views/todolist/type.ts";

export default function useRemoveTodo(todoListRef: Ref<Todo[]>) {
  const handleRemove = (todo: Todo) => {
    todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
  };
  const handleRemoveCompleted = () => {
    todoListRef.value = todoListRef.value.filter(todo => !todo.completed);
  };
  return {
    handleRemove,
    handleRemoveCompleted,
  };
}