<script setup lang="ts">
  import debounce from "@/utils/debounce.ts";
  import throttle from "@/utils/throttle.ts";


  const fn = (n: number) => {
    console.log("按钮点击事件触发了！" + n);
  };

  const debouncedFunction = debounce(fn, 1000);
  const throttledFunction = throttle(fn, 1000);
</script>

<template>
  <el-button v-on:click="debouncedFunction(1)">防抖</el-button>
  <el-button v-on:click="throttledFunction(2)">节流</el-button>
  <el-button v-on:click="fn(3)">普通</el-button>
</template>

<style scoped lang="scss">

</style>