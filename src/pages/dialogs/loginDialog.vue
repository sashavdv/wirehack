<template>
  <el-dialog title="Login" :visible.sync="visible">
      <!-- form login -->
      <el-form ref="login" :model="form">

        <!-- email -->
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="Email" type="email"/>
        </el-form-item>

        <!-- password -->
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="Wachtwoord" type="password"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" v-on:click="login">Login</el-button>
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'loginDialog',
  data: function () {
    return {
      form: {
        username: '',
        password: ''
      },
      visible: false
    }
  },
  methods: {
    login () {
      const axios = require('axios')
      axios.get('user/login', {
        params: {
          'username': this.form.username,
          'password': this.form.password
        }
      })
        .then((response) => {
          this.openAlert('Succesfully logged in ', 'success')
          this.$router.push({path: '/products', params: {actived: true}})
        })
        .catch((error) => {
          this.openAlert('Could not activate account please try again')
          console.log(error)
        })
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
    },
    toggleVisibility () {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>

</style>
