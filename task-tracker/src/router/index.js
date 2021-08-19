import { assertImportAttribute } from '@babel/types'
import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

// array com todas as rotas do projeto
const routes =[
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]
//roteador que cria o path do projeto com as rotas 
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router