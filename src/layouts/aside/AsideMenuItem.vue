<script lang="ts" setup>
  import { MenuProps } from "@/types/layout";

  const props = withDefaults(defineProps<MenuProps>(), {
    icon: "icon-dingdan",
    title: "未设置",
    checked: false,
  });
</script>

<template>
  <div id="aside-item" :class="props.checked ? 'checked' : ''">
    <i id="icon" :class="props.icon" class="iconfont"></i>
    <span id="title">{{ props.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
  $highlight-color: rgba(255, 255, 255);
  $default-color: rgba(255, 255, 255, 0.7);
  #aside-item {
    padding: 14px 24px 14px 16px;
    height: 44px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    #icon {
      font-size: 16px;
      color: $default-color;
      transition: color 600ms ease-out;
    }

    #title {
      font-size: 14px;
      color: $default-color;
      transition: color 600ms ease-out;
      margin-left: 8px;
    }
  }

  #aside-item.checked {
    background-color: rgb(9, 96, 189);

    #icon {
      color: $highlight-color;
    }

    #title {
      color: $highlight-color;
    }
  }

  #aside-item:hover {

    #icon {
      color: $highlight-color;
    }

    #title {
      color: $highlight-color;
    }
  }
</style>