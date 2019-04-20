<template>
  <div>
    <h1 class="my-24 text-center">Home</h1>
    <img class="pb-10 rounded-lg" src="https://131938-380190-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/11/iStock_000017288384Medium-1.jpg"/>
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
        name: 'Invest'
      })
    }
  }
}
</script>

<style scoped>

</style>
