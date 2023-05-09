import {createRouter, createWebHistory} from 'vue-router'

import Calendario from "../components/Calendario.vue"
import Colaboradores from "../components/Colaboradores.vue"
import Serviços from "../components/Serviços.vue"
import Usuarios from "../components/Usuarios.vue"



const routes = [
    {
        path: '/',
        name: 'Calendario',
        component: Calendario,

    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios,
        
    },
    {
        path: '/colaboradores',
        name: 'colaboradores',
        component: Colaboradores,
        
    },
    {
        path: '/servicos',
        name: 'Serviços',
        component: Serviços,
        
    },
]

const router = createRouter({

    history: createWebHistory(),
    routes,


})

export default router