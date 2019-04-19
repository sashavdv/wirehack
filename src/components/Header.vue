<template>
  <div>
    <span id="circle"></span>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content logo">
          <router-link :to="{name: 'ProductList'}" >
            <img src="./../assets/logo.png" width="150px" height="150px" alt="logo"/>
          </router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
            <el-dropdown @command="handleCommand">
              <el-button type="primary" plain  size="small">
                Profiel<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <!--<span class="el-dropdown-link">
                Profiel<i class="el-icon-arrow-down el-icon--right"></i>
              </span>-->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">Profiel</el-dropdown-item>
                <el-dropdown-item command="orders">Bestellingen</el-dropdown-item>
                <el-dropdown-item command="logout">Logout</el-dropdown-item>
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
