<template>
    <div class="w-full text-left text-white pt-10 sm:pb-48">
      <el-row :gutter="10">
       <el-col :xs="24" :sm="24" :md="{span: 9, offset: 3}" :lg="{span: 9, offset: 3}" :xl="{span: 9, offset: 3}" class="pb-4 text-center md:text-left">
         <h3>Location</h3>
         <ul class="list-reset font-thin">
           <li>
             Avenue jules bordet 13
           </li>
           <li>
             1140 Brussels Hoofdstedelijk Gewest
           </li>
           <li>
             België
           </li>
         </ul>
       </el-col>
       <el-col :xs="24" :sm="24" :md="{span: 5, offset: 1}" :lg="{span: 5, offset: 1}" :xl="{span: 5, offset: 1}" class="pb-4 text-center md:text-left">

       </el-col>
      </el-row>
      <el-row class="bg-white pt-10 pb-4 pin-b absolute pin-x" :gutter="10">
       <el-col class="text-center text-grey-dark font-thin" :span="24">team 5 - p2p</el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  i {
    font-size: 20px;
  }

  .fa-instagram {
    padding: .5rem .6rem .5rem .6rem;
  }
</style>
