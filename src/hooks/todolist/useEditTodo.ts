import { computed, Ref, ref } from "vue";

export default function useEditTodo(todoListRef: Ref<any[]>) {
  const editingTodoRef = ref(null); // 正在修改的是哪一个todo
  const editInputRef = ref([]); // 修改的Input
  let originTitle: any = null;
  const editTodoHandle = (todo: any) => {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };
  const doneEditHandle = (todo: any) => {
    editingTodoRef.value = null;
    const title = todo.title.trim();
    if (title) {
      todo.title = title;
    } else {
      todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
    }
  };
  const cancelEditHandle = (todo: any) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };
  const allDoneRef = computed(() => {
    return todoListRef.value.filter(it => !it.completed).length === 0;
  });
  // 设置所有todo已完成
  const setAllCheckedHandle = (checked: boolean) => {
    todoListRef.value.forEach((todo) => {
      todo.completed = checked;
    });
  };
  return {
    editingTodoRef,
    editInputRef,
    allDoneRef,
    editTodoHandle,
    doneEditHandle,
    cancelEditHandle,
    setAllCheckedHandle
  };
}