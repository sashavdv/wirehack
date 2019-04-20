<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content logo">
          susu
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
            <el-dropdown @command="Profile">
              <el-button type="primary" plain  size="small">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Profile</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          <el-dropdown @command="Loans">
            <el-button type="primary" plain  size="small">
              Loans<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loans">Loans</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="Invest">
            <el-button type="primary" plain  size="small">
              Invest<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loans">Loans</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    Profile (command) {
      switch (command) {
        case 'profile':
          this.$router.push('/Profile')
          break
      }
    },
    Loans (command) {
      switch (command) {
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
    }
  }
}
</script>

<style scoped>

</style>
