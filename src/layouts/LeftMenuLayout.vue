<script lang="ts" setup>
  import Aside from "@/layouts/aside/Aside.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Aside/>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .common-layout {
    height: 100%;
    width: 100%;

    :deep .el-container {
      height: 100%;
      width: 100%;
    }


  }
</style>