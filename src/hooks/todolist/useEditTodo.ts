import { computed, Ref, ref, watch } from "vue";
import { Todo } from "@/views/todolist/type.ts";

export default function useEditTodo(todoListRef: Ref<Todo[]>) {
  // 正在修改的是哪一个任务
  const editingTodoRef: Ref<Nullable<Todo>> = ref(null);
  // 所有的输入文本框，用于在v-for中绑定
  const editInputListRef: Ref<HTMLInputElement[]> = ref([]);

  const allDoneRef = computed(() => {
    return todoListRef.value.filter(it => !it.completed).length === 0;
  });

  let originTitle: any = null;
  const handleEditTodo = (todo: Todo, editInputRef: HTMLInputElement) => {
    // 点击后自动获取焦点
    watch(editingTodoRef, () => {
      editInputListRef.value = editInputListRef.value.map((input) => {
        if (input === editInputRef) {
          input.focus();
        }
        return input;
      });
    });
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };

  const handleDoneEdit = (todo: Todo) => {
    editingTodoRef.value = null;
    const title = todo.title.trim();
    if (title) {
      todo.title = title;
    } else {
      todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
    }
  };

  const handleCancelEdit = (todo: Todo) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };

  /**
   * 设置所有任务已完成
   * @param checked 头部控制按钮状态
   */
  const handleSetAllChecked = (checked: boolean) => {
    todoListRef.value.forEach((todo) => {
      todo.completed = checked;
    });
  };

  return {
    editingTodoRef,
    allDoneRef,
    editInputListRef,
    handleEditTodo,
    handleDoneEdit,
    handleCancelEdit,
    handleSetAllChecked,
  };
}