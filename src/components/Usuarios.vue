<template>

    <Header></Header>

    <div class="main-container"
    id="main-container-usuarios"
    >

        <aside class="sidebar-container">
            <Sidebar/>
        </aside>

       <div class="userlist-container">

        
          <div class="userlist">
            
            <div class="user-card"
            v-for="user in users"
            >

            <div class="user-info">
            <span class="material-symbols-outlined">
            account_circle
            </span>
            
            <p>{{ user.nome }}</p>

            <p>{{ user.contato }}</p>
            
            </div>


            </div>

          </div>
       
      </div>
    
    </div>

</template>

<script>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

export default{

components:{
    Sidebar, Header
},

data(){
    return{
        users: [
            {
                nome: 'zé da manga',
                contato: '(99) 99999-9999'

            },
            {
                nome: 'tonhão da capotaria',
                contato: '(99) 99999-9999'
            },
            {
                nome: 'val do sítio',
                contato: '(99) 99999-9999',
            },
            {
                nome: 'val do sítio',
                contato: '(99) 99999-9999',
            },
            {
                nome: 'val do sítio',
                contato: '(99) 99999-9999',
            },
        ],

    }
},



}


</script>