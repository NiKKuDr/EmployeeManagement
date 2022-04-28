//root component to list the routing parts
const routes=[   
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department}
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), routes
})

/* const app = new Vue({     old version
     router
 }).$mount('#app') */


const app = Vue.createApp({})
app.use(router)
app.mount('#app')