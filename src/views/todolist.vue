<!--suppress CssInvalidPseudoSelector, HtmlUnknownAnchorTarget -->
<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
          autofocus
          autocomplete="off"
          class="new-todo"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          v-on:keyup.enter="addTodo"/>
    </header>
    <section v-show="todoListRef.length>0" class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox"
             :checked="allDoneRef" @input="setAllCheckedHandle($event.target?.checked)"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li class="todo" :class="{ completed:todo.completed, editing:todo===editingTodoRef } "
            v-for="(todo) in filteredTodoListRef" :key="todo.id">
          <input v-model="todo.title" v-on:blur="doneEditHandle(todo)"
                 v-on:keyup.enter="doneEditHandle(todo)" v-on:keyup.esc="cancelEditHandle(todo)"
                 class="edit" type="text"/>
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed"/>
            <label v-on:dblclick="editTodoHandle(todo)">{{ todo.title }}</label>
            <button v-on:click="removeHandle(todo)" class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer v-show="todoListRef.length>0" class="footer">
        <span class="todo-count">
          <strong>{{ remainingCountRef }}</strong>
          <span>item{{ remainingCountRef <= 1 ? "" : "s" }} left</span>
        </span>
      <ul class="filters">
        <li><a :class="{selected:visibilityRef==='all'}" href="#/all">All</a></li>
        <li><a :class="{selected:visibilityRef==='active'}" href="#/active">Active</a></li>
        <li><a :class="{selected:visibilityRef==='completed'}" href="#/completed">Completed</a></li>
      </ul>
      <button v-on:click="removeCompletedHandle" class="clear-completed" v-show="completedCountRef > 0">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script lang="ts" setup>
  import useTodoList from "@/hooks/todolist/useTodoList";
  import useNewTodo from "@/hooks/todolist/useNewTodo";
  import useFilter from "@/hooks/todolist/useFilter";
  import useEditTodo from "@/hooks/todolist/useEditTodo.ts";
  import useRemoveTodo from "@/hooks/todolist/useRemoveTodo.ts";


  const { todoListRef } = useTodoList();
  const { newTodoRef, addTodo } = useNewTodo(todoListRef);
  const { visibilityRef, filteredTodoListRef, remainingCountRef, completedCountRef } = useFilter(todoListRef);
  const {
    editingTodoRef,
    allDoneRef,
    editTodoHandle,
    doneEditHandle,
    cancelEditHandle,
    setAllCheckedHandle,
  } = useEditTodo(todoListRef);
  const { removeHandle, removeCompletedHandle } = useRemoveTodo(todoListRef);

</script>

<style lang="css" scoped>
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #111111;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  :focus {
    outline: 0;
  }

  .todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
  }

  .todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
  }

  .todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
  }

  .todoapp h1 {
    position: absolute;
    top: -140px;
    width: 100%;
    font-size: 80px;
    font-weight: 200;
    text-align: center;
    color: #b83f45;
    text-rendering: optimizeLegibility;
  }

  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .toggle-all {
    width: 1px;
    height: 1px;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .todo-list li:last-child {
    border-bottom: none;
  }

  .todo-list li.editing {
    border-bottom: none;
    padding: 0;
  }

  .todo-list li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }

  /* 编辑状态下隐藏 */
  .todo-list li.editing .view {
    display: none;
  }

  .todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
  }

  .todo-list li .toggle {
    opacity: 0;
  }

  .todo-list li .toggle + label {
    background-image: url("@/assets/unchecked.svg");
    background-repeat: no-repeat;
    background-position: center left;
  }

  .todo-list li .toggle:checked + label {
    background-image: url("@/assets/checked.svg");
  }

  .todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-weight: 400;
    color: #4d4d4d;
  }

  .todo-list li.completed label {
    color: #cdcdcd;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: #cc9a9a;
    margin: auto 0 11px;
    transition: color 0.2s ease-out;
  }

  .todo-list li .destroy:hover {
    color: #af5b5e;
  }

  .todo-list li .destroy:after {
    content: "×";
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }

  .footer {
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
  }

  .todo-count {
    float: left;
    text-align: left;
  }

  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  .filters li {
    display: inline;
  }

  .filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .info {
    margin: 65px auto 0;
    color: #4d4d4d;
    font-size: 11px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  .info p {
    line-height: 1;
  }

  .info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  .info a:hover {
    text-decoration: underline;
  }

  .todo-count strong {
    margin-right: 5px;
  }

  .footer {
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px,
    rgb(246, 246, 246) 0 8px 0 -3px,
    rgba(0, 0, 0, 0.2) 0 9px 1px -3px,
    rgb(246, 246, 246) 0 16px 0 -6px,
    rgba(0, 0, 0, 0.2) 0 17px 2px -6px;
  }

</style>