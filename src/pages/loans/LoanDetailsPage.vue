<template>
  <div>
    <h1 class="my-24 text-center">
      Details
    </h1>
    <el-row :gutter="10">
     <el-col :span="6">
       <el-table
         :data="paymentDetails"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="Date"
           >
         </el-table-column>
         <el-table-column
           prop="paid"
           label="Paid"
           >
         </el-table-column>
       </el-table>
     </el-col>
     <el-col :span="12">
       <!--TODO add graph-->
     </el-col>
     <el-col :span="6">
       <h2>Next due date</h2>
     </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoanDetailsPage',
  data: function () {
    return {
      paymentDetails: {},
      user: {}
    }
  },
  methods: {
    getPaymentDetails () {
      const axios = require('axios')
      axios.get('loan/' + this.user.id)
        .then((response) => {
          this.paymentDetails = response
          console.log(this.paymentDetails)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
