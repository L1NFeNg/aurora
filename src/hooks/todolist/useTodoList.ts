import { Ref, ref, watchEffect } from "vue";
import * as todoStorage from "@/utils/todoStorage.ts";
import { Todo } from "@/types/todolist.type.ts";

export default function useTodoList() {
  const todoListRef: Ref<Todo[]> = ref(todoStorage.fetch());

  watchEffect(() => {
    todoStorage.save(todoListRef.value);
  });

  return {
    todoListRef,
  };
}