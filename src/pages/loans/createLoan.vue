<template>
    <div>
        <el-form>
            <el-form-item label="Amount to borrow:">
                <el-input v-model="form.amount" placeholder="Enter amount..."></el-input>
            </el-form-item>
            <el-form-item label="Months:">
                <el-input-number v-model="form.months" :min="3" :max="36"></el-input-number>
            </el-form-item>
            <el-form-item label="Goal:">
                <el-select v-model="form.goal" placeholder="Select">
                    <el-option label="Car" value="car"></el-option>
                    <el-option label="Startup" value="startup"></el-option>
                    <el-option label="Reason3" value="reason3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="I want to be contacted by investors:">
                <el-checkbox v-model="form.contact_me"></el-checkbox>
            </el-form-item>
            <el-form-item label="Description (optional)">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
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
        amount: '',
        months: '3',
        goal: '',
        contact_me: false,
        description: ''
      },
      methods: {
        onSubmit () {
          const axios = require('axios')
          axios.post('loaners/loans', {
            form: this.form
          })
            .then((response) => {
              console.log(this.notifications)
            })
            .catch(function (error) {
              // handle error
              console.log(error)
            })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
