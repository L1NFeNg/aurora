<script setup lang="ts">
  import useButtonClick from "@/hooks/form/button/useButtonClick.ts";
  import { ButtonProps } from "@/types/form";
  import { ButtonAbleModeEnum } from "@/enums/form/formEnum.ts";

  const { disableRef, handleButtonClick } = useButtonClick();

  const props = withDefaults(defineProps<ButtonProps>(), {
    ableMode: ButtonAbleModeEnum.ONCE,
    handleFunction: () => {
      console.log("defaultFunction");
    },
  });
</script>

<template>
  <button class="au-button" :class="disableRef?'disable':'able'"
          v-on:click="handleButtonClick(props.ableMode,props.handleFunction)"
          v-bind:disabled="disableRef">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .au-button {
    background-color: #5282F3;
    color: #ffffff;
    border: none;
    border-radius: 2px;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    font-size: 12px;
    min-width: 60px;
    cursor: pointer;
    transition: all 0.3s ease; /* 添加过渡效果 */
  }

  .au-button.disable {
    background-color: #C3C7CD;
    cursor: not-allowed;
  }

  .au-button.able:hover {
    transform: scale(1.1); /* 悬停时变大 */
  }

  .au-button.able:active {
    transform: scale(0.9); /* 按下时先变大 */
    transition: transform 0.1s ease; /* 添加过渡效果 */
  }

  .au-button + .au-button {
    margin-left: 5px;
  }
</style>