<script lang="ts" setup>
  import useMenuChecked from "@/hooks/menu/useMenuChecked.ts";
  import SocialLink from "@/layouts/header/SocialLink.vue";

  const { checkedMenuRef } = useMenuChecked();
</script>

<template>
  <el-header class="el-header">
    <div class="container">
      <div class="left">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="checkedMenuRef?.route">
            <span v-show="checkedMenuRef" class="item-text">{{ checkedMenuRef?.title }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="middle">

      </div>
      <div class="right">
        <SocialLink href="https://github.com/L1NFeNg/aurora" icon="icon-github-fill"/>
      </div>

    </div>
  </el-header>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .el-header {
    border-bottom: 1px solid #eee;
    height: 48px;
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex !important;
    flex-flow: row nowrap;
    align-items: center;

    .left {
      width: 200px; /* 左侧栏固定宽度 */

    }

    .middle {
      flex-grow: 1; /* 中间内容区域自适应宽度 */

    }

    .right {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      width: 200px; /* 右侧栏固定宽度 */
    }

    .item-text {
      font-size: 14px;
      font-weight: 400;
      padding: 10px;
      cursor: pointer;
      color: #555555;
      user-select: none;
      -webkit-user-drag: none;

      &:hover {
        color: #333333;
        transition: color 600ms ease-out;
      }
    }
  }
</style>