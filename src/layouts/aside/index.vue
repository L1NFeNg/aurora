<script lang="ts" setup>
  import AsideMenuItem from "@/layouts/aside/aside-menu-item.vue";
  import useMenuList from "@/hooks/menu/useMenuList.ts";
  import useMenuChecked from "@/hooks/menu/useMenuChecked.ts";

  const { menuListRef } = useMenuList();
  const { checkedMenuHandle, checkedMenuRef } = useMenuChecked();
</script>

<template>
  <el-aside width="210px">
    <div class="aside-container bg-color">
      <div id="title" class="aside-item">
        <img id="title-logo" alt="Aurora" src="@/assets/svg/aurora.svg">
        <span id="title-text">Aurora</span>
      </div>
      <div class="menu-container">
        <template v-for="menu in menuListRef" v-if="menuListRef" :id="menu.id">
          <RouterLink :to="menu.route" @click="checkedMenuHandle(menu)">
            <AsideMenuItem :checked="menu===checkedMenuRef" :icon="menu.icon" :title="menu.title"></AsideMenuItem>
          </RouterLink>
        </template>
      </div>
    </div>
  </el-aside>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  a {
    color: transparent;
  }

  .aside-container {
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

  .menu-container {
    background: linear-gradient(to top, transparent, #1e3448 800px), linear-gradient(to left, #3498DB, #4b8ad3 100px);
    position: relative;
    top: 48px;
    overflow: auto;
    height: calc(100% - 48px);

    &::-webkit-scrollbar {
      width: 0;

    }
  }

  .menu-container:hover {
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #40a0ff70;
      border-radius: 10px;
      transition: width 600ms ease-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #40a0ff;
    }
  }

  #title {
    width: 210px;
    height: 48px;
    position: fixed;
    user-select: none;
    -webkit-user-drag: none;
    background-color: rgba(30, 52, 72);
  }

  #title-logo {
    width: 32px;
    height: 32px;
    user-select: none;
    -webkit-user-drag: none;
  }

  #title-text {
    color: #fff;
    margin-left: 1rem;
    font-size: 20px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont,
    Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;
  }
</style>