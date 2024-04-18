import { createRouter, createWebHistory } from "vue-router"

import LoginView from "../views/LoginView.vue";
import SigninView from "../views/SigninView.vue";
import FilmsView from "../views/FilmsView.vue";
import AccountView from "../views/AccountView.vue";
import NotfoundView from "../views/NotfoundView.vue";

const routes = [
    {
        path: '/',
        component: LoginView,
        name: 'login',
        alias: ['/login'],
        meta: { title: "Connexion" }
    },
    {
        path: '/signin',
        component: SigninView,
        name: 'signin',
        meta: { title: "Créer compte" }
    },
    {
        path: '/films',
        component: FilmsView,
        name: 'films',
        meta: { title: "Films" }
    },
    {
        path: '/account',
        component: AccountView,
        name: 'account',
        meta: { title: "Compte" }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notFound',
        component: NotfoundView,
        meta: { title: "Page introuvable" }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Ajouter un titre'
    next()
})

export default router