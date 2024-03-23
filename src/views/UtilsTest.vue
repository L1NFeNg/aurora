<script setup lang="ts">
  import debounce from "@/utils/debounce/debounce.ts";
  import throttle from "@/utils/throttle.ts";
  import { debounceRef } from "@/utils/debounce/debounceRef.ts";

  const fn = (btn: string) => {
    open(`【${btn}】按钮点击事件触发了！`);
  };
  const open = (message: string) => {
    ElMessage(message);
  };
  const input = debounceRef("", 1000);

  const debouncedFunction = debounce(fn, 1000);
  const throttledFunction = throttle(fn, 1000);
</script>

<template>
  <Button @click="debouncedFunction('防抖')">防抖</Button>
  <Button @click="throttledFunction('节流')">节流</Button>
  <Button @click="fn('普通')">普通</Button>
  <input v-model="input" style="width: 240px" placeholder="Please input"/>
  {{ input }}
</template>

<style scoped lang="scss">

</style>