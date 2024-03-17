<script lang="ts" setup>
  import useMenuChecked from "@/hooks/menu/useMenuChecked.ts";

  const { checkedMenuRef } = useMenuChecked();
</script>

<template>
  <el-header class="el-header">
    <div class="container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="checkedMenuRef?.route">
          <span v-show="checkedMenuRef" class="item-text">{{ checkedMenuRef?.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
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

    .item-text {
      font-size: 14px;
      font-weight: 400;
      padding: 10px;
      cursor: pointer;
      color: #999999;
      user-select: none;
      -webkit-user-drag: none;

      &:hover {
        color: #333333;
        transition: color 600ms ease-out;
      }
    }
  }
</style>