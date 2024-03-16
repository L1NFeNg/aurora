<script setup lang="ts">
  import Aside from "@/layouts/aside/index.vue";
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

<style scoped lang="scss">
  .common-layout {
    height: 100%;
    width: 100%;

    :deep .el-container {
      height: 100%;
      width: 100%;
    }


  }
</style>