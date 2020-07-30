import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Courses.vue'),
  },
  {
    path: '/cursos/:id',
    name: 'SingleCourse',
    component: () => import('../views/SingleCourse.vue'),
  },
  {
    path: '/cursos',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
  },
  {
    name: 'pageNotFound',
    path: '*',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


export default router;
