import { createRouter, createWebHistory } from 'vue-router'

// 定義路由 (使用懶加載)
export const routes = [
	{ path: '/', name: 'Home', component: () => import('./views/Home.vue') },
	{ path: '/blog', name: 'Blog', component: () => import('./views/Blog.vue') },
	{ path: '/projects', name: 'Projects', component: () => import('./views/Projects.vue') },
]

// 創建路由器 (使用 history 模式)
const router = createRouter({
	history: createWebHistory(), // 使用 history 模式，不使用 hash
	routes,
})

export default router
