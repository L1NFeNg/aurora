<script setup lang="ts">

</script>

<template>
  <el-row>
    <el-col :span="6">
      <div id="out-0" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="out-1" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="out-2" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div id="out-3" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="out-4" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="out-5" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="out-6" class="out">
        <div id="in-1" class="in"></div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div id="out-7" class="out">
        <div class="inner">
          <div class="in"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
  .el-row {
    margin-bottom: 10px;
  }

  .out {
    background-color: pink;
    width: 300px;
    height: 300px;

    .in {
      background-color: skyblue;
      height: 100px;
      width: 200px;
    }
  }

  #out-0 {
    .in {
      margin: 0 auto;
    }
  }

  #out-1 {
    .in {
      //vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。
      display: inline-block;
      vertical-align: middle;
    }

    &:before {
      content: "";
      line-height: 300px;
    }
  }

  #out-2 {
    line-height: 300px;
    // line-height CSS 属性用于设置多行元素的空间量，如多行文本的间距。
    // 对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非替代的 inline 元素，它用于计算行盒（line box）的高度。

    .in {
      display: inline-block;
      vertical-align: middle;
    }
  }

  #out-3 {
    position: relative;

    .in {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  #out-4 {
    position: relative;

    .in {
      position: absolute;
      top: calc(50% - 50px);
      left: calc(50% - 100px);
    }
  }

  #out-5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #out-6 {
    position: relative;

    .in {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }

  #out-7 {
    position: relative;

    .inner {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .in {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
  }
</style>