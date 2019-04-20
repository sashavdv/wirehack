<template>
  <div>
    <el-row :gutter="10">
     <el-col :span="6">
       <el-table
         :data="paymentDetails"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="Date"
           width="180">
         </el-table-column>
         <el-table-column
           prop="paid"
           label="Paid"
           width="180">
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
      axios.get('loaners/loans/details/' + this.user.id)
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
