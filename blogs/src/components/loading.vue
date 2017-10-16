<template>
        <div>
           <p v-if="state=='loading'">
               数据开始请求
           </p>
           <p v-else-if="state=='loading'">
              数据正在加载
           </p>
           <p v-else-if="state=='end'">
              数据请求完毕
           </p>
        </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"loading",
    data(){
        return{
            msg:"这里是loading页面"
        }
    },
    computed:{
    //    ...mapState(["states"])
       ...mapState({
           state:function(state){
               console.log(state.states)
               console.log(state.states)
               if(state.states=='end'){
                   this.$router.push('/')
               }
               return state.states;
           }
       })
    },
    watch:{
        states(){
            // console.log(this.states)
        }
    },
    created(){
        var id=this.$route.query.id;
        this.defaultData();
    },
    methods:{  
        ...mapActions(["defaultData"])
    }
  
}
</script>
<style>

</style>


