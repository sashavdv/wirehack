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
                Profiel<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Profiel</el-dropdown-item>
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
  name: 'Header'
}
</script>

<style scoped>

</style>
