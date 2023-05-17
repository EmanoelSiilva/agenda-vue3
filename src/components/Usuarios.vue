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
            <p class="header-label">Usuários</p>


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

                    Ops! Parece que ainda não temos usuários.

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
                
                <div class="button-container">
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

export default{

components:{
    Sidebar, HeaderAgendamento
},

data(){
    return{
        users: [
            // {
            //     nome: 'zé da manga',
            //     contato: '(99) 99999-9999',
            //     email: 'zedamanga@email.com',
            //     endereço: {

            //         numero: '69',
            //         logadouro: 'rua da manga',
            //         cep: '57073-470',

            //     }
            

            // },
            // {
            //     nome: 'tonhão da capotaria',
            //     contato: '(99) 99999-9999',
            //     email: 'toninhocapotaria@email.com',
            //     endereço: {

            //     numero: '47',
            //     logadouro: 'capotaria do tonhão',
            //     cep: '88888-888',

            //     }
            // },
            // {
            //     nome: 'val do sítio',
            //     contato: '(99) 99999-9999',
            //     email: 'piapraimara@email.com',
            //     endereço: {

            //     numero: '258',
            //     logadouro: 'sitio do val',
            //     cep: '57073-470',

            //     }
            // },

        ],

    }
},

methods:{
    AdicionarUsuario(){
    
        const newUser = {
            nome: '',
            contato:'',
            email:'',

            endereço: {
                numero: '',
                logadouro:'',
                cep:'',
            }

        }


        Swal.fire({
          html:
              
          `
          <div class="modal-container">

          <div class="mb-7">
                Adicionar Usuário
                </div>
                
                    <div class="modal-content">

                        <div class="modal-cell">

                            <div class="modal-element">

                                <div class="fw-bold">
                                    Nome:
                                </div>
                                
                                <div class="input-container">
                                    <input type="text" class="form-control" id="nomeInput"/> 
                                </div>

                            </div>

                            <div class="modal-element">

                                <div class="fw-bold">
                                    Email:
                                </div>
                                
                                <div class="input-container">

                                    <input type="text" class="form-control" id="emailInput" />
                                
                                </div>

                            </div>

                            <div class="modal-element">

                                <div class="fw-bold">
                                    Telefone:
                                </div>
                                
                                <div class="input-container">
                                    <input type="text" class="form-control" id="telefoneInput" />
                                </div>

                            </div>

                        </div>
                
                        <div class="modal-cell">

                            <div class="modal-element">

                                <div class="fw-bold">
                                    Logadouro:
                                </div>
                                
                                
                                <div class="input-container">

                                    <input type="text" class="form-control" id="logadouroInput" placeholder="rua, avenida, etc"/>
                                
                                </div>

                            </div>

                            <div class="modal-element">
                            
                                <div class="fw-bold">
                                    Numero:
                                </div>
                                
                                <div class="input-container">

                                    <input type="text" class="form-control" id="numeroInput"/>

                                </div>
                            
                            </div>

                            <div class="modal-element">
                            
                                <div class="fw-bold">
                                    CEP:
                                </div>
                            
                                <div class="input-container">

                                    <input type="text" class="form-control" id="cepInput"/>
                                
                                </div>

                            </div>

                        </div>

                    </div>
                
                </div>

                `,
          
          
          
          showCancelButton: false,
          buttonsStyling: true,
          confirmButtonText: "Adicionar",
          customClass: {
            
            popup: 'swal-popup',
            
        },

        }).then((result) => {
            if(result){
                newUser.nome = document.querySelector('#nomeInput').value
                newUser.email = document.querySelector('#emailInput').value
                newUser.contato = document.querySelector('#telefoneInput').value
                newUser.endereço.numero = document.querySelector('#numeroInput').value
                newUser.endereço.logadouro = document.querySelector('#logadouroInput').value
                newUser.endereço.cep = document.querySelector('#cepInput').value

                this.users.push(newUser)

            }
        })
    },

    deletarUsuario(index){
        console.log(index, this.users)
        this.users.splice(index, 1)
        console.log(index, this.users)
    },

    
}



}


</script>