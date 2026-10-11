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
				text: 'Redbean0721\'s Home',
				href: 'https://redbean.at.tw/',
				description: 'TWNIC at.tw 計畫的另一個相同的網站',
			},
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
			{
				text: 'DN42 網站',
				href: 'https://redbean0721.dn42/',
				description: '僅限 DN42 網路訪問',
			},
			{
				text: 'qzz.tw',
				href: 'https://qzz.tw/',
				description: '免登入的短網址與文字分享服務',
			}
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
			{
				text: '跨界之橋',
				href: 'https://xgb.lnstw.xyz/',
				description: '一個 Discord 上的跨群組聊天機器人',
			},
			{
				text: 'Music Bot',
				href: 'https://github.com/lnstw/music-bot',
				description: '夜間部的音樂機器人',
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
