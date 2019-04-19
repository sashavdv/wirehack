<template>
    <div>
        <el-form>
            <el-input placeholder="Enter amount..."></el-input>
            <el-select v-model="value" placeholder="Select">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "create-loan"
    }
</script>

<style scoped>

</style>