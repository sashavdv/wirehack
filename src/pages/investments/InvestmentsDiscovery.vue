<template>
    <el-container>
        <el-aside width="200px">
            <el-card>
                <p>Search criteria</p>
                <el-form>
                    <el-form-item label="Minimum:">
                        <el-input-number v-model="form.min" min="0"></el-input-number>
                    </el-form-item>
                    <el-form-item label="Maximum:">
                        <el-input-number label="Maximum:" v-model="form.max" min="0"></el-input-number>
                    </el-form-item>
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
            </el-card>
        </el-aside>

        <!--Maak main visible na het toepassen van de filter-->
        <el-main class="items-center w-full">
            <div class="w-3\/5 h-64">
                <el-card class="box-card">
                    <div class="rounded-full h-16 mx-auto w-16 flex items-center justify-center bg-blue">Test</div>
                    <p class="text-center">Amount</p>
                    <p class="text-center">Period</p>
                    <p class="text-center">Goal</p>
                    <p class="text-center">Description</p>
                    <div class="mx-auto" style="margin: auto">
                        <el-row>
                            <el-col class="text-center" :span="12">
                                <el-button style="margin: auto" type="success">Accept</el-button>
                            </el-col>
                            <el-col class="text-center" :span="12">
                                <el-button style="margin: auto" type="danger">Decline</el-button>
                            </el-col>
                        </el-row>
                    </div>
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
