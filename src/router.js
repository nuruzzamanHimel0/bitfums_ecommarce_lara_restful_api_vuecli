
import compFrontendmaseter from './views/frontend/frontend-master.vue'
import compHome from './views/frontend/home/home.vue'
import compLogin from './views/frontend/auth/login.vue'
import compRegister from './views/frontend/auth/register.vue'

export const routes = [
    {
    path: '/',
    name: 'fontend-master',
    component: compFrontendmaseter,
    redirect:{path:'/home'},
    children:[
      {
        path:'home',
        name:'home',
        component:compHome,
      },
      {
        path:'login',
        name:'login',
        component:compLogin,
      },
      {
        path:'register',
        name:'register',
        component:compRegister,
      },
    ]
    },
   
  ]