<template>
  <div id="app">
    <el-container>

      <el-container>
        <!-- Header-->
        <el-header class="p-6">
          <Header></Header>
        </el-header>

        <!-- Content -->
        <el-main class="mx-auto w-3/5">
          <router-view/>
        </el-main>
      </el-container>

      <!-- Basket -->

      <!-- Footer -->
      <el-footer class="bg-primary relative mt-16" height="450px">
        <el-container><Footer></Footer></el-container>
      </el-footer>
    </el-container>
  </div>

</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
