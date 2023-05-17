<template>

    <HeaderAgendamento/>

    <div class="main-container">

        <aside class="sidebar-container">
            <Sidebar/>
        </aside>

        oi eu sou a pagina de lojas
    
    </div>

</template>

<script>
import Sidebar from './Sidebar.vue';
import HeaderAgendamento from './HeaderAgendamento.vue';

export default{

components:{
    Sidebar, HeaderAgendamento
},

mounted(){
    console.log('oi mundo')
}

}


</script>