<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { routes } from '../router'

const navItems = computed(() =>
	routes.map((route) => ({
		label: String(route.name || ''),
		to: route.path,
		name: String(route.name || ''),
	}))
)

const route = useRoute()
const activeName = computed(() => String(route.name || ''))
</script>

<template>
	<div class="bg" aria-hidden="true"></div>
	<div class="page">
		<main class="main-box" role="main">
			<div class="main-box-inner">
				<section class="box-left">
					<img src="/img/favicon.png" alt="Avatar" title="你臭臭" />
					<h3>Redbean0721</h3>
				</section>
				<section class="box-right">
					<ul class="nav-bar">
						<li
							v-for="item in navItems"
							:key="item.to"
							class="nav-item"
							:class="{ 'nav-active': activeName === item.name }"
						>
							<RouterLink :to="item.to">{{ item.label }}</RouterLink>
						</li>
						<li class="nav-item">
							<a href="https://api.redbean0721.com" target="_blank" rel="noreferrer"
								>API</a
							>
						</li>
					</ul>

					<RouterView v-slot="{ Component }">
						<Transition name="slide-x" mode="out-in">
							<KeepAlive>
								<component :is="Component" />
							</KeepAlive>
						</Transition>
					</RouterView>
				</section>
			</div>
		</main>
	</div>
</template>
