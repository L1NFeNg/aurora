<script setup lang="ts">
  import { FormItemProps } from "@/types/form";

  const props = withDefaults(defineProps<FormItemProps>(), {
    title: "未设置",
  });
</script>

<template>
  <el-col :span="6">
    <div class="container">
      <label :for="props.for">
        {{ props.title }}
      </label>
      <slot></slot>
    </div>
  </el-col>
</template>

<style scoped lang="scss">

  .container {
    display: flex;
    flex-direction: column;

    label {
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      font-weight: 900;
      cursor: pointer;
      color: #666666;
      -webkit-user-drag: none;
      user-select: none;
      transition: color 600ms ease; /* 添加过渡效果 */
      &:hover {
        color: #212121;
      }
    }
  }
</style>