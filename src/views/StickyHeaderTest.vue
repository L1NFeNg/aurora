<script setup lang="ts">
  const codeHTMLRef = `
  <div id="others">
    <highlightjs autodetect :code="codeHTMLRef" />
  </div>
  <div class="div">
    <div id="header">
      粘性头部
    </div>
    <div id="main">
      有粘性头部的主体部分
    </div>
  </div>
  <div id="others">
    其他部分
  </div>
  `;
  const codeSCSSRef = `
  #others {
    background-color: gray;
    height: 500px;
  }

  #header {
    position: sticky;
    top: 0;
    background-color: skyblue;
    height: 200px;
  }

  #main {
    background-color: red;
    height: 500px;
  }
  `;
</script>

<template>
  <div class="container">
    <div class="left">
      <div id="others">
        其他部分
      </div>
      <div class="div">
        <div id="header">
          粘性头部
        </div>
        <div id="main">
          有粘性头部的主体部分
        </div>
      </div>
      <div id="others">
        其他部分
      </div>
    </div>
    <div class="right">
      <highlightjs autodetect :code="codeHTMLRef"/>
      <highlightjs autodetect :code="codeSCSSRef"/>
    </div>
  </div>

</template>

<style scoped lang="scss">
  @import "@/layouts/layout";

  .container {
    display: flex;
    height: 100%;
  }

  .left {
    overflow: auto;
    height: 100%;
    flex: 1;
    margin-right: 10px;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #55555570;
      border-radius: 10px;
      transition: width 600ms ease-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555555;
    }
  }

  .right {
    width: 400px;

    pre {
      margin-top: 0;
    }

    :deep .hljs {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  #others {
    background-color: gray;
    height: 500px;
  }

  #header {
    position: sticky;
    top: 0;
    background-color: skyblue;
    height: 200px;
  }

  #main {
    background-color: red;
    height: 500px;
  }
</style>