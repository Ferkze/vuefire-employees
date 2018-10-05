import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import NewEmployee from '@/components/NewEmployee'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/view/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path:'/hello',
      name: 'hello-world',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
