<script setup lang="ts">
  import AsideItem from "@/layouts/aside/aside-item.vue";
</script>

<template>
  <el-aside width="210px">
    <div class="aside-container">
      <div id="title" class="aside-item">
        <img id="title-logo" src="@/assets/aurora.svg" alt="Aurora">
        <div id="title-text">
          Aurora
        </div>
      </div>
      <AsideItem></AsideItem>
      <div class="aside-item">
        <RouterLink to="./welcome">welcome</RouterLink>
      </div>
      <div class="aside-item">
        <RouterLink to="./todolist">todolist</RouterLink>
      </div>
    </div>
  </el-aside>
</template>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .aside-container {
    background-color: #001529;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;

    .aside-item {
      padding: 10px 4px 10px 7px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  }

  #title {
    height: 48px;
    user-select: none;
    -webkit-user-drag: none;
  }

  #title-logo {
    width: 32px;
    height: 32px;
    user-select: none;
    -webkit-user-drag: none;
  }

  #title-text {
    color: #fff;
    margin-left: 0.5rem;
    font-size: 16px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont,
    Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;

  }
</style>