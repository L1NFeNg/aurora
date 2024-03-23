<script setup lang="ts">
  import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";
  import { generateId } from "@/utils/generateId.ts";

  const itemId = generateId();
  const value = defineModel();
</script>

<template>
  <div class="form-container">
    <FormBlock title="按钮测试">
      <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL" :disabled="false">刷新</Button>
      <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL" :disabled="false">新增</Button>
      <Button :autoDisableMode="ButtonAutoDisableModeEnum.ONCE" :disabled="false">审核</Button>
      <Button :hidden="true">驳回</Button>
      <Button :hidden="true">隐藏</Button>
      <Button :autoDisableMode="ButtonAutoDisableModeEnum.ONCE">删除</Button>
      <Button :autoDisableMode="ButtonAutoDisableModeEnum.INTERVAL">间歇可点击</Button>
    </FormBlock>
    <FormBlock title="输入框测试">
      <FormItem :for="itemId" title="单据编号">
        <Input :id="itemId" v-model="value"/>
      </FormItem>
    </FormBlock>
  </div>
</template>

<style scoped lang="scss">
  @import "@/layouts/layout";

  .form-container {
    box-sizing: border-box;
    background-color: #DDE2EB;
    height: calc(100% + (2 * $el-main-padding));
    margin: -$el-main-padding;
    border: $el-main-padding solid #DDE2EB;
  }
</style>