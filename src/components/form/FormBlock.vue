<script setup lang="ts">

  import { FormBlockProps } from "@/types/form";

  const blockOpenedRef = ref(true);
  const props = withDefaults(defineProps<FormBlockProps>(), {
    title: "默认块名称",
  });
</script>

<template>
  <div class="block-container">
    <div class="block-header">
      <i class="iconfont" @click="blockOpenedRef=!blockOpenedRef"
         :class="blockOpenedRef?'icon-down_9':'icon-right_9'"></i>
      <span @dblclick="blockOpenedRef=!blockOpenedRef" class="block-title">{{ props.title }}</span>
    </div>
    <transition name="fade">
      <div class="block-main" v-show="blockOpenedRef">
        <el-row :gutter="10">
          <slot></slot>
        </el-row>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
  .block-container {
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .block-header {
      display: inline-block;

      .icon-right_9 {
        top: -1px;
      }

      .iconfont {
        position: relative;

        color: #212121cc;
        font-size: 14px;
        padding: 8px 10px;
        vertical-align: middle;
        cursor: pointer;

        &:hover {
          color: #212121ff;
        }
      }

      .block-title {
        height: 30px;
        line-height: 30px;

        cursor: pointer;
        color: #212121;
        user-select: none;
        -webkit-user-drag: none;
        font-size: 16px;
        font-weight: bold;
        font-family: Roboto, "San Francisco", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragina Sans GB",
        "WenQuanYi Micro Hei", "microsoft yahei ui", "microsoft yahei", sans-serif;;
      }
    }

    .block-main {
      padding: 10px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all 200ms;
    }

    .fade-enter-from, .fade-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }
  }
</style>