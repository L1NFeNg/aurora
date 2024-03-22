<script setup lang="ts">
  import input from "@/components/form/input/Input.vue";

  const value = defineModel();
</script>

<template>
  <input v-model="value"/>
</template>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  input {
    color: #212121;
    background-color: #fff;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 900;
    font-family: Roboto, "San Francisco", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragina Sans GB",
    "WenQuanYi Micro Hei", "microsoft yahei ui", "microsoft yahei", sans-serif;
    border: 0;
    border-bottom: 1px solid #888888;
    -webkit-user-drag: none;
    transition: border-bottom 600ms ease; /* 添加过渡效果 */

    &:hover, &:focus {
      border-bottom: 1px solid #5282F3
    }
  }
</style>