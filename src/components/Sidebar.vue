<template>
    <div class="sidebar" 
    :class="{ 'expanded': isExpanded }"
    @mouseenter="expandSidebar"
    @mouseleave="collapseSidebar"
    @touchstart="expandSidebar"
    @touchend="collapseSidebar"
    >
        <div 
        v-if="isExpanded" 
        class="sidebar-elements-container">
            <RouterLink to="/" class="sidebar-element">
                <div class="icon-container">
                    <span class="material-symbols-outlined">
                    calendar_month
                    </span>
                </div>

                <div class="p-sidebar-container">
                    <p>Agendamentos</p>
                </div>
            </RouterLink>

            <RouterLink to="/usuarios" class="sidebar-element">
                <div class="icon-container">
                    <span class="material-symbols-outlined">
                    person
                    </span> 
                </div>
                
                <div class="p-sidebar-container">
                        <p>Usuários</p>
                </div>
            </RouterLink>


            <RouterLink to="/colaboradores" class="sidebar-element">
            
            <div class="icon-container">
                <span class="material-symbols-outlined">
                group
                </span>
            </div> 
                <div class="p-sidebar-container">
                    <p>Colaboradores</p>
                </div>
                
                
            </RouterLink>
            
            <RouterLink to="/servicos" class="sidebar-element"> 
                
                <div class="icon-container">
                    <span class="material-symbols-outlined">
                    shopping_cart_checkout
                    </span>
                </div>
                

                <div class="p-sidebar-container">
                    <p>Serviços</p>
                </div>
                
                
            </RouterLink>
    </div>

    </div>
</template>

<script>

import '@fortawesome/fontawesome-free'


export default {

data() {
    return {
        isExpanded: false,
    }
},

methods: {

expandSidebar(){
    this.isExpanded = true},

collapseSidebar(){
    this.isExpanded = false
},

}


}

</script>