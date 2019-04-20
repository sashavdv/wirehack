<!--:data="get?"  prop=?, width=?-->
<template>
    <div>
      <h1 class="my-24 text-center">Investments</h1>
        <p>General investments</p>
        <el-table
          :data="overview"
          style="width: 100%">
            <el-table-column label="Amount" prop="amount">
            </el-table-column>
            <el-table-column label="Start date" prop="date_start">
            </el-table-column>
            <el-table-column label="period" prop="period">
            </el-table-column>
            <!--<el-table-column label="Total sum" prop="">
            </el-table-column>
            <el-table-column label="Reason" prop="">
            </el-table-column>-->
        </el-table>
      <!--
        <p>People investments</p>
        <el-table
          :data="overview"
          style="width: 100%">
            <el-table-column label="Amount">
            </el-table-column>
            <el-table-column label="Start date">
            </el-table-column>
            <el-table-column label="End date">
            </el-table-column>
            <el-table-column label="Total sum">
            </el-table-column>
            <el-table-column label="Person">
            </el-table-column>
        </el-table>
        -->
    </div>
</template>

<script>
export default {
  name: 'investments-overview',
  data: function () {
    return {
      overview: {}
    }
  },
  created () {
    this.getOverview()
  },
  methods: {
    getOverview () {
      const axios = require('axios')
      axios.get('/investment/investor/' + this.user.user_id)
        .then((response) => {
          this.overview = response.data
          console.log(this.overview)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped>

</style>
