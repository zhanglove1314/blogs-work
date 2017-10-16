<template>
  <div class="hello">
    <div class="heads">
         <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">我的博客</el-menu-item>
            <el-submenu v-for="(i,index) in headdata" :index="i.onedata.id">
                    <template slot="title">{{i.onedata.cnname}}</template>
                    <el-menu-item  v-for="k in i.twodata" :index='k.id'>{{k.cnname}}</el-menu-item>
                    
                </el-submenu>
          </el-menu>
      </div> 
      <div class="section"></div>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex"
export default {
  name: 'index',
  data () {
    return {
      headdata:[],
      tabledata:[],
      activeIndex: '1',
    }
  },
  created(){
   if(!this.$store.state.states){
     this.$router.push({path:"/loading",query:{id:"/"}})
   } 
  },
  computed:{
    ...mapState(["states","navData","articleData_m"]),
  },
  mounted(){
    this.headdata=this.$store.state.navData;
    console.log(this.headdata)
    this.tabledata=this.$store.state.articleData_m;
  },
  methods:{
    
    ...mapMutations(["changeState"]),
     handleSelect(key, keyPath) {
        console.log(this.tabledata)
         this.tabledata.forEach(function(element) {
         }, this);
        //this.$router.push({path:"/froms",query:{id:keyPath,chuan:this.chuan}});
        
        
      },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
