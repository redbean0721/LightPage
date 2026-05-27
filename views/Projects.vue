<script setup lang="ts">
interface ProjectItem {
	text: string
	href?: string
	description?: string
	isFeatured?: boolean
}

interface ProjectGroup {
	title: string
	items: ProjectItem[]
}

const projectGroups: ProjectGroup[] = [
	{
		title: 'Personal Projects',
		items: [
			{
				text: 'redbean0721 blog',
				href: 'https://blog.redbean0721.com/',
				description: '個人部落格',
			},
			{
				text: 'RedMC 紅豆伺服器',
				href: 'https://redmc.xyz/',
				description: 'Minecraft 伺服器',
			},
			{
				text: 'CoolAPI',
				href: 'https://api.redbean0721.com/',
				description: 'RESTful API',
			},
		],
	},
	{
		title: 'Collaborations',
		items: [
			{
				text: 'TaiwanFRP',
				href: 'https://taiwanfrp.me/',
				description: '台灣免費 FRP 內網穿透服務',
				isFeatured: true,
			},
			{ text: 'Emm...', description: '待補充' },
		],
	},
]
</script>

<template>
	<div class="box-content">
		<div v-for="group in projectGroups" :key="group.title" class="project-group">
			<h4 class="group-title">{{ group.title }}</h4>
			<div class="project-items">
				<component
					:is="item.href ? 'a' : 'div'"
					v-for="(item, index) in group.items"
					:key="index"
					class="box-item"
					:class="{ featured: item.isFeatured }"
					:href="item.href"
					:target="item.href ? '_blank' : undefined"
					:rel="item.href ? 'noopener noreferrer' : undefined"
				>
					<div class="item-header">
						<span>{{ item.text }}</span>
						<span v-if="item.isFeatured" class="badge">Featured</span>
					</div>
					<p v-if="item.description" class="item-description">{{ item.description }}</p>
				</component>
			</div>
		</div>
	</div>
</template>
