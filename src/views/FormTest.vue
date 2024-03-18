<script setup lang="ts">

  import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";
</script>

<template>
  <h1>表单控件测试</h1>
  <div class="mb-4">
    <h4>按钮</h4>
    <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL" :disabled="false">刷新</Button>
    <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL" :disabled="false">新增</Button>
    <Button :autoDisableMode="ButtonAutoDisableModeEnum.ONCE" :disabled="false">审核</Button>
    <Button :hidden="true">驳回</Button>
    <Button :hidden="true">隐藏</Button>
    <Button :autoDisableMode="ButtonAutoDisableModeEnum.ONCE">删除</Button>
    <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL">间歇可点击</Button>
  </div>
</template>

<style scoped lang="scss">

</style>