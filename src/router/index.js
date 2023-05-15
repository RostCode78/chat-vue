import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login",
			component: () => import("./../views/LoginView.vue"),
		},
		{
			path: "/registro",
			name: "registro",
			component: () => import("./../views/RegistroView.vue"),
		},
		{
			path: "/chat",
			name: "chat",
			component: () => import("./../views/ChatView.vue"),
		},
	],
});

export default router;
