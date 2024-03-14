<template>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">按钮</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  button:focus {
    outline: none; /*解决浏览器黑色边框问题*/
  }
</style>