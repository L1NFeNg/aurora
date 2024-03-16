<script setup lang="ts">
  import { House } from "@element-plus/icons-vue";
</script>

<template>
  <div class="aside-item">
    <el-icon :size="16" color="rgba(255,255,255,0.7)">
      <House/>
    </el-icon>
    <RouterLink to="./home">Home</RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .aside-item {
    padding: 10px 4px 10px 7px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
</style>