<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typedTarget = ref<HTMLSpanElement | null>(null)
const typedInstance = ref<Typed | null>(null)
const year = new Date().getFullYear()

onMounted(() => {
	if (!typedTarget.value) {
		return
	}
	typedInstance.value = new Typed(typedTarget.value, {
		strings: ['redbean0721.', 'from Taiwan.', 'love to build.', '......?'],
		typeSpeed: 90, // 0.9s
		loop: true,
	})
})

onBeforeUnmount(() => {
	typedInstance.value?.destroy()
	typedInstance.value = null
})
</script>

<template>
	<div class="box-content">
		<p>Hello, I'm <span ref="typedTarget"></span></p>
		<p>Age: ???</p>
		<p>Date of birth: 07-21</p>
		<p>
			Email:
			<a href="mailto:redbean0721@redbean0721.com">redbean0721@redbean0721.com</a>
		</p>
		<p>
			Contact me:
			<a
				href="https://discordapp.com/users/874506820000047124"
				target="_blank"
				rel="noreferrer"
			>
				Discord
			</a>
			|
			<a href="https://github.com/redbean0721" target="_blank" rel="noreferrer">Github</a>
			[<a href="https://github.com/redbean0721/LightPage" target="_blank" rel="noreferrer">
				This Project </a
			>]
		</p>
		<p class="muted">
			Based on
			<a href="https://github.com/LazyCreeper/LightPage" target="_blank" rel="noreferrer">
				LightPage
			</a>
			by LazyCreeper.
		</p>
		<div class="divider" style="width: 60%"></div>
		<p>Copyright &copy; 2023-{{ year }} Redbean0721 All rights reserved</p>
	</div>
</template>
