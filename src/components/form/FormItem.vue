<script setup lang="ts">

</script>

<template>
  <div class="container">
    <label>
      编号
    </label>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;

    label {
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      font-weight: 900;
      cursor: pointer;
      color: #666666;
      -webkit-user-drag: none;
      user-select: none;
      transition: color, font-size 600ms ease; /* 添加过渡效果 */
      &:hover {
        color: #212121;
      }
    }
  }
</style>