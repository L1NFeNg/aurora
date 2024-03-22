<script lang="ts" setup>
  import Aside from "@/layouts/aside/Aside.vue";
  import Header from "@/layouts/header/Header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Aside/>
      <el-container class="right">
        <Header/>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  @import "layout";

  .el-main {
    padding: $el-main-padding;

    &::-webkit-scrollbar {
      height: 7px;
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #55555570;
      border-radius: 10px;
      transition: width 600ms ease-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555555;
    }
  }

  .common-layout {
    height: 100%;
    width: 100%;

    :deep .el-container {
      height: 100%;
      width: 100%;
    }

    :deep .el-container.right {
      flex-direction: column;
    }
  }
</style>