<template>
	<div class="container">
		<!--此处title只传string值，不用加:，加:为表达式-->
		<Category title="美食">
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category> 

		<Category title="游戏">
			<ul>
				<li v-for="(item,index) in games" :key="index">{{item}}</li>
			</ul>
		</Category>

		<Category title="电影">
			<video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
			<video controls src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video>
		</Category>
	</div>
</template>

<script>
import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','拆弹专家','《你好，李焕英》','LSB'],
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
	img{
		width: 100%;
	}
	video{
		width: 100%;
	}
</style>
