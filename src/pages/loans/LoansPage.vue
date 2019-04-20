<template>
  <div>
    <h1 class="my-24 text-center">Loans</h1>
    <el-table
      :data="loans"
      style="width: 100%"
      @current-change="loanDetails"
    >
      <el-table-column
        prop="date"
        label="Date"
        >
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Amount loaned"
        >
      </el-table-column>
      <el-table-column
        prop="paid"
        label="paid">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'LoansPage',
  data: function () {
    return {
      loans: {}
    }
  },
  methods: {
    getLoans () {
      const axios = require('axios')
      axios.get('loan/loaner/' + this.user.user_id)
        .then((response) => {
          console.log(response)
          this.loans = response
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    loanDetails () {
      this.$router.push({ path: '/loaners/loans', query: { loan_id: '' } })
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
