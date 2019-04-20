<template>
  <div>
    <h1 class="my-24 text-center">Loan</h1>
    <el-form>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="Amount to borrow:" label-width="200px">
            <el-input-number v-model="form.amount" placeholder="Enter amount..."></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Years:" label-width="200px">
            <el-select v-model="form.period">
              <el-option label="1 years" value="1"></el-option>
              <el-option label="2 years" value="2"></el-option>
              <el-option label="3 years" value="3"></el-option>
              <el-option label="5 years" value="5"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="Goal:" label-width="200px">
            <el-select v-model="form.reason" placeholder="Select">
              <el-option label="Vehicle" value="vehicle"></el-option>
              <el-option label="Marriage" value="marriage"></el-option>
              <el-option label="Business" value="business"></el-option>
              <el-option label="Medical expenses" value="medical expenses"></el-option>
              <el-option label="Major purchase" value="major purchase"></el-option>
              <el-option label="Other" value="other"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="I want to be contacted by investors:" label-width="200px">
            <el-checkbox v-model="form.chat_able"></el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="Description (optional)">
          <el-input type="textarea" v-model="form.story"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'create-loan',
  data () {
    return {
      form: {
        loaner_id: '',
        amount: '',
        period: '',
        reason: '',
        interest: 0.05,
        chat_able: false,
        story: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.form.loaner_id = this.user.user_id
      const axios = require('axios')
      axios.post('loan', this.form).then((response) => {
        this.openAlert('Loan succesvol toegevoegd.', 'success')
      })
      // this.$router.push({name: 'LoansSucces'})
    },
    openAlert (message, type) {
      switch (type) {
        case 'error':
          this.$message.error(message)
          break
        default:
          this.$message({
            message: message,
            type: type
          })
      }
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
