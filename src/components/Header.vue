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
            <el-dropdown @command="handleCommand">
              <el-button type="primary" plain  size="small">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Profile</el-dropdown-item>
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
    handleCommand (command) {
      switch (command) {
        case 'loans':
          this.$router.push('/Loans')
          break
        case 'profile':
          this.$router.push('/Profile')
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
