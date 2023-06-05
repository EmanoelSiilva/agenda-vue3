<template>

    <HeaderAgendamento/>

<div class="main-container">

    <div class="sidebar-container">
        <Sidebar/>
    </div>
    
    oi aqui aparecem as informações do usuário:
    <br>
    <br>
        {{ profile }}
</div>


</template>

<script>

import HeaderAgendamento from "./HeaderAgendamento.vue";
import Sidebar from "./Sidebar.vue";


export default {
    components: { Sidebar, HeaderAgendamento },

    data() {
        return {
            profile: this.$store.state.clientes[0]
        };
    },

    methods:{
     

    },

    mounted(){
        console.log(this.profile)
    }


}


</script>