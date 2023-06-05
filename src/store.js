import { createStore } from 'vuex';

const store = createStore({
    state:{
        clientes: [],
    },
    
    mutations: {
        adicionarCliente( state, cliente){
            state.clientes.push(cliente)
        }
    },
    actions:{
        adicionarCliente({commit}, cliente){
            commit('adicionarCliente', cliente)
        }
    }
})

export default store