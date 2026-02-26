<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface BlogItem {
	title: string
	link: string
}

const blogUrl = 'https://blog.redbean0721.com'
const archivePath = '/archives'

const blogs = ref<BlogItem[]>([])
const errorMessage = ref<string | null>(null)
const isLoading = ref(true)
const isScrollable = computed(() => blogs.value.length > 5)

const fetchBlogs = async () => {
	try {
		const response = await fetch(`${blogUrl}${archivePath}`)
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`)
		}
		const html = await response.text()
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, 'text/html')
		const anchors = Array.from(doc.querySelectorAll('.timeline-content > a'))
		const items = anchors
			.map((anchor) => {
				const title = (anchor.textContent || '').trim()
				const href = anchor.getAttribute('href') || ''
				return {
					title,
					link: href ? `${blogUrl}${href}` : '',
				}
			})
			.filter((item) => item.title && item.link)
		blogs.value = items.reverse()
		errorMessage.value = blogs.value.length ? null : '無法載入文章。'
	} catch (error) {
		console.error('抓取部落格內容時發生錯誤:', error)
		errorMessage.value = '載入文章時發生錯誤。'
	} finally {
		isLoading.value = false
	}
}

onMounted(() => {
	void fetchBlogs()
})
</script>

<template>
	<div class="box-content">
		<div class="blogs" :class="{ scrollable: isScrollable }">
			<p v-if="isLoading">載入中...</p>
			<p v-else-if="errorMessage">{{ errorMessage }}</p>
			<p v-for="(item, index) in blogs" :key="index" class="blog-item">
				<a :href="item.link" target="_blank" rel="noreferrer">{{ item.title }}</a>
			</p>
		</div>
	</div>
</template>
