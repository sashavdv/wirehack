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
                    <div class="rounded-full h-16 mx-auto w-16 flex items-center justify-center bg-blue">{{ dummy.name }}</div>
                    <p id="amount" class="text-center">Amount: {{ dummy.amount }}</p>
                    <p id="period" class="text-center">Period: {{ dummy.period}}</p>
                    <p id="goal" class="text-center">Goal: {{ dummy.goal}}</p>
                    <p id="interest" class="text-center">Interest rate: {{ dummy.interest}}</p>
                    <p id="chat" class="text-center"> Chat: <el-checkbox v-model="form.chat"></el-checkbox></p>
                    <p id="story" class="text-center">Story: {{dummy.story}}</p>
                    <div class="mx-auto" style="margin: auto">
                        <el-row>
                            <el-col class="text-center" :span="12">
                                <el-button type="success" @click="onAccept">Accept</el-button>
                            </el-col>
                            <el-col class="text-center" :span="12">
                                <el-button type="danger" @click="onDecline">Decline</el-button>
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
      dummy: {
        name: 'Kaan',
        amount: 1000,
        period: '1 year',
        goal: 'Vehicle',
        interest: '2%',
        story: 'I would like to buy an electrical bicycle to get to work easier.'
      },
      form: {
        min: 1000,
        max: 10000,
        period: '1 year',
        goal: 'Vehicle',
        chat: true,
        description: ''
      }
    }
  },
  methods: {
    onFilter () {
      this.dummy.name = 'Yoren'
      this.dummy.amount = 1500
      this.dummy.period = '1 years'
      this.dummy.goal = 'Vehicle'
      this.dummy.interest = '2%'
      this.dummy.story = 'I would like to buy an electrical bicycle to get to work easier.'
      /* const axios = require('axios')
      axios.get('invest/success', {
        form: this.form
      })
        .then((response) => {
          this.$router.push('success')
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        */
    },
    onAccept () {
      this.$router.push('success')
    },
    onDecline () {
      this.dummy.name = 'Sasha'
      this.dummy.amount = 10000
      this.dummy.period = '1 year'
      this.dummy.goal = 'Startup'
      this.dummy.interest = '2%'
      this.dummy.story = 'I\'ve got a great idea for a start-up. I want to build a website that would make loaning easier.\n' +
          'If you want more information contact me on my email.'
    }
  }
}
</script>

<style scoped>
    p{margin-top: 10px; margin-bottom: 10px;}
    .flex{margin-bottom: 10px;}
</style>
