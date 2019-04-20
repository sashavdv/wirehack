<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content logo">
          <router-link :to="{ path: '/' }" class="px-3 py-3 no-underline text-black bg-primary rounded-bg">Home</router-link>
          <router-link v-show="isLoaner()" :to="{ path: 'LoanCreate' }" class="px-3 py-3 no-underline text-black bg-primary rounded-bg">Create loan</router-link>
          <router-link v-show="isInvestor()" :to="{ path: 'Invest' }" class="px-3 py-3 no-underline text-black bg-primary rounded-bg">Create investment</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-button class="px-3 py-3 bg-primary text-black rounded-bg" v-show="!user" type="primary" plain size="small" @click="openLoginDialog">Login</el-button>

          <el-dropdown v-show="user" @command="Profile">
              <el-button type="primary" plain  size="small">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" class="bg-primary">
                <el-dropdown-item class="bg-primary" command="profile">Profile</el-dropdown-item>
                <el-dropdown-item class="bg-primary" v-show="isLoaner()" command="loans">Loans</el-dropdown-item>
                <el-dropdown-item class="bg-primary" v-show="isInvestor()" command="loans">Investor</el-dropdown-item>
                <el-dropdown-item class="bg-primary" command="logout">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
        case 'logout':
          this.$store.dispatch('logout')
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
    },
    isInvestor () {
      if (this.$store.getters.getUser) {
        if (this.$store.getters.getUser.type === 'investor') {
          console.log('user is investor')
          return true
        } else {
          console.dir(this.user)
          return false
        }
      } else {
        console.log('user is not here')
        return false
      }
    },
    isLoaner () {
      if (this.$store.getters.getUser) {
        if (this.$store.getters.getUser.type === 'loaner') {
          console.log('user is loaner')
          return true
        } else {
          console.dir(this.user)
          return false
        }
      } else {
        console.log('user is not here')
        return false
      }
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    }
  },
  watch: {
    user: function (newVal, oldVal) {
    }
  }
}
</script>

<style scoped>

</style>
