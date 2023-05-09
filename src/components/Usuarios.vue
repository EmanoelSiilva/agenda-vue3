<template>

    <Header />

    <div class="main-container">

        <aside class="sidebar-container">
            <Sidebar/>
        </aside>

        oi eu sou a pagina de usuarios
    
    </div>

</template>

<script>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

export default{

components:{
    Sidebar, Header
}

}


</script>