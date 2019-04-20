<template>
  <div>
    <h1 class="my-24 text-center">Home</h1>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" class="text-center">
        <el-button type="primary" class="rounded-lg px-24 text-xl" @click="borrow">Borrow</el-button>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" class="text-center">
        <el-button type="primary" class="rounded-lg px-24 text-xl" @click="invest">Invest</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  methods: {
    borrow () {
      this.$router.push({
        name: 'LoanCreate'
      })
    },
    invest () {
      this.$router.push({
        name: 'invest'
      })
    }
  }
}
</script>

<style scoped>

</style>
