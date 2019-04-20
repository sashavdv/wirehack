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
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.openAlert('Succesfully logged in', 'success')
          this.$router.push({ name: 'LoanCreate' })
          this.toggleVisibility()
        })
        .catch(err => console.log(err))
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
