<template>
  <div>
    <h1 class="my-24 text-center">
      Details
    </h1>
    <el-row :gutter="10">
     <el-col :span="18">
       <el-table
         :data="paymentDetails"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="Date"
           >
           <template slot-scope="scope">
             {{ moment(scope.row.date).format('DD-MM-YYYY') }}
           </template>
         </el-table-column>
         <el-table-column
           prop="paid"
           label="Paid"
           >
         </el-table-column>
         <el-table-column
           prop="amount"
           label="Amount"
         >
         </el-table-column>
       </el-table>
     </el-col>
     <el-col :span="6">
       <h2>Next due date</h2>
     </el-col>
    </el-row>
  </div>

</template>

<script>
let d = new Date()
d.setDate(2)
d.setMonth(10)
d.setFullYear(2018)
let da = new Date()
da.setDate(10)
da.setMonth(5)
da.setFullYear(2019)
let dat = new Date()
dat.setDate(30)
dat.setMonth(1)
dat.setFullYear(2019)
export default {
  name: 'LoanDetailsPage',
  data: function () {
    return {
      paymentDetails: [{
        date: d.toString(), paid: 5000, amount: 10000
      }, {
        date: da.toString(), paid: 2000, amount: 7000
      }, {
        date: dat.toString(), paid: 6000, amount: 20000
      }],
      user: {},
      loan_id: null
    }
  },
  created () {
    if (this.$router.query) {
      if (this.$router.query.loan_id) {
        this.loan_id = this.$router.query.loan_id
      }
    }
  },
  methods: {
    getPaymentDetails () {
      const axios = require('axios')
      axios.get('loan/' + this.loan_id)
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
