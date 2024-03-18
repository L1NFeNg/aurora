<script setup lang="ts">
  import useButtonDisable from "@/hooks/form/button/useButtonDisable.ts";
  import { ButtonProps } from "@/types/form";
  import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";

  const { disableRef, handleAutoDisable, setDisableRef } = useButtonDisable();

  const props = withDefaults(defineProps<ButtonProps>(), {
    autoDisableMode: ButtonAutoDisableModeEnum.NEVER,
    disabled: false,
    clickDuration: 600,
    hidden: false,
  });
  setDisableRef(props.disabled);

</script>

<template>
  <button class="au-button" :class="disableRef?'disable':'able'" :style="{display: hidden?'none':'inline-block'}"
          @click="handleAutoDisable(props.autoDisableMode,props.clickDuration)"
          :disabled="disableRef">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
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