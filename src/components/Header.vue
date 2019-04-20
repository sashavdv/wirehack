<template>
  <div>
    <span id="circle"></span>
    <el-row type="flex" class="row-bg" justify="space-between" align="middle">
      <el-col :span="6" :sm="10" :xs="12" :md="8" :lg="6">
        <div class="logo">
          <router-link :to="{ path: '/' }" class="px-3 py-3 no-underline text-white rounded-lg">
            <h1 class="text-3xl">P2P Academy</h1>
          </router-link>
        </div>
      </el-col>
      <el-col :span="12">
        <router-link v-show="isLoaner()" :to="{ name: 'LoanCreate' }" class="hover:bg-primary hover:text-white px-3 py-3 text-xl no-underline text-black rounded-lg">Create loan</router-link>
        <router-link v-show="isInvestor()" :to="{ name: 'Invest' }" class="hover:bg-primary hover:text-white  px-3 py-3 text-xl no-underline text-black rounded-lg">Create investment</router-link>
      </el-col>
      <el-col :span="6" :sm="10" :xs="12" :md="8" :lg="6">
        <div class="grid-content">
          <el-button class="px-3 py-3 text-black rounded-lg" v-show="!user" type="primary" plain size="small" @click="openLoginDialog">Login</el-button>

          <el-dropdown v-show="user" @command="Profile">
              <el-button type="primary" plain  size="small">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" class="bg-primary">
                <el-dropdown-item class="bg-primary text-white" command="profile">Profile</el-dropdown-item>
                <el-dropdown-item class="bg-primary text-white" v-show="isLoaner()" command="loans">Loans</el-dropdown-item>
                <el-dropdown-item class="bg-primary text-white" v-show="isInvestor()" command="investmentsoverview">Investor</el-dropdown-item>
                <el-dropdown-item class="bg-primary text-white" command="logout">Logout</el-dropdown-item>
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
          this.$router.push({name: 'Profile'})
          break
        case 'loans':
          this.$router.push({name: 'Loans'})
          break
        case 'investmentsoverview':
          this.$router.push('/invest/overview')
          break
        case 'logout':
          this.$store.dispatch('logout')
          this.$router.push({ name: 'Home' })
          break
      }
    },
    Invest (command) {
      switch (command) {
        case 'invest':
          this.$router.push({ name: 'Invest' })
          break
      }
    },
    openLoginDialog () {
      this.$refs.loginDialog.toggleVisibility()
    },
    isInvestor () {
      if (this.user) {
        if (this.user.type === 'investor') {
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
      if (this.user) {
        if (this.user.type === 'loaner') {
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
  #circle {
    /*40 40*/
    width: 350px;
    height: 300px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    left: -75px;
    top: -50px;
    background-color: #53a8ff;
    z-index: -15;
  }
</style>
