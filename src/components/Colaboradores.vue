<template>

    <HeaderAgendamento/>

<div class="main-container"
id="main-container-usuarios"
>

<aside class="sidebar-container">
    <Sidebar/>
</aside>

<div class="userlist-container">

<div class="userlist-header">
    <p class="header-label">Colaboradores</p>


    <div class="add-button" @click="AdicionarUsuario()">
        adicionar
    </div>

</div>


  <div class="userlist">

    <div class="noUsers" v-if="users.length === 0">
        <div class="no-user-card">

            <span class="material-symbols-outlined" id="moodBad">
                mood_bad
            </span>

            <div>Ops! Parece que ainda não temos usuários.</div>
            

        </div>
    </div>
    
    <div class="user-card"
    v-for="(user, index) in users"
    >

    <div class="user-info-profilePhoto">
    <span class="material-symbols-outlined">
    account_circle
    </span>
    
    </div>

    <div class="user-info">

    <p class="user-name">{{ user.nome }}</p>

    <p class="user-email">{{ user.email }}</p>

    <p class="user-contact">{{ user.contato }}</p>
    
    </div>

    <div class="user-adress-info">
        <p>{{ user.endereço.logadouro }} {{ user.endereço.numero }}</p>
        <p>{{ user.endereço.cep }}</p>
    </div>

    <div class="button-menu-container">
        
        <div class="button-container" @click="getInformaçõesDoUsuário(index)">
            <span class="material-symbols-outlined">
            edit
            </span>  
        </div>


    <div class="button-container" @click="deletarUsuario(index)">
        <span class="material-symbols-outlined">
        delete
        </span>
    </div>                

    </div>



    </div>

  </div>

</div>

</div>


</template>

<script>
import Swal from 'sweetalert2'

import Sidebar from './Sidebar.vue';
import HeaderAgendamento from './HeaderAgendamento.vue';
import Userprofile from './Userprofile.vue';


export default{

components:{
Sidebar, HeaderAgendamento, Userprofile
},

data(){
return{
users: this.$store.state.clientes,
}
},

methods:{
AdicionarUsuario(){

    this.$router.push('cadastro')

},

getInformaçõesDoUsuário(index){

this.selectedProfile = index
this.$router.push('usuario')
},

deletarUsuario(index){
console.log(index, this.users)
this.users.splice(index, 1)
console.log(index, this.users)
},


}



}


</script>