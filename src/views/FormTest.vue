<script setup lang="ts">

  import { ButtonAbleModeEnum } from "@/enums/form/formEnum.ts";


  const fn = (n: any, event?: Event) => {
    console.log("按钮点击事件触发了！" + n);
    console.log(event);
  };

</script>

<template>
  <h1>表单控件测试</h1>
  <div class="mb-4">
    <h4>按钮</h4>
    <Button :ableMode="ButtonAbleModeEnum.ONCE" :handle-function="fn">刷新</Button>
    <Button :ableMode="ButtonAbleModeEnum.FREE" :handle-function="fn">新增</Button>
    <Button :ableMode="ButtonAbleModeEnum.ONCE" :handle-function="fn">审核</Button>
    <Button :handle-function="fn">驳回</Button>
    <Button :handle-function="fn">删除</Button>
    <Button :ableMode="ButtonAbleModeEnum.DEBOUNCE" @click="fn(1,$event)" :handle-function="()=>console.log(1)">防抖
    </Button>
    <Button :ableMode="ButtonAbleModeEnum.THROTTLE" :handle-function="fn">节流</Button>
  </div>
</template>

<style scoped lang="scss">

</style>