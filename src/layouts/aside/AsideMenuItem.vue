<script lang="ts" setup>
  import { Menu } from "@/layouts/aside/type.ts";

  const props = defineProps<Menu>();
</script>

<template>
  <div id="aside-item" :class="props.checked?'checked':''">
    <i id="icon" :class="props.icon?props.icon:'icon-dingdan'" class="iconfont"></i>
    <span id="title">{{ props.title ? props.title : "未命名" }}</span>
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