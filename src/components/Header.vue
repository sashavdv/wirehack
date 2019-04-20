<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content logo">
          <router-link :to="{ path: '/' }" class="px-12 py-4 no-underline text-black">Home</router-link>
          <router-link v-if="user.type === 'loaner'" :to="{ path: 'LoanCreate' }" class="px-12 py-4 no-underline text-black">Create loan</router-link>
          <router-link v-else-if="user.type === 'investor'" :to="{ path: 'Invest' }" class="px-12 py-4 no-underline text-black">Create investment</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-button v-if="user" type="primary" plain size="small" @click="openLoginDialog">Login</el-button>

          <el-dropdown v-else @command="Profile">
              <el-button type="primary" plain  size="small">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Profile</el-dropdown-item>
                <el-dropdown-item v-if="user.type === 'loaner'" command="loans">Loans</el-dropdown-item>
                <el-dropdown-item v-else-if="user.type === 'investor'" command="loans">Loans</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          <!-- TODO User configuration
          <router-link v-if="user === 'null'" :to="{ path: '/' }" class="px-12 py-4 no-underline text-black">Login</router-link>
          <router-link v-else :to="{ path: '/' }" class="px-12 py-4 no-underline text-black">Logout</router-link>
          -->
        </div>
      </el-col>
    </el-row>
    <login-dialog ref="loginDialog"></login-dialog>
  </div>
</template>

<script>
import LoginDialog from '../pages/dialogs/loginDialog'
export default {
  name: 'Header',
  components: {
    LoginDialog
  },
  methods: {
    Profile (command) {
      switch (command) {
        case 'profile':
          this.$router.push('/Profile')
          break
        case 'loans':
          this.$router.push('/Loans')
          break
      }
    },
    Invest (command) {
      switch (command) {
        case 'invest':
          this.$router.push('/Invest')
          break
      }
    },
    openLoginDialog () {
      this.$refs.loginDialog.toggleVisibility()
    }
  },
  data: function () {
    return {
      user: {}
    }
  }
}
</script>

<style scoped>

</style>
