<template>
  <div>
    <h1 class="my-24 text-center">Invest</h1>
    <el-form :inline="true" ref="form" :model="form" label-width="120px">
      <el-form-item label="Amount to invest">
        <el-input-number v-model="form.amount" :min="0" :max="40000"></el-input-number>
      </el-form-item>
      <el-form-item label="Target audience">
        <el-select class="w-full" v-model="form.target" placeholder="Target">
          <el-option label="Home improvement" value="home"></el-option>
          <el-option label="Vehicle" value="vehicle"></el-option>
          <el-option label="Marriage" value="marriage"></el-option>
          <el-option label="Studies" value="studies"></el-option>
          <el-option label="Start up" value="startup"></el-option>
          <el-option label="Medical expenses" value="medical"></el-option>
          <el-option label="Major purchase" value="major"></el-option>
          <el-option label="Other" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Period">
        <el-select v-model="form.period" @change="interest">
          <el-option label="1 years" value="1"></el-option>
          <el-option label="2 years" value="2"></el-option>
          <el-option label="3 years" value="3"></el-option>
          <el-option label="5 years" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Interest">
        <el-input disabled v-model="form.interest"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="success">Invest</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'investpage',
  data: function () {
    return {
      form: {
        amount: '',
        target: '',
        period: '',
        interest: 0
      }
    }
  },
  methods: {
    success () {
      const axios = require('axios')
      axios.post('loan', {
        loaner_id: 1,
        amount: this.form.amount,
        interest: this.form.interest,
        story: '',
        reason: this.form.target,
        chat_able: false
      })
      this.$router.push({ name: 'InvestSuccesPage' })
    },
    interest () {
      switch (this.form.period) {
        case '1':
          this.form.interest = 2
          break
        case '2':
          this.form.interest = 2.5
          break
        case '3':
          this.form.interest = 3
          break
        case '5':
          this.form.interest = 4
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
