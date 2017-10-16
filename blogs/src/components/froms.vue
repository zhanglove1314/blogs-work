<template>
    <div>
        sssssssssss
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
        name:"from",
        created(){
             console.log(this.$store.state.states)
        },
        methods:{
            ...mapState(["states"])
        }
}
</script>
<style>

</style>


