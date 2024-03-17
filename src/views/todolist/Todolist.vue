<template>
  <div id="container">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input v-model="newTodoRef" autocomplete="off" autofocus class="new-todo"
               placeholder="What needs to be done?" v-on:keyup.enter="addTodo"/>
      </header>
      <section v-show="todoListRef.length>0" class="main">
        <input id="toggle-all" :checked="allDoneRef"
               type="checkbox" @input="setAllCheckedHandle(($event.target as HTMLInputElement)?.checked)"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li v-for="( todo , index ) in filteredTodoListRef" :key="todo.id"
              :class="{completed:todo.completed, editing:todo===editingTodoRef}" class="todo">
            <input ref="editInputListRef" v-model="todo.title" class="edit" type="text" v-on:blur="doneEditHandle(todo)"
                   v-on:keyup.enter="doneEditHandle(todo)" v-on:keyup.esc="cancelEditHandle(todo)"/>
            <div class="view">
              <input v-model="todo.completed" class="toggle" type="checkbox"/>
              <label v-on:dblclick="editTodoHandle(todo,editInputListRef[index])">{{ todo.title }}</label>
              <button class="destroy" v-on:click="removeHandle(todo)"></button>
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
        <button v-show="completedCountRef > 0" class="clear-completed" v-on:click="removeCompletedHandle">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import useTodoList from "@/hooks/todolist/useTodoList.ts";
  import useNewTodo from "@/hooks/todolist/useNewTodo.ts";
  import useFilter from "@/hooks/todolist/useFilter.ts";
  import useEditTodo from "@/hooks/todolist/useEditTodo.ts";
  import useRemoveTodo from "@/hooks/todolist/useRemoveTodo.ts";

  const { todoListRef } = useTodoList();
  const { newTodoRef, addTodo } = useNewTodo(todoListRef);
  const { visibilityRef, filteredTodoListRef, remainingCountRef, completedCountRef } = useFilter(todoListRef);
  const {
    editingTodoRef, allDoneRef, editInputListRef,
    editTodoHandle, doneEditHandle, cancelEditHandle, setAllCheckedHandle,
  } = useEditTodo(todoListRef);
  const { removeHandle, removeCompletedHandle } = useRemoveTodo(todoListRef);
</script>

<style lang="scss" scoped>
  #container {
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

  .todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

    .header {
      h1 {
        position: absolute;
        top: -140px;
        width: 100%;
        font-size: 80px;
        font-weight: 200;
        text-align: center;
        color: #b83f45;
        text-rendering: optimizeLegibility;
      }


      input {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

        &::-webkit-input-placeholder {
          font-style: italic;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.4);
        }

        &::-moz-placeholder {
          font-style: italic;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    .main {
      position: relative;
      z-index: 2;
      border-top: 1px solid #e6e6e6;

      #toggle-all {
        width: 1px;
        height: 1px;
        border: none; /* Mobile Safari */
        opacity: 0;
        position: absolute;
        right: 100%;
        bottom: 100%;

        + label {
          width: 60px;
          height: 34px;
          font-size: 0;
          position: absolute;
          top: -52px;
          left: -13px;
          transform: rotate(90deg);

          &:before {
            content: "❯";
            font-size: 22px;
            color: #e6e6e6;
            padding: 10px 27px 10px 27px;
          }
        }

        &:checked + label:before {
          color: #737373;
        }
      }

      .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;

        li.editing:last-child {
          margin-bottom: -1px;
        }

        .editing {
          border-bottom: none;
          padding: 0;

          .edit {
            display: block;
            width: calc(100% - 43px);
            padding: 12px 16px;
            margin: 0 0 0 43px;
          }

          .view {
            display: none;
          }
        }

        .completed label {
          color: #cdcdcd;
          text-decoration: line-through;
        }

        li {
          position: relative;
          font-size: 24px;
          border-bottom: 1px solid #ededed;

          .destroy {
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

            &:hover {
              color: #af5b5e;
            }

            &:after {
              content: "×";
            }
          }

          &:hover .destroy {
            display: block;
          }

          .edit {
            display: none;
          }

          &:last-child {
            border-bottom: none;
          }

          .toggle {
            text-align: center;
            width: 40px;
            height: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border: none;
            -webkit-appearance: none;
            appearance: none;
            opacity: 0;

            &:checked {
              + label {
                background-image: url("@/assets/svg/checked.svg");
              }
            }
          }

          label {
            word-break: break-all;
            padding: 15px 15px 15px 60px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
            font-weight: 400;
            color: #4d4d4d;
            background-image: url("@/assets/svg/unchecked.svg");
            background-repeat: no-repeat;
            background-position: center left;
          }
        }
      }
    }

    .footer {
      padding: 10px 15px;
      height: 20px;
      text-align: center;
      font-size: 15px;
      border-top: 1px solid #e6e6e6;
      box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px,
      rgb(246, 246, 246) 0 8px 0 -3px,
      rgba(0, 0, 0, 0.2) 0 9px 1px -3px,
      rgb(246, 246, 246) 0 16px 0 -6px,
      rgba(0, 0, 0, 0.2) 0 17px 2px -6px;

      .todo-count {
        float: left;
        text-align: left;

        strong {
          font-weight: 300;
          margin-right: 5px;
        }
      }

      .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        right: 0;
        left: 0;

        li {
          display: inline;

          a {
            color: inherit;
            margin: 3px;
            padding: 3px 7px;
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 3px;

            &:hover {
              border-color: rgba(175, 47, 47, 0.1);
            }
          }

          a.selected {
            border-color: rgba(175, 47, 47, 0.2);
          }
        }
      }

      .clear-completed {
        float: right;
        position: relative;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

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
  }

  .new-todo {
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

  .edit {
    @extend .new-todo;
  }


</style>