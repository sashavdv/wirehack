<!--:data="get?"  prop=?, width=?-->
<template>
    <div>
      <h1 class="my-24 text-center">Investments</h1>
        <p>General investments</p>
        <el-table>
            <el-table-column label="Amount">
            </el-table-column>
            <el-table-column label="Start date">
            </el-table-column>
            <el-table-column label="End date">
            </el-table-column>
            <el-table-column label="Total sum">
            </el-table-column>
            <el-table-column label="Reason">
            </el-table-column>
        </el-table>
        <p>People investments</p>
        <el-table>
            <el-table-column label="Amount">
            </el-table-column>
            <el-table-column label="Start date">
            </el-table-column>
            <el-table-column label="End date">
            </el-table-column>
            <el-table-column label="Total sum">
            </el-table-column>
            <el-table-column label="Person">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'investments-overview'
}
</script>

<style scoped>

</style>
