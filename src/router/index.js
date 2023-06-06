import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.Vue';
import CategoriaView from '@/views/CategoriaView.Vue';
import AutoresView from '@/views/AutoresView.Vue';
import LivrosView from '@/views/LivrosView.Vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView,
    },
    {
      path: '/autores',
      name: 'autores',
      component: AutoresView,
    },
    {
      path: '/livros',
      name: 'livros',
      component: LivrosView,
    },
  ],
});

export default router;
