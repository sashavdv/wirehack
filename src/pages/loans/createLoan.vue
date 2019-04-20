<template>
    <div>
        <el-form>
            Amount to borrow: <el-input placeholder="Enter amount..."></el-input>
            Months: <el-input-number v-model="months" :min="3" :max="36"></el-input-number>
            Goal: <el-select v-model="goals" placeholder="Select">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            I want to be contacted by investors: <el-checkbox v-model="contact_me">Option</el-checkbox>
        </el-form>

    </div>
</template>

<script>
export default {
    name: 'create-loan',
    data() {
        return {
            options: [{
                value: 'car',
                label: 'Car'
            }, {
                value: 'startup',
                label: 'Startup'
            }, {
                value: 'reason3',
                label: 'Reason3'
            }
            ],
            value: '',
            contact_me: true,
        }
    }
}
</script>

<style scoped>

</style>