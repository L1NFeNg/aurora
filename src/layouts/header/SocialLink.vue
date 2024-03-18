<script setup lang="ts">

  import { SocialLinkProps } from "@/types/layout";

  const props = withDefaults(defineProps<SocialLinkProps>(), {
    iconSize: 30,
  });
</script>

<template>
  <a :href="props.href"
     target="_blank"><i class="iconfont" :class="props.icon" :style="{fontSize:iconSize+'px'}"></i></a>
</template>

<style scoped lang="scss">
  * {
    user-select: none;
    -webkit-user-drag: none;
  }

  a {
    color: transparent;
  }

  i {
    color: #555555;
    padding: 5px 6px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: color 600ms ease-out;
  }
  i:hover{
    color: #333333;
  }
</style>
