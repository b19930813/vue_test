
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index/Index.vue') },
      { path: 'KH', component: () => import('pages/Index/KH.vue') },
      { path: 'spot', component: () => import('pages/Index/spot.vue') },
      { path: 'food', component: () => import('pages/Index/food.vue') },
      { path: 'about', component: () => import('pages/Index/about.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
