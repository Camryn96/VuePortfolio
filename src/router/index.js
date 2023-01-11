import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     }
//   },
{
	path:'/Testimonials',
	name:'Testimonials',
	component: function(){
		return import("../views/TestimonialsView.vue")
	}
},
{
	path:'/Projects',
	name:'Projects',
	component: function(){
		return import("../views/ProjectsView.vue")
	}
},
{
	path:'/Resume',
	name:'Resume',
	component: function(){
		return import("../views/ResumeView.vue")
	}
},
{
	path:'/Contact',
	name:'Contact',
	component: function(){
		return import("../views/ContactView.vue")
	}
},
{
	path:'/About',
	name:'About',
	component: function(){
		return import("../views/AboutView.vue")
	}
},


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
