<template>
    <el-container>
        <el-aside width="200px">
            <el-form>
                <el-form-item label="Goal:">
                    <el-select v-model="form.goal" placeholder="Select">
                        <el-option label="Vehicle" value="vehicle"></el-option>
                        <el-option label="Marriage" value="marriage"></el-option>
                        <el-option label="Business" value="business"></el-option>
                        <el-option label="Medical expenses" value="medical expenses"></el-option>
                        <el-option label="Major purchase" value="major purchase"></el-option>
                        <el-option label="Other" value="other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Years:">
                    <el-select v-model="form.period">
                        <el-option label="1 years" value="1"></el-option>
                        <el-option label="2 years" value="2"></el-option>
                        <el-option label="3 years" value="3"></el-option>
                        <el-option label="5 years" value="5"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onFilter">Filter</el-button>
                </el-form-item>
            </el-form>
        </el-aside>

        <el-main>
            <div class="w-3\/5 h-64">
                <el-card class="box-card">
                    <div rounded-full h-16 w-16 flex items-center justify-center>

                    </div>
                    <p>Amount</p>
                    <p>Period</p>
                    <p>Goal</p>
                    <p>Description</p>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'discover-investments-page',
  data () {
    return {
      form: {
        amount: '',
        period: '',
        goal: '',
        contact_me: false,
        description: ''
      }
    }
  },
  methods: {
    onFilter () {
      const axios = require('axios')
      axios.post('invest/success', {
        form: this.form
      })
        .then((response) => {
          this.$router.push('InvestSucces')
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
