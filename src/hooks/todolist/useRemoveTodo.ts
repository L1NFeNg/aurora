import { Ref } from "vue";

export default function useRemoveTodo(todoListRef: Ref<any[]>) {
  const removeHandle = (todo: any) => {
    todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
  };
  const removeCompletedHandle = () => {
    todoListRef.value = todoListRef.value.filter(todo => !todo.completed);
  };
  return {
    removeHandle,
    removeCompletedHandle
  };
}