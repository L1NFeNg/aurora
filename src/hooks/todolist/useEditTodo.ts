import { Ref, ref } from "vue";

export default function useEditTodo(todoListRef: Ref<any[]>) {
  console.log(todoListRef);
  const editingTodoRef = ref(null); // 正在修改的是哪一个todo
  const editInputRef = ref([]); // 修改的Input
  let originTitle: any = null;
  const editTodoHandle = (todo: any) => {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };
  const doneEditHandle = () => {
    console.log("done");
    editingTodoRef.value = null;
  };
  const cancelEditHandle = (todo: any) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };
  return {
    editingTodoRef,
    editInputRef,
    editTodoHandle,
    doneEditHandle,
    cancelEditHandle
  };
}